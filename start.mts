import path from 'node:path'
import { fileURLToPath } from 'node:url'
import minimist from 'minimist'
import pc from 'picocolors'
import { createServer } from './packages/vite/src/node'

//
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

//
function resolveArgs() {
  const args = minimist(process.argv.slice(2))
  const { port = 3333, playground = 'for-hrm' } = args
  return { port, playground }
}

async function start() {
  const { port, playground } = resolveArgs()

  const server = await createServer({
    root: path.resolve(__dirname, `playground/${playground}`),
    server: {
      port: port,
    },
  })

  await server.listen()

  console.log(`
  🚀
  current play ${pc.blue(playground)}
  at ${pc.blue(pc.italic(`http://localhost:${port}`))}
  `)
}

start()
