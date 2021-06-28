let ButtonComponent = {
  template: `
<button style="  display: inline-flex;
  font-size: 0.875rem;
  font-weight: 400;
  justify-content: center;
  align-items: center;
  min-width: 75px;
  padding: 0 32px;
  border-radius: 3px;
  border: 1px solid #0067e9;
  letter-spacing: 0;
  transition: all 0.3s ease-out;
  line-height: 24px;
  height: 36px;

  cursor: pointer;

  color: #ffffff;
  background-color: #0067e9;
">
      <slot></slot>
</button>
`,
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
