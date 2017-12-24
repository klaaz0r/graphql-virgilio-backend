import fs from 'fs'
import path from 'path'
import Virgilio from 'virgilio'
import options from '../config'

const virgilio = new Virgilio(options)

virgilio.loadModule$(require('virgilio-http'))

const modules = ['types', 'resolvers', 'middlewares']

modules.forEach((dirname) => {
  const moduleDirectory = path.join(__dirname, dirname)
  const moduleNames = fs.readdirSync(moduleDirectory)
  moduleNames.forEach((moduleName) => {
    if (moduleName[0] === '.' || moduleName.split('.')[1] === 'graphql') {
      return
    }
    const modulePath = path.join(moduleDirectory, moduleName)
    const module = require(modulePath)
    virgilio.loadModule$(module.default ? module.default : module)
  })
})

export default virgilio
