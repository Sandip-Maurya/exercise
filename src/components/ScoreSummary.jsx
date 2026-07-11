export default function ScoreSummary({ title, correct, total, onHome }) {
  return (
    <section className="score-summary">
      <h1 className="app-title">Score</h1>
      <p className="score-set">{title}</p>
      <p className="score-value">
        {correct} / {total}
      </p>
      <p className="score-note">
        {correct === total
          ? 'Perfect score.'
          : correct === 0
            ? 'Keep practicing.'
            : 'Nice work — try another set when ready.'}
      </p>
      <button type="button" className="action-button" onClick={onHome}>
        Back to sets
      </button>
    </section>
  )
}
