<script>
import Vue from "vue";

export default {
  props: ["customComponentId", "customComponentProps"],
  data() {
    return { loading: true, component: null };
  },
  mounted() {
    import(
      /* webpackChunkName: "custom_component" */ `CustomComponent/${this.customComponentId}.vue`
    )
      .then(module => {
        this.component = Vue.component(this.customComponentId, module.default);
        this.loading = false;
      })
      .catch(err => console.error(err));
  },
  render(h) {
    return this.loading
      ? null
      : h(this.component, {
          props: this.customComponentProps
        });
  }
};
</script>