export type Action = {
  label: string
  url: string
}

export type KnowledgeItem = {
  id: string
  topic: string
  title: string
  keywords: string[]
  examples: string[]
  answer: string
  actions?: Action[]
}

export type Message = {
  id: string
  role: 'user' | 'assistant'
  text: string
  actions?: Action[]
}
