import { REPLServer } from 'repl'
import path from 'path'
import { makeTag } from './sh'

export function loadContext(r: REPLServer) {
  for (const p of Object.keys(require.cache)) {
    delete require.cache[p]
  }
  r.context.sh = makeTag('')
  r.context.prisma = makeTag('prisma ', (command) => {
    if (command === 'db push' || command === 'generate') {
      loadContext(r)
    }
  })
  r.context.db = createPrismaClient(process.env.DATABASE_URL)
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
