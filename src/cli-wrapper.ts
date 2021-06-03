#!/usr/bin/env node
import path from 'path'
import spawn from 'cross-spawn'

spawn('node', ['--experimental-repl-await', path.join(__dirname, 'cli.js')], {
  env: process.env,
  stdio: 'inherit',
})
