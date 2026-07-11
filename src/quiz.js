export const QUIZ_SECONDS_PER_QUESTION = 90

export function quizDurationSeconds(questionCount) {
  return QUIZ_SECONDS_PER_QUESTION * questionCount
}

export function unansweredCount(set, answers) {
  if (!set) return 0
  return set.questions.filter((q) => answers[q.id] === undefined).length
}

export function countCorrect(set, answers) {
  if (!set) return 0
  return set.questions.reduce((n, q) => {
    return answers[q.id] === q.answer ? n + 1 : n
  }, 0)
}

export function formatTime(totalSeconds) {
  const s = Math.max(0, totalSeconds)
  const minutes = Math.floor(s / 60)
  const seconds = s % 60
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}
