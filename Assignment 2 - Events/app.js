new Vue({
  el: '#exercise',
  data: {
    value: '[Key Pressed]'
  },
  methods: {
    onClick: () => alert("Button clicked!"),
    onKeyDown: function (event) {
      this.value = event.target.value;
    }
  }
});
