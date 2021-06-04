import execa from 'execa'

export const makeTag =
  (commandPrefix: string, callback?: (command: string) => void) =>
  (literals: TemplateStringsArray | string, ...substs: string[]) => {
    let command = ''
    if (typeof literals === 'string') {
      command = literals
    } else {
      command = literals.raw.reduce((acc, lit, i) => {
        const subst = substs[i - 1]

        return acc + subst + lit
      })
    }
    execa.commandSync(commandPrefix + command, {
      stdio: 'inherit',
      preferLocal: true,
    })
    callback && callback(command)
  }
