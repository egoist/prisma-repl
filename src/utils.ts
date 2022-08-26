import { REPLServer } from 'repl'
import path from 'path'
import { makeTag } from './sh'

export function loadContext(
  r: REPLServer,
  options: { verbose?: boolean; client?: string },
) {
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
    client: options.client,
  })
}

function createPrismaClient({
  url,
  verbose,
  client,
}: { url?: string; verbose?: boolean; client?: string } = {}) {
  const {
    PrismaClient,
  }: typeof import('@prisma/client') = require(path.resolve(
    client || 'node_modules/@prisma/client',
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
