export default function ScoreSummary({
  title,
  correct,
  total,
  onHome,
  timedOut = false,
  unanswered = 0,
  onReview,
}) {
  const percent = total > 0 ? Math.round((correct / total) * 100) : 0

  return (
    <section className="score-summary">
      <h1 className="app-title">Score</h1>
      <p className="score-set">{title}</p>
      {timedOut ? (
        <p className="score-note score-timed-out">
          Time&apos;s up — quiz submitted.
        </p>
      ) : null}
      <p className="score-value">
        {correct} / {total}
      </p>
      {onReview ? <p className="score-percent">{percent}%</p> : null}
      {unanswered > 0 ? (
        <p className="score-note">
          {unanswered} unanswered counted as incorrect.
        </p>
      ) : null}
      <p className="score-note">
        {correct === total
          ? 'Perfect score.'
          : correct === 0
            ? 'Keep practicing.'
            : 'Nice work — try another set when ready.'}
      </p>
      <div className="score-actions">
        {onReview ? (
          <button type="button" className="action-button" onClick={onReview}>
            Review answers
          </button>
        ) : null}
        <button
          type="button"
          className={onReview ? 'action-button action-button-secondary' : 'action-button'}
          onClick={onHome}
        >
          Back to sets
        </button>
      </div>
    </section>
  )
}
