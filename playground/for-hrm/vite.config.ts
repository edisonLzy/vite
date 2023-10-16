import { defineConfig } from 'vite'
import fs from 'fs-extra'
import { add } from './index'

console.log(fs.Stats)

add()

export default defineConfig(() => {
  return {
    base: '/playground/for-hrm/',
    plugins: [
      {
        name: 'test',
        config: {
          order: 'post',
          handler() {},
        },
      },
    ],
  }
})
