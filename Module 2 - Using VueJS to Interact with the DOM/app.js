new Vue({
  el: '#app',
  data: {
    title: 'Hello world!',
    link: 'https://google.com',
    finishedLink: '<a href="https://google.com">Google</a>',
    counter: 0,
    secondCounter: 0,
    x: 0,
    y: 0
  },
  computed: {
    computedResult: function () {
      console.log('computedResult fired');
      return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
    }
  },
  watch: {
    counter: function () {
      let vi = this;

      setTimeout(function () {
        vi.counter = 0;
      }, 2000);
    }
  },
  methods: {
    changeTitle: function (event) {
      this.title = event.target.value;
    },
    increment: function () {
      this.counter++;
    },
    decrement: function () {
      this.counter--;
    },
    methodResult: function () {
      console.log('methodResult fired');
      return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
    },
    updateCoords: function (event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
    alertMe: (event) => alert(event.target.value)
  }
});

new Vue({
  el: '#s4',
  data: {
    attachRed: false,
    color: 'green',
    width: 100
  },
  computed: {
    divClasses: function () {
      return {
        red: this.attachRed,
        blue: !this.attachRed
      }
    },
    myStyle: function () {
      return {
        backgroundColor: this.color,
        width: this.width + 'px'
      }
    }
  }
});
