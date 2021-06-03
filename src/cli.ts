#!/usr/bin/env node
import path from 'path'
import { cac } from 'cac'
import repl from 'repl'

const cli = cac(`prisma-repl`)

cli.parse()

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
  r.context.db = createPrismaClient()
}

function createPrismaClient() {
  const { PrismaClient } = require(path.resolve('node_modules/@prisma/client'))
  return new PrismaClient()
}
