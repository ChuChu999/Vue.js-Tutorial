<template>
  <div>
    <h3>Some User Details</h3>
    <p>User loaded has ID: {{ $route.params.id }}</p>
    <router-link class="btn btn-primary" tag="button" :to="link">Edit User</router-link>
    <br>
    <br>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        link: {
          name: 'userEdit',
          params: {
            id: this.$route.params.id
          },
          query: {
            locale: 'en',
            q: 100
          },
          hash: '#data'
        }
      };
    },
    beforeRouteEnter(to, from, next) {
      if (true) {
        next();
      } else {
        next(false);Î
      }
    }
  };
</script>
