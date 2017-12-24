import fs from 'fs'

export default function types() {
  const virgilio = this
  const types = virgilio.namespace$('types')

  const root = './app/types/'

  types.allTypes = fs.readdirSync(root)
    .map((moduleName) => {
      if (moduleName[0] === '.' || moduleName === 'index.js') {
        return null
      }
      return moduleName
    })
    .filter(val => val !== null)
    .reduce((acc, path) => {
      return acc += fs.readFileSync(root + path).toString()
    }, '')

}
