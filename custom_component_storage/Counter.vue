<template>
  <div>
    <p>Counter custom component</p>

    <h2>Counter</h2>
    <p>Current count: {{count}}</p>
    <button v-on:click="onCounterReset">Reset counter</button>
  </div>
</template>

<script>
export default {
  props: ["initialCount"],
  data: () => ({
    count: 0,
    timer: null
  }),
  methods: {
    onCounterReset: function() {
      this.count = this.initialCount;
    }
  },
  beforeMount: function() {
    this.count = this.initialCount;
  },
  mounted: function() {
    this.timer = setInterval(() => {
      this.count += 1;
    }, 1000);
  },
  beforeDestroy: function() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
};
</script>


<style scoped>
div {
  border: 1px solid cyan;
}
</style>