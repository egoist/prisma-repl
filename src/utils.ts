import { REPLServer } from 'repl'
import path from 'path'
import { makeTag } from './sh'

export function loadContext(r: REPLServer, options: { verbose?: boolean }) {
  for (const p of Object.keys(require.cache)) {
    delete require.cache[p]
  }
  r.context.sh = makeTag('')
  r.context.prisma = makeTag('prisma ', (command) => {
    if (command === 'db push' || command === 'generate') {
      loadContext(r, options)
    }
  })
  r.context.db = createPrismaClient({
    url: process.env.DATABASE_URL,
    verbose: options.verbose,
  })
}

function createPrismaClient({
  url,
  verbose,
}: { url?: string; verbose?: boolean } = {}) {
  const {
    PrismaClient,
  }: typeof import('@prisma/client') = require(path.resolve(
    'node_modules/@prisma/client',
  ))
  return new PrismaClient({
    log: verbose ? ['query', 'info', 'warn', 'error'] : undefined,
    datasources: url
      ? {
          db: {
            url,
          },
        }
      : undefined,
  })
}
