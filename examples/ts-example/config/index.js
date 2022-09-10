const config = ((env) => {
  switch (env) {
    case 'production':
      return require('./prod')
    case 'development':
      return require('./dev')
    default:
      return {}
  }
})(process.env.NODE_ENV)

const defaultConfig = {
  APP_PAGE_TITLE: '"Portal - 后台系统模板"',
  APP_ROUTER_MODE: '"hash"',
}

module.exports = Object.assign(defaultConfig, config)
