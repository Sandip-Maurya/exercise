export default function QuestionStrip({
  total,
  currentIndex,
  answers,
  questions,
  onJump,
}) {
  return (
    <nav className="question-strip" aria-label="Question navigation">
      {Array.from({ length: total }, (_, i) => {
        const questionId = questions[i].id
        const answered = answers[questionId] !== undefined
        let className = 'strip-button'
        if (i === currentIndex) className += ' strip-current'
        else if (answered) className += ' strip-answered'

        return (
          <button
            key={questionId}
            type="button"
            className={className}
            aria-current={i === currentIndex ? 'step' : undefined}
            aria-label={`Question ${i + 1}${answered ? ', answered' : ', unanswered'}`}
            onClick={() => onJump(i)}
          >
            {i + 1}
          </button>
        )
      })}
    </nav>
  )
}
