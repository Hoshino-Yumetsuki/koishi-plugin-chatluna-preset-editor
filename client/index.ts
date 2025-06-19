import { Context } from '@koishijs/client'
import { defineComponent, ref, h, resolveComponent, watch } from 'vue'
import './index.scss'
export default (ctx: Context) => {
  ctx.page({
    name: 'ChatLuna 预设编辑器',
    path: '/chatluna-preset-editor',
    desc: "",
    authority: 4,
    // order:"",

    component: defineComponent({
      setup() {
        const iframe = ref<HTMLIFrameElement>()
        return () => h(resolveComponent('k-layout'), {}, {
          default: () => h('iframe', { ref: iframe, src: "https://preset.chatluna.chat/", class: 'layout-iframe' }),
        })
      },
    }),
  })
}