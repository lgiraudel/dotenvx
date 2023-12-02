const run = function () {
  return `
Examples:

  \`\`\`
  $ dotenvx run -- npm run dev
  $ dotenvx run -- flask --app index run
  $ dotenvx run -- php artisan serve
  $ dotenvx run -- bin/rails s
  \`\`\`

Try it:

  \`\`\`
  $ echo "HELLO=World" > .env
  $ echo "console.log('Hello ' + process.env.HELLO)" > index.js

  $ dotenvx run -- node index.js
  [dotenvx][info] loading env (1) from .env
  Hello World
  \`\`\`
  `
}

const encrypt = function () {
  return `
Examples:

  \`\`\`
  $ dotenvx encrypt
  \`\`\`

Try it:

  \`\`\`
  $ echo "HELLO=World" > .env
  $ echo "HELLO=production" > .env.production
  $ echo "console.log('Hello ' + process.env.HELLO)" > index.js

  $ dotenvx encrypt
  [dotenvx][info] encrypted to .env.vault (.env,.env.production)
  [dotenvx][info] keys added to .env.keys (DOTENV_KEY_PRODUCTION,DOTENV_KEY_PRODUCTION)

  $ DOTENV_KEY='<dotenv_key_production>' dotenvx run -- node index.js
  [dotenvx][info] loading env (1) from encrypted .env.vault
  Hello production
  \`\`\`
  `
}

module.exports = {
  run,
  encrypt
}
