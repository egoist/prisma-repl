**💛 You can help the author become a full-time open-source maintainer by [sponsoring him on GitHub](https://github.com/sponsors/egoist).**

---

# prisma-repl

[![npm version](https://badgen.net/npm/v/prisma-repl)](https://npm.im/prisma-repl)

A REPL for [Prisma](https://www.prisma.io/).

## Install

```bash
npm i -g prisma-repl
# Or install locally
npm i -D prisma-repl
```

## Usage

Make sure you're inside a valid Prisma project, i.e. the directory where you ran `prisma init` or other Prisma commands.

```bash
$ prisma-repl
```

The Prisma client instance is available as `db`:

<img width="518" alt="CleanShot 2021-06-03 at 21 58 31@2x" src="https://user-images.githubusercontent.com/8784712/120657208-e204f600-c4b6-11eb-89cf-a0640b0e2e2a.png">

After regenerating the Prisma client, type `.reload` in the REPL to reload it.

## Running commands in the REPL

You can directly run commands in the REPL using `sh` tag:

<img width="938" alt="running commands in the repl" src="https://user-images.githubusercontent.com/8784712/120776752-23e57900-c557-11eb-94d2-adcca7bae49d.png">

## License

MIT &copy; [EGOIST](https://github.com/sponsors/egoist)
