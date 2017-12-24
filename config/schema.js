export default {
  env: {
    doc: 'The applicaton environment.',
    format: ['production', 'development', 'acceptance', 'test'],
    default: 'development',
    env: 'NODE_ENV'
  },
  logger: {
    level: {
      doc: 'The log level to output.',
      format: ['trace', 'debug', 'info', 'warn', 'error', 'fatal'],
      default: 'trace',
      env: 'APP_LOG_LEVEL'
    },
    name: {
      doc: 'Logger name',
      default: 'Bannerwise-DASHBOARD',
      env: 'APP_LOGGER_NAME'
    }
  },
  http: {
    port: {
      doc: 'The port the application runs at.',
      format: 'int',
      default: 9094,
      env: 'PORT'
    }
  },
  multipart: {
    auto: {
      fields: true
    },
    multipart: true,
    urlencoded: true,
    encoding: 'utf8',
  }
}
