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

<img width="730" alt="CleanShot 2021-06-03 at 21 49 08@2x" src="https://user-images.githubusercontent.com/8784712/120655782-97cf4500-c4b5-11eb-9124-8a6df5a439cb.png">

After regenerating the Prisma client, type `.reload` in the REPL to reload it.

## License

MIT &copy; [EGOIST](https://github.com/sponsors/egoist)
