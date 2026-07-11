import MarkdownMath from './MarkdownMath'

export default function QuestionCard({
  question,
  questionNumber,
  total,
  selected,
  revealed,
  onSelect,
  onSubmit,
  onNext,
  variant = 'practice',
}) {
  const isCorrect = selected === question.answer
  const isLast = questionNumber === total
  const isPractice = variant === 'practice'
  const isReview = variant === 'review'
  const showFeedback = isPractice ? revealed : isReview
  const choicesLocked = showFeedback

  return (
    <section className="question-card">
      <header className="question-header">
        <p className="question-progress">
          Question {questionNumber} of {total}
        </p>
      </header>

      <div className="question-prompt">
        <MarkdownMath>{question.prompt}</MarkdownMath>
      </div>

      <fieldset className="choices" disabled={choicesLocked}>
        <legend className="visually-hidden">Answer choices</legend>
        {question.choices.map((choice, index) => {
          let choiceClass = 'choice'
          if (showFeedback) {
            if (index === question.answer) choiceClass += ' choice-correct'
            else if (selected !== null && selected !== undefined && index === selected) {
              choiceClass += ' choice-wrong'
            }
          } else if (selected === index) {
            choiceClass += ' choice-selected'
          }

          return (
            <label key={index} className={choiceClass}>
              <input
                type="radio"
                name={`q-${question.id}`}
                value={index}
                checked={selected === index}
                onChange={() => onSelect(index)}
              />
              <span className="choice-content">
                <MarkdownMath>{choice}</MarkdownMath>
              </span>
            </label>
          )
        })}
      </fieldset>

      {isPractice && !revealed ? (
        <button
          type="button"
          className="action-button"
          disabled={selected === null}
          onClick={onSubmit}
        >
          Submit
        </button>
      ) : null}

      {isPractice && revealed ? (
        <div className="feedback">
          <p className={isCorrect ? 'feedback-ok' : 'feedback-bad'}>
            {isCorrect ? 'Correct' : 'Incorrect'}
          </p>
          <div className="explanation">
            <MarkdownMath>{question.explanation}</MarkdownMath>
          </div>
          <button type="button" className="action-button" onClick={onNext}>
            {isLast ? 'See score' : 'Next'}
          </button>
        </div>
      ) : null}

      {isReview ? (
        <div className="feedback">
          <p className={isCorrect ? 'feedback-ok' : 'feedback-bad'}>
            {selected === undefined || selected === null
              ? 'Unanswered'
              : isCorrect
                ? 'Correct'
                : 'Incorrect'}
          </p>
          <div className="explanation">
            <MarkdownMath>{question.explanation}</MarkdownMath>
          </div>
        </div>
      ) : null}
    </section>
  )
}
