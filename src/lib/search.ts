import type { KnowledgeItem } from '../types'

const fallback =
  "Mi dispiace, questa informazione non è presente nella documentazione ufficiale di Villa Cua, contatta l'host."

const stopWords = new Set([
  'a','ad','al','alla','alle','allo','anche','che','chi','come','con','da','dal',
  'dalla','delle','di','e','gli','ha','ho','i','il','in','la','le','lo','mi',
  'nel','nella','non','o','per','puo','quale','quali','quando','quanto','se',
  'si','sono','su','un','una','uno','vorrei','dove'
])

const normalize = (value: string) =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9€\s-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

const tokens = (value: string) =>
  normalize(value)
    .split(' ')
    .filter((token) => token.length > 2 && !stopWords.has(token))

const score = (question: string, item: KnowledgeItem, lastTopic?: string) => {
  const questionTokens = tokens(question)
  const corpus = tokens([
    item.title,
    item.topic,
    ...item.keywords,
    ...item.examples,
    item.answer,
  ].join(' '))

  const corpusSet = new Set(corpus)
  let total = 0

  for (const token of questionTokens) {
    if (corpusSet.has(token)) total += 5
    else if (corpus.some((word) => word.includes(token) || token.includes(word))) total += 2
  }

  const normalizedQuestion = normalize(question)
  for (const example of item.examples) {
    const normalizedExample = normalize(example)
    if (
      normalizedExample.includes(normalizedQuestion) ||
      normalizedQuestion.includes(normalizedExample)
    ) {
      total += 12
    }
  }

  if (lastTopic && item.topic === lastTopic && questionTokens.length <= 4) {
    total += 3
  }

  return total
}

export const searchKnowledge = (
  question: string,
  items: KnowledgeItem[],
  lastTopic?: string,
): KnowledgeItem => {
  const ranked = items
    .map((item) => ({ item, score: score(question, item, lastTopic) }))
    .sort((a, b) => b.score - a.score)

  if (!ranked[0] || ranked[0].score < 5) {
    return {
      id: 'fallback',
      topic: lastTopic ?? 'unknown',
      title: 'Informazione non disponibile',
      keywords: [],
      examples: [],
      answer: fallback,
      actions: [
        {
          label: 'Apri brochure generale',
          url: './docs/brochure-generale.pdf',
        },
      ],
    }
  }

  return ranked[0].item
}
