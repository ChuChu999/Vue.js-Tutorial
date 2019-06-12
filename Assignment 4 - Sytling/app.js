new Vue({
  el: '#exercise',
  data: {
    effectClasses: {
      highlight: false,
      shrink: true
    },
    float: 'float',
    userClass: '',
    isVisible: true,
    myStyle: {
      width: '100px',
      height: '100px',
      backgroundColor: 'gray'
    },
    progressBar: {
      width: '0px',
      backgroundColor: 'red'
    }
  },
  methods: {
    startEffect: function () {
      let vi = this;

      setInterval(function () {
        vi.effectClasses.highlight = !vi.effectClasses.highlight;
        vi.effectClasses.shrink = !vi.effectClasses.shrink;
      }, 2000);
    },
    startBar: function () {
      let vi = this;
      let width = 0;

      setInterval(function () {
        if (width < 100) {
          vi.progressBar.width = width++ + 'px';
        }
      }, 25);
    }
  }
});
