let ButtonComponent = {
  template: `<button style="background-color: red">
      <slot></slot>
</button>`,
  props: {
    name: String,
  },
};

// let ButtonComponent = {
//   template: `<button style="background-color: red">{{name}}</button>`,
//   props: {
//     name: String,
//   },
// };
//
// Global version
// Vue.component("utton", {
//   template: `<button style="background-color: red">BTN</button>`,
// });

new Vue({
  el: "#app",
  components: {
    "n-button": ButtonComponent,
  },
  data: {
    message: "Hello Vue!",
  },
  methods: {
    replaceText: function () {
      this.message = "lol";
    },
  },
});
