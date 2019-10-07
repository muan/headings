const fs = require('fs')
const source = fs.readFileSync('index.js', 'utf-8')

console.log('Minifying code')
const Terser = require('terser')
const result = Terser.minify(source)
const code = encodeURI(`javascript: void function(){${result.code}}()`)

console.log('Updating readme.md')
const readme = fs.readFileSync('README.md', 'utf-8')
const newReadme = readme.replace(/```js\n.+\n```/, `\`\`\`js\n${code}\n\`\`\``)
fs.writeFileSync('README.md', newReadme)

console.log('Updating index.html')
const page = fs.readFileSync('index.html', 'utf-8')
const newPage = page.replace(/code: .+\n/, `code: ${code}\n`)
fs.writeFileSync('index.html', newPage)
