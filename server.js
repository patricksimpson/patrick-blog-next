const { createServer } = require('http')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const { parse } = require('url')

const postsRepo = require('./posts')

const serialize = data => JSON.stringify({ data })

;(async _ => {
  await app.prepare()
  createServer(async (req, res) => {
    const parsedUrl = parse(req.url, true)
    const { pathname } = parsedUrl

    if (pathname.includes('/api/')) {
      const posts = await postsRepo.fetch()

      res.writeHead(200, { 'Content-Type': 'application/json'})
      return res.end(serialize(posts))
    }

    return handle(req, res, parsedUrl)
  })
  .listen(process.env.PORT || 3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:' + (process.env.PORT || 3000))
  })
})()
