export default function SetPicker({ sets, onSelect }) {
  return (
    <section className="set-picker">
      <h1 className="app-title">Math Exercises</h1>
      <p className="app-lead">
        Practice with feedback, or take a timed quiz.
      </p>
      <ul className="set-list">
        {sets.map((set) => (
          <li key={set.id} className="set-item">
            <div className="set-info">
              <span className="set-button-title">{set.title}</span>
              {set.description ? (
                <span className="set-button-description">{set.description}</span>
              ) : null}
              <span className="set-button-meta">
                {set.questions.length} questions
              </span>
            </div>
            <div className="set-actions">
              <button
                type="button"
                className="set-action-button set-action-practice"
                onClick={() => onSelect(set, 'practice')}
              >
                Practice
              </button>
              <button
                type="button"
                className="set-action-button set-action-quiz"
                onClick={() => onSelect(set, 'quiz')}
              >
                Quiz
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
