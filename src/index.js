#!/usr/bin/env node

const express = require('express')
const morgan = require('morgan')

const args = process.argv.slice(2)

if (args.length == 0) {
    console.error(`Path to static files is required (ex. "npx simple-server public")`)
    process.exit(1)
}

express()
    .use(morgan('dev'))
    .use(express.static(args[0]))
    .listen(8080, () => {
        console.log('listening on port 8080')
    })
