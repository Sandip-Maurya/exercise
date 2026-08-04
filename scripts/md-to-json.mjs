/**
 * Convert MCQ question + answer markdown into a set JSON file for the app.
 *
 * Markdown must follow docs/mcq-docs-style-guide.md.
 *
 * Usage:
 *   node scripts/md-to-json.mjs \
 *     --questions docs/topic/topic-test.md \
 *     --answers docs/topic/topic-test-answers.md \
 *     --out src/data/topic.json \
 *     --id topic \
 *     --title "Topic Test" \
 *     --description "Topics: … · Questions: N · Level: …"
 *
 * Example (differential calculus):
 *   node scripts/md-to-json.mjs \
 *     --questions docs/differential-calculus/differential-calculus-test.md \
 *     --answers docs/differential-calculus/differential-calculus-test-answers.md \
 *     --out src/data/differential-calculus.json \
 *     --id differential-calculus \
 *     --title "Differential Calculus Intermediate Test" \
 *     --description "Topics: Inverse Trigonometric Functions, Functions, Limits, Continuity, Differentiation, Applications · Questions: 30 · Level: Intermediate"
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')

function usage() {
  console.error(`Usage:
  node scripts/md-to-json.mjs \\
    --questions <path> \\
    --answers <path> \\
    --out <path> \\
    --id <set-id> \\
    --title <title> \\
    [--description <text>]`)
  process.exit(1)
}

function parseArgs(argv) {
  const args = {}
  for (let i = 0; i < argv.length; i++) {
    const key = argv[i]
    if (!key.startsWith('--')) {
      console.error(`Unexpected argument: ${key}`)
      usage()
    }
    const name = key.slice(2)
    const value = argv[++i]
    if (value === undefined || value.startsWith('--')) {
      console.error(`Missing value for --${name}`)
      usage()
    }
    args[name] = value
  }
  return args
}

function resolveFromRoot(p) {
  return path.isAbsolute(p) ? p : path.join(root, p)
}

function normalizeMarkdownForRender(text) {
  let s = text.replace(/\r\n/g, '\n').trim()

  // Blank line before each display-math block when it follows prose.
  s = s.replace(/([^\n])\n(\$\$[\s\S]*?\$\$)/g, '$1\n\n$2')
  // Blank line after each display-math block when more prose follows.
  s = s.replace(/(\$\$[\s\S]*?\$\$)\n(?!\n|$)/g, '$1\n\n')

  return s.replace(/\n{3,}/g, '\n\n')
}

function parseAnswers(text) {
  const answerMap = {}
  const normalized = text.replace(/\r\n/g, '\n')
  const re =
    /### Q(\d+) — \*\*([A-D])\*\*\s*\n\n([\s\S]*?)(?=\n### Q|\n---|\n## Quick Reference|$)/g
  let match
  while ((match = re.exec(normalized)) !== null) {
    answerMap[Number(match[1])] = {
      answer: match[2].charCodeAt(0) - 65,
      explanation: match[3].trim(),
    }
  }
  return answerMap
}

function parseQuestions(text) {
  const normalized = text.replace(/\r\n/g, '\n')
  const blocks = normalized.split(/\n### Q(\d+)\.\s*/).slice(1)
  const questions = []

  for (let i = 0; i < blocks.length; i += 2) {
    const qNum = Number(blocks[i])
    const block = blocks[i + 1].trim()
    const lines = block.split('\n')
    const choiceStart = lines.findIndex((line) => /^[A-D]\)\s/.test(line.trim()))

    if (choiceStart === -1) {
      throw new Error(`No choices found for Q${qNum}`)
    }

    const prompt = lines
      .slice(0, choiceStart)
      .join('\n')
      .replace(/^###\s+/gm, '')
      .trim()

    const choices = lines
      .slice(choiceStart)
      .filter((line) => /^[A-D]\)\s/.test(line.trim()))
      .map((line) => line.trim().replace(/^[A-D]\)\s*/, ''))

    if (choices.length !== 4) {
      throw new Error(`Expected 4 choices for Q${qNum}, got ${choices.length}`)
    }

    questions.push({ qNum, prompt, choices })
  }

  return questions
}

function convert({ questionsPath, answersPath, outputPath, meta }) {
  const questionsMd = fs.readFileSync(questionsPath, 'utf8')
  const answersMd = fs.readFileSync(answersPath, 'utf8')
  const answerMap = parseAnswers(answersMd)
  const parsed = parseQuestions(questionsMd)

  if (parsed.length === 0) {
    throw new Error(`No questions found in ${questionsPath}`)
  }

  const questions = parsed.map(({ qNum, prompt, choices }) => {
    const answerEntry = answerMap[qNum]
    if (!answerEntry) {
      throw new Error(`Missing answer for Q${qNum}`)
    }

    return {
      id: `q${qNum}`,
      prompt: normalizeMarkdownForRender(prompt),
      choices,
      answer: answerEntry.answer,
      explanation: normalizeMarkdownForRender(answerEntry.explanation),
    }
  })

  const missingInQuestions = Object.keys(answerMap)
    .map(Number)
    .filter((n) => !parsed.some((q) => q.qNum === n))
  if (missingInQuestions.length > 0) {
    console.warn(
      `Warning: answers without questions: ${missingInQuestions.join(', ')}`,
    )
  }

  const output = {
    id: meta.id,
    title: meta.title,
    description: meta.description,
    questions,
  }

  fs.mkdirSync(path.dirname(outputPath), { recursive: true })
  fs.writeFileSync(outputPath, `${JSON.stringify(output, null, 2)}\n`)
  console.log(`Wrote ${questions.length} questions to ${outputPath}`)
}

const args = parseArgs(process.argv.slice(2))
const required = ['questions', 'answers', 'out', 'id', 'title']
for (const key of required) {
  if (!args[key]) {
    console.error(`Missing --${key}`)
    usage()
  }
}

convert({
  questionsPath: resolveFromRoot(args.questions),
  answersPath: resolveFromRoot(args.answers),
  outputPath: resolveFromRoot(args.out),
  meta: {
    id: args.id,
    title: args.title,
    description: args.description ?? '',
  },
})
