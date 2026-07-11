import { useState } from 'react'
import { exerciseSets } from './data/sets'
import SetPicker from './components/SetPicker'
import QuestionCard from './components/QuestionCard'
import ScoreSummary from './components/ScoreSummary'
import './App.css'

export default function App() {
  const [view, setView] = useState('home')
  const [currentSet, setCurrentSet] = useState(null)
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState(null)
  const [revealed, setRevealed] = useState(false)
  const [correctCount, setCorrectCount] = useState(0)

  function startSet(set) {
    setCurrentSet(set)
    setIndex(0)
    setSelected(null)
    setRevealed(false)
    setCorrectCount(0)
    setView('quiz')
  }

  function handleSubmit() {
    if (selected === null || !currentSet) return
    if (selected === currentSet.questions[index].answer) {
      setCorrectCount((n) => n + 1)
    }
    setRevealed(true)
  }

  function handleNext() {
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

  function goHome() {
    setView('home')
    setCurrentSet(null)
    setIndex(0)
    setSelected(null)
    setRevealed(false)
    setCorrectCount(0)
  }

  return (
    <div className="app">
      <main className="app-main">
        {view === 'home' && (
          <SetPicker sets={exerciseSets} onSelect={startSet} />
        )}

        {view === 'quiz' && currentSet && (
          <>
            <button type="button" className="link-button" onClick={goHome}>
              All sets
            </button>
            <p className="set-label">{currentSet.title}</p>
            <QuestionCard
              question={currentSet.questions[index]}
              questionNumber={index + 1}
              total={currentSet.questions.length}
              selected={selected}
              revealed={revealed}
              onSelect={setSelected}
              onSubmit={handleSubmit}
              onNext={handleNext}
            />
          </>
        )}

        {view === 'score' && currentSet && (
          <ScoreSummary
            title={currentSet.title}
            correct={correctCount}
            total={currentSet.questions.length}
            onHome={goHome}
          />
        )}
      </main>
    </div>
  )
}
