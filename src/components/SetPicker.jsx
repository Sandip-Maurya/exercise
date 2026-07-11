export default function SetPicker({ sets, onSelect }) {
  return (
    <section className="set-picker">
      <h1 className="app-title">Math Exercises</h1>
      <p className="app-lead">Pick a set to begin.</p>
      <ul className="set-list">
        {sets.map((set) => (
          <li key={set.id}>
            <button
              type="button"
              className="set-button"
              onClick={() => onSelect(set)}
            >
              <span className="set-button-title">{set.title}</span>
              {set.description ? (
                <span className="set-button-description">{set.description}</span>
              ) : null}
              <span className="set-button-meta">
                {set.questions.length} questions
              </span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}
