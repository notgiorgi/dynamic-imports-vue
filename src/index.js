import Vue from 'vue'

import LazyLoader from './LazyLoader.vue'
import Page from './Page.vue'

new Vue({
  el: '#app',
  components: {
    LazyLoader,
    Page,
  },
  data: {},
  methods: {},
  render(h) {
    return h('Page', {
      props: {
        id: 2,
      },
    })
  },
})
