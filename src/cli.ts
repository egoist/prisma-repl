#!/usr/bin/env node
import path from 'path'
import { cac } from 'cac'
import repl from 'repl'
import { sh } from './sh'

const cli = cac(`prisma-repl`)
cli.option('--url <url>', 'Override database URL')

const { options }: { options: { url?: string } } = cli.parse()

const r = repl.start('> ')
r.on('exit', () => process.exit())

r.setupHistory('node_modules/.prisma-repl-history', (err) => {
  if (err) console.error(err)
})

r.defineCommand('reload', {
  help: 'Remove cache for loaded modules',
  action(name) {
    this.clearBufferedCommand()
    loadContext()
    this.displayPrompt()
  },
})

loadContext()

function loadContext() {
  for (const p of Object.keys(require.cache)) {
    delete require.cache[p]
  }
  r.context.db = createPrismaClient(options.url)
  r.context.sh = sh
}

function createPrismaClient(url?: string) {
  const {
    PrismaClient,
  }: typeof import('@prisma/client') = require(path.resolve(
    'node_modules/@prisma/client',
  ))
  return new PrismaClient({
    datasources: url
      ? {
          db: {
            url,
          },
        }
      : undefined,
  })
}
