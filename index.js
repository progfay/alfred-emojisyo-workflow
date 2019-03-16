const alfy = require('alfy')
const { lib } = require('emojilib')
const emojisyo = require('./emojisyo')

const keywordList = Object.keys(emojisyo)

const getEmojis = keyword => (
  alfy.matches(keyword, keywordList)
    .map(key => emojisyo[key])
    .flat()
)

let items = null
const inputs = alfy.input.split(/\s+/g).filter(Boolean)
for (const input of inputs) {
  items = items
    ? new Set(getEmojis(input).filter(emoji => items.has(emoji)))
    : new Set(getEmojis(input))
}

alfy.output(
  Array.from(items).map(name => ({
    title: `${(lib[name] || {}).char} :${name}:`,
    subtitle: lib[name].keywords.join(', '),
    emoji: lib[name].char,
    arg: lib[name].char,
    name: name,
    icon: { path: './5502E777-B578-4938-B155-D11E48EA3589.png' }
  }))
)
