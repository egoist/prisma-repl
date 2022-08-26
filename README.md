**💛 You can help the author become a full-time open-source maintainer by [sponsoring him on GitHub](https://github.com/sponsors/egoist).**

---

# prisma-repl

[![npm version](https://badgen.net/npm/v/prisma-repl)](https://npm.im/prisma-repl) [![npm downloads](https://badgen.net/npm/dm/prisma-repl)](https://npm.im/prisma-repl)

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

<img width="783" alt="running commands in the repl" src="https://user-images.githubusercontent.com/8784712/120778561-0a453100-c559-11eb-8cfe-e18cbfb7fb7e.png">

For Prisma commands, you can use use the `prisma` shorthand:

<img width="769" alt="CleanShot 2021-06-04 at 17 46 27@2x" src="https://user-images.githubusercontent.com/8784712/120782702-d79d3780-c55c-11eb-83b1-850964393db8.png">

The Prisma client is automatically reloaded in the REPL when you run commands like `prisma db push` or `prisma generate`.

## Help

```
prisma-repl/0.0.0

Usage:
  $ prisma-repl <command> [options]

Options:
  --url <url>     Override database URL
  --client <dir>  The output directory for your prisma client (default: node_modules/@prisma/client)
  --verbose       Show all Prisma logs
  -v, --version   Display version number
  -h, --help      Display this message
```

## Sponsors

[![sponsors](https://sponsors-images.egoist.sh/sponsors.svg)](https://github.com/sponsors/egoist)

## License

MIT &copy; [EGOIST](https://github.com/sponsors/egoist)
