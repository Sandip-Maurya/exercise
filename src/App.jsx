import { useEffect, useRef, useState } from 'react'
import { exerciseSets } from './data/sets'
import {
  countCorrect,
  formatTime,
  quizDurationSeconds,
  unansweredCount,
} from './quiz'
import SetPicker from './components/SetPicker'
import QuestionCard from './components/QuestionCard'
import QuestionStrip from './components/QuestionStrip'
import ScoreSummary from './components/ScoreSummary'
import './App.css'

export default function App() {
  const [view, setView] = useState('home')
  const [mode, setMode] = useState(null)
  const [currentSet, setCurrentSet] = useState(null)
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState(null)
  const [revealed, setRevealed] = useState(false)
  const [correctCount, setCorrectCount] = useState(0)
  const [answers, setAnswers] = useState({})
  const [timeLeft, setTimeLeft] = useState(0)
  const [timedOut, setTimedOut] = useState(false)
  const finishingRef = useRef(false)
  const answersRef = useRef(answers)
  const currentSetRef = useRef(currentSet)

  answersRef.current = answers
  currentSetRef.current = currentSet

  function resetSession() {
    setView('home')
    setMode(null)
    setCurrentSet(null)
    setIndex(0)
    setSelected(null)
    setRevealed(false)
    setCorrectCount(0)
    setAnswers({})
    setTimeLeft(0)
    setTimedOut(false)
    finishingRef.current = false
  }

  function startSet(set, nextMode) {
    setCurrentSet(set)
    setMode(nextMode)
    setIndex(0)
    setSelected(null)
    setRevealed(false)
    setCorrectCount(0)
    setAnswers({})
    setTimedOut(false)
    finishingRef.current = false
    if (nextMode === 'quiz') {
      setTimeLeft(quizDurationSeconds(set.questions.length))
    } else {
      setTimeLeft(0)
    }
    setView('session')
  }

  function finishQuiz({ fromTimeout = false } = {}) {
    const set = currentSetRef.current
    const currentAnswers = answersRef.current
    if (!set || finishingRef.current) return
    finishingRef.current = true
    const blanks = unansweredCount(set, currentAnswers)
    if (!fromTimeout && blanks > 0) {
      const ok = window.confirm(
        `${blanks} question(s) unanswered. Submit anyway? Unanswered count as incorrect.`,
      )
      if (!ok) {
        finishingRef.current = false
        return
      }
    }
    setCorrectCount(countCorrect(set, currentAnswers))
    if (fromTimeout) setTimedOut(true)
    setView('score')
  }

  useEffect(() => {
    if (mode !== 'quiz' || view !== 'session') return undefined

    const id = window.setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          window.clearInterval(id)
          queueMicrotask(() => finishQuiz({ fromTimeout: true }))
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => window.clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, view, currentSet])

  function handlePracticeSubmit() {
    if (selected === null || !currentSet) return
    if (selected === currentSet.questions[index].answer) {
      setCorrectCount((n) => n + 1)
    }
    setRevealed(true)
  }

  function handlePracticeNext() {
    if (!currentSet) return
    const next = index + 1
    if (next >= currentSet.questions.length) {
      setView('score')
      return
    }
    setIndex(next)
    setSelected(null)
    setRevealed(false)
  }

  function handleQuizSelect(choiceIndex) {
    const question = currentSet.questions[index]
    setAnswers((prev) => ({ ...prev, [question.id]: choiceIndex }))
  }

  function goHome() {
    if (mode === 'quiz' && view === 'session') {
      const ok = window.confirm('Leave quiz? Your progress will be lost.')
      if (!ok) return
    }
    resetSession()
  }

  function startReview() {
    setIndex(0)
    setView('review')
  }

  const currentQuestion = currentSet?.questions[index]
  const quizSelected =
    currentQuestion && answers[currentQuestion.id] !== undefined
      ? answers[currentQuestion.id]
      : null

  return (
    <div className="app">
      <main className="app-main">
        {view === 'home' && (
          <SetPicker sets={exerciseSets} onSelect={startSet} />
        )}

        {view === 'session' && currentSet && mode === 'practice' && (
          <>
            <button type="button" className="link-button" onClick={goHome}>
              All sets
            </button>
            <p className="set-label">{currentSet.title}</p>
            <QuestionCard
              variant="practice"
              question={currentSet.questions[index]}
              questionNumber={index + 1}
              total={currentSet.questions.length}
              selected={selected}
              revealed={revealed}
              onSelect={setSelected}
              onSubmit={handlePracticeSubmit}
              onNext={handlePracticeNext}
            />
          </>
        )}

        {view === 'session' && currentSet && mode === 'quiz' && (
          <>
            <div className="session-top">
              <button type="button" className="link-button" onClick={goHome}>
                All sets
              </button>
              <p
                className={timeLeft <= 30 ? 'timer timer-warn' : 'timer'}
                aria-live="polite"
              >
                Time left: {formatTime(timeLeft)}
              </p>
            </div>
            <p className="set-label">{currentSet.title} · Quiz</p>
            <QuestionStrip
              total={currentSet.questions.length}
              currentIndex={index}
              answers={answers}
              questions={currentSet.questions}
              onJump={setIndex}
            />
            <QuestionCard
              variant="quiz"
              question={currentSet.questions[index]}
              questionNumber={index + 1}
              total={currentSet.questions.length}
              selected={quizSelected}
              revealed={false}
              onSelect={handleQuizSelect}
            />
            <div className="quiz-nav">
              <button
                type="button"
                className="action-button action-button-secondary"
                disabled={index === 0}
                onClick={() => setIndex((i) => i - 1)}
              >
                Previous
              </button>
              <button
                type="button"
                className="action-button action-button-secondary"
                disabled={index >= currentSet.questions.length - 1}
                onClick={() => setIndex((i) => i + 1)}
              >
                Next
              </button>
              <button
                type="button"
                className="action-button"
                onClick={() => finishQuiz()}
              >
                Submit quiz
              </button>
            </div>
          </>
        )}

        {view === 'score' && currentSet && (
          <ScoreSummary
            title={currentSet.title}
            correct={correctCount}
            total={currentSet.questions.length}
            onHome={resetSession}
            timedOut={mode === 'quiz' ? timedOut : false}
            unanswered={
              mode === 'quiz' ? unansweredCount(currentSet, answers) : 0
            }
            onReview={mode === 'quiz' ? startReview : undefined}
          />
        )}

        {view === 'review' && currentSet && (
          <>
            <button type="button" className="link-button" onClick={resetSession}>
              All sets
            </button>
            <p className="set-label">{currentSet.title} · Review</p>
            <QuestionStrip
              total={currentSet.questions.length}
              currentIndex={index}
              answers={answers}
              questions={currentSet.questions}
              onJump={setIndex}
            />
            <QuestionCard
              variant="review"
              question={currentSet.questions[index]}
              questionNumber={index + 1}
              total={currentSet.questions.length}
              selected={
                answers[currentSet.questions[index].id] !== undefined
                  ? answers[currentSet.questions[index].id]
                  : null
              }
              revealed
              onSelect={() => {}}
            />
            <div className="quiz-nav">
              <button
                type="button"
                className="action-button action-button-secondary"
                disabled={index === 0}
                onClick={() => setIndex((i) => i - 1)}
              >
                Previous
              </button>
              {index < currentSet.questions.length - 1 ? (
                <button
                  type="button"
                  className="action-button action-button-secondary"
                  onClick={() => setIndex((i) => i + 1)}
                >
                  Next
                </button>
              ) : (
                <button
                  type="button"
                  className="action-button"
                  onClick={resetSession}
                >
                  Back to sets
                </button>
              )}
            </div>
          </>
        )}
      </main>
    </div>
  )
}
