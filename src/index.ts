import { Context } from 'koishi'
import {} from '@koishijs/plugin-console'
import { resolve } from 'path'

export const name = 'chatluna-preset-editor'

export function apply(ctx: Context) {
  ctx.inject(['console'], (ctx) => {
    ctx.console.addEntry({
      dev: resolve(__dirname, '../client/index.ts'),
      prod: resolve(__dirname, '../dist')
    })
  })
}
