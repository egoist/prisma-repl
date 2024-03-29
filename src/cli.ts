#!/usr/bin/env node
import { cac } from 'cac'
import repl from 'repl'
import { loadContext } from './utils'
import { version } from '../package.json'

const cli = cac(`prisma-repl`)
cli.option('--url <url>', 'Override database URL')
cli.option('--client <dir>', 'The output directory for your prisma client', {
  default: `node_modules/@prisma/client`,
})
cli.option('--verbose', 'Show all Prisma logs')

cli.version(version)
cli.help()
const {
  options,
}: {
  options: { url?: string; verbose?: boolean; client?: string; help?: boolean }
} = cli.parse()

if (options.help) {
  process.exit()
}

if (options.url) {
  process.env.DATABASE_URL = options.url
}

const r = repl.start('> ')
r.on('exit', () => process.exit())

r.setupHistory('node_modules/.prisma-repl-history', (err) => {
  if (err) console.error(err)
})

const initContext = () =>
  loadContext(r, { verbose: options.verbose, client: options.client })

r.defineCommand('reload', {
  help: 'Remove cache for loaded modules',
  action(name) {
    this.clearBufferedCommand()
    initContext()
    this.displayPrompt()
  },
})

initContext()
