let data = {
  title: 'The VueJS Instance',
  showParagraph: false
}

Vue.component('hello', {
  template: '<h1>Hello!</h1>'
})

let vm1 = new Vue({
  el: '#app1',
  data: data,
  methods: {
    show: function () {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
      this.$refs.myButton.innerText = 'Test';
    },
    updateTitle: function (title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function () {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function (value) {
      alert('Title changed, new value: ' + value);
    }
  }
});

vm1.$refs.heading.innerText = 'Something else';

setTimeout(function () {
  vm1.title = 'Changed by Timer';
  vm1.show();
}, 3000);

let vm2 = new Vue({
  el: '#app2',
  data: {
    title: 'The second Instance'
  },
  methods: {
    onChange: function () {
      vm1.title = 'Changed!'
    }
  }
});

let vm3 = new Vue({
  template: '<h1>Hello!</h1>'
});

// same as vm3.$mount('#app3') and el: '#app3'
vm3.$mount();
document.getElementById('app3').appendChild(vm3.$el);
