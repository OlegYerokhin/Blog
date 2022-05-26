<template>
  <div>
    <div class="number-block">
      <div class="articles">
        <p class="title">Posts:</p>
        <p class="number">{{ getFullPosts.length }}</p>
      </div>
      
      <div class="users">
        <p class="title">Users: </p>
        <p class="number">{{ getUsersList.length + 1 }}</p>
      </div>
    </div>
  </div>
  
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'AdminMain',
  data: () => ({

  }),

  computed: {
    ...mapState(['posts', 'users']),

    getFullPosts() {
      return this.$store.state.posts
    },

    getUsersList() {
      return this.$store.state.users
    }
  },

  methods: {
    ...mapActions(['getUsers', 'getPosts']),

    getAllUsers() {
      this.getUsers()
    },

    getAllPosts() {
      this.getPosts()
    },
  },

  created() {
    this.getAllUsers()
    this.getAllPosts()
  }
}
</script>

<style lang="scss" scoped>
.number-block {
  display: flex;
  width: 954px;
}

.articles {
  background-color: lightblue;
  margin: 10px 20px;
  width: 300px;
  height: 200px;
  border-radius: 55px;
}

.title {
  margin: 20px;
  font-size: 22px;
  font-weight: 700;
  color: #fff;
}

.number {
  margin: 20px;
  font-size: 100px;
  font-weight: 700;
  color: #fff;
}

.users {
  background-color: lightsteelblue;
  margin: 10px 20px;
  width: 300px;
  height: 200px;
  border-radius: 55px;
}
</style>