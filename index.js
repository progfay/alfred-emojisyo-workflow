const alfy = require('alfy')
const { lib } = require('emojilib')
const emojisyo = require('./emojisyo')

alfy.output(
  Array.from(new Set(
    alfy.inputMatches(Object.keys(emojisyo))
      .map(keyword => emojisyo[keyword])
      .flat()
  )).map(name => ({
    title: `${(lib[name] || {}).char} :${name}:`,
    subtitle: lib[name].keywords.join(', '),
    emoji: lib[name].char,
    arg: lib[name].char,
    name: name,
    icon: { path: './5502E777-B578-4938-B155-D11E48EA3589.png' }
  }))
)
