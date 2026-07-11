const modules = import.meta.glob('./*.json', { eager: true })

function isValidSet(set) {
  return (
    set &&
    typeof set.id === 'string' &&
    typeof set.title === 'string' &&
    Array.isArray(set.questions) &&
    set.questions.length > 0
  )
}

export const exerciseSets = Object.values(modules)
  .map((mod) => mod.default)
  .filter(isValidSet)
  .sort((a, b) => a.title.localeCompare(b.title))
