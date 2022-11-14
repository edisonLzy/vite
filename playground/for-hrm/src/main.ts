import { render } from './render'
import { initState } from './state'

import.meta.hot.accept('render.ts', (mod) => {
  mod.render()
})
render()
initState()
