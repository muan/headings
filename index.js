let map = ""

for(const heading of document.querySelectorAll('h1, h2, h3, h4, h5, h6')) {
  const text = getText(heading)
  if (heading.clientHeight > 0 && getText(heading)) { // visible
    const n = parseInt(heading.tagName.match(/\d/)[0])
    map += (new Array((n-1)*2)).fill("-").join("") + heading.tagName.toLowerCase() + ": " + text + "\n"
  }
}
console.log(map)

function getText(heading) {
  return heading.innerText.replace(/\n/g, '')
}
