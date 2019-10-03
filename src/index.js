import Vue from 'vue'

import LazyLoader from './LazyLoader.vue'

new Vue({
  el: '#app',
  components: {
    LazyLoader,
  },
  data: {
    message: 'Hello Vue!',
    customComponentsToLoad: [],
  },
  methods: {
    loadCustomComponent(customComponentId, customComponentProps = {}) {
      this.customComponentsToLoad = [
        ...this.customComponentsToLoad,
        { customComponentId, customComponentProps },
      ]
    },
  },
  render(h) {
    return h('div', [
      h('h1', this.message),
      h(
        'button',
        {
          on: {
            click: () => this.loadCustomComponent('Counter', { initialCount: 30 }),
          },
        },
        'Load & mount Counter custom component',
      ),
      h('br'),
      h(
        'button',
        {
          on: {
            click: () => this.loadCustomComponent('Table'),
          },
        },
        'Load & mount Table custom component',
      ),
      this.customComponentsToLoad.map(({ customComponentId, customComponentProps }) => {
        return h('LazyLoader', {
          props: {
            customComponentId,
            customComponentProps,
          },
        })
      }),
    ])
  },
})
