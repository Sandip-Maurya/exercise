# MCQ Docs Style Guide

How to prepare **question** and **answer** markdown files under `docs/`. Follow this so future tests match [`advanced-math-mcq.md`](./advanced-math-mcq.md) and [`advanced-math-mcq-answers.md`](./advanced-math-mcq-answers.md).

---

## File layout

| File | Purpose |
|------|---------|
| `{slug}.md` | Questions only — no answers |
| `{slug}-answers.md` | Answers, explanations, quick reference |

Examples: `advanced-math-mcq.md` + `advanced-math-mcq-answers.md`.

Keep both in `docs/`. Link them to each other.

---

## Question doc (`{slug}.md`)

### Header

```markdown
# {Title} MCQ Test ({N} Questions)

**Topics:** Topic1, Topic2, Topic3, ...

---
```

- `#` for the document title only.
- Put the question count in the title: `(30 Questions)`.
- List topics in the order questions appear (comma-separated).
- One horizontal rule `---` after the header.

### Topic order

Number and group questions in this sequence when applicable:

1. Algebra  
2. Trigonometry  
3. Functions  
4. Limits  
5. Continuity  
6. Differentiation  
7. Integration  
8. Applications  
9. Differential Equations  
10. Linear Algebra  

Skip topics with no questions. Do not put topic names in individual question headings.

### Question block

```markdown
### Q1. {Full question text on this same line}

A) {option}
B) {option}
C) {option}
D) {option}
```

Rules:

| Rule | Do | Don’t |
|------|----|-------|
| Heading level | `###` (one level under `#`) | `##` for questions |
| Numbering | `Q1.`, `Q2.`, … continuous integers | Restart per topic; `Q 1`; `Question 1` |
| Prompt | Starts on the heading line after `Qn.` | Separate heading with only `Qn` |
| Options | Plain lines `A)` `B)` `C)` `D)` | `- A)` bullets; `a)` lowercase |
| Spacing | Blank line after heading; blank line before next `###` | Extra blank lines between A–D |
| Topic labels | Omit from headings | `### Q1. Limits` |

### Multi-line prompts

Prefer a single-line `### Qn. …` stem. When display math must sit in the middle of the prompt, keep **every prose line of the stem** as a `###` heading so the question style stays consistent. Leave `$$…$$` blocks as plain display math (not headings).

```markdown
### Q10. For what value of $k$ is

$$
f(x) = \begin{cases}
\dfrac{x^2-9}{x-3}, & x \neq 3 \\
k, & x = 3
\end{cases}
$$

### continuous?

A) $3$
B) $6$
C) $9$
D) $12$
```

Do **not** leave trailing prompt text as normal body paragraphs.

### Math

- Inline: `$...$`
- Display: `$$...$$` on their own lines
- Always use `\dfrac` for fractions (options, inline, and display). Do not use `\frac` or `\tfrac` unless you deliberately need a compact fraction.
- Prefer `\displaystyle` on limits/sums/integrals in the stem when it improves readability
- Wrap every option that is math in `$...$` (including integers: `$3$`)
- Non-math options stay plain text: `Diverges`, `Does not exist`

### What not to include

- No answer key
- No explanations
- No difficulty stars unless you add them once in the header (optional)

---

## Answer doc (`{slug}-answers.md`)

### Header

```markdown
# {Same title as questions} — Answer Key

Companion to [`{slug}.md`](./{slug}.md).

---
```

### Per-question entry

```markdown
### Q1 — **B**

{Short explanation with math as needed.}
```

Rules:

| Rule | Detail |
|------|--------|
| Heading | `### Qn — **X**` where `X` is `A`, `B`, `C`, or `D` |
| Em dash | Use `—` between number and answer (not a hyphen alone) |
| Answer letter | Bold: `**B**` |
| Explanation | Concise: key identity/step, then result; 2–6 lines typical |
| Math | Same `$` / `$$` conventions as the question doc |
| Order | Same numbering as the question doc |

### Quick reference table

End with a compact table (optional but preferred):

```markdown
---

## Quick Reference

| Q | Answer | Q | Answer | Q | Answer |
|---|--------|---|--------|---|--------|
| 1 | B | 11 | C | 21 | B |
| 2 | B | 12 | A | 22 | A |
...
```

Use three columns of `Q | Answer` when there are many questions.

---

## Checklist before publishing

1. Question count in the title matches the last `Qn`.
2. Topics line matches the intended order; questions follow that order.
3. Every question has exactly four options `A)`–`D)`.
4. Answer doc has one entry per question; letters match the intended key.
5. No answers leaked into the question doc.
6. No `-` bullets on options.
7. Multi-line stems: every prose continuation of the prompt uses `###` (display math stays in `$$`).
8. Fractions use `\dfrac` (not `\frac`).
9. Cross-links between the two files work.

---

## Minimal templates

### Questions

```markdown
# Sample MCQ Test (2 Questions)

**Topics:** Algebra, Limits

---

### Q1. Solve for $x$: $2x + 1 = 5$.

A) $1$
B) $2$
C) $3$
D) $4$

### Q2. Evaluate $\displaystyle\lim_{x \to 0} \dfrac{\sin x}{x}$.

A) $0$
B) $1$
C) $-1$
D) Does not exist
```

### Answers

```markdown
# Sample MCQ Test — Answer Key

Companion to [`sample-mcq.md`](./sample-mcq.md).

---

### Q1 — **B**

$2x + 1 = 5 \implies 2x = 4 \implies x = 2$.

### Q2 — **B**

Standard limit: $\lim_{x \to 0} \dfrac{\sin x}{x} = 1$.

---

## Quick Reference

| Q | Answer |
|---|--------|
| 1 | B |
| 2 | B |
```
