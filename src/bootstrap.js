import 'source-map-support/register'
import server from 'cinestrip/lib/server'

global.__DEVELOPMENT__ = process.env.NODE_ENV !== 'production'

const bootstrap = () => {
  const options = {
    hook: true,
    ignore: /(\/\.|~$|\.json$)/i
  }

  if (__DEVELOPMENT__) {
    if (!require('piping')(options)) {
      return
    }
  }

  server.start()
}

bootstrap()
