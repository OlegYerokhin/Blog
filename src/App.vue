<template>
  <div id="app" class="app">
    <Header />
    <div class="content">
      <router-view />
    </div>
    
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
// import { mapState, mapMutations, mapActions } from 'vuex'
import Footer from './components/Footer.vue'


export default {
  name: 'App',
  components: {
    Header,

    Footer
  },
  data: () => ({
    // login: '',
    // password: '',
    // showLabel: true,
  }),
  computed: {
    // ...mapState(['users']),
  },

  methods: {

    // ...mapMutations(['setUsers']),
    // ...mapActions(['getUsers']),

    // getAllUsers() {
    //   this.getUsers()
    // }
  },

  created() {
    // this.getUsers()
  }

}
</script>

<style>
@import './assets/reset.css';
.app {
  font-family: Arial, Helvetica, sans-serif;
}

.content {
  min-height: calc(100vh - 150px);
}



</style>
