const path = require('path')
const { promisify } = require('util')
const frontMatter = require('front-matter')
const fs = require('fs')

const readdir = promisify(fs.readdir)
const readFile = promisify(fs.readFile)

const deserialize = parsed => ({
  title: parsed.attributes.title,
  date: parsed.attributes.date,
  body: parsed.body
})

async function fetch() {
  const postsDir = path.join(__dirname, 'posts')
  const filenames = await readdir(postsDir)

  return Promise.resolve(filenames.map(async filename => {
    const markdown = await readFile(path.join(postsDir, filename), 'utf-8')
    const parsed = frontMatter(markdown)
    return deserialize(parsed)
  }))
}

exports.fetch = fetch
