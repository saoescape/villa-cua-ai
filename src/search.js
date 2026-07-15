const STOPWORDS = new Set([
  'a','ad','al','alla','alle','allo','anche','che','chi','come','con','da','dal','dalla','delle','di','e','gli','ha','ho','i','il','in','la','le','lo','mi','nel','nella','non','o','per','puo','quali','quando','quanto','se','si','sono','su','un','una','uno','vorrei','dove'
])

export const normalize = (value = '') => value
  .toLowerCase()
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .replace(/[^a-z0-9€\s]/g, ' ')
  .replace(/\s+/g, ' ')
  .trim()

const tokens = (value) => normalize(value)
  .split(' ')
  .filter((word) => word.length > 2 && !STOPWORDS.has(word))

function score(question, entry, lastTopic) {
  const queryTokens = tokens(question)
  const corpus = tokens([
    entry.title,
    ...(entry.keywords || []),
    ...(entry.questions || []),
    entry.answer,
  ].join(' '))
  const exact = new Set(corpus)
  let points = 0

  for (const word of queryTokens) {
    if (exact.has(word)) points += 4
    else if (corpus.some((item) => item.includes(word) || word.includes(item))) points += 1
  }

  const normalizedQuestion = normalize(question)
  for (const example of entry.questions || []) {
    const normalizedExample = normalize(example)
    if (normalizedExample && (
      normalizedQuestion.includes(normalizedExample) ||
      normalizedExample.includes(normalizedQuestion)
    )) points += 9
  }

  if (lastTopic && lastTopic === entry.topic && queryTokens.length < 5) points += 2
  return points
}

export function findBestAnswer(question, entries, fallback, lastTopic) {
  const ranked = entries
    .map((entry) => ({ entry, score: score(question, entry, lastTopic) }))
    .sort((a, b) => b.score - a.score)

  if (!ranked[0] || ranked[0].score < 4) {
    return { answer: fallback, actions: [], topic: lastTopic, isFallback: true }
  }

  return { ...ranked[0].entry, isFallback: false }
}
