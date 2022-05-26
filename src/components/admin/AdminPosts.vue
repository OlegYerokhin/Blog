<template>
  <div class="posts">
    <div v-for="post in getFullPosts" 
      :key="post.id" 
      class="posts-list"
    >
      <p class="post-index">{{post.id}}.</p>
        <p class="post-title">{{post.title}}</p>
          <button class="posts-btn" 
            @click="$router.push(`/edit-article-page/${post.id}`)"
          >Edit</button>
          <button class="posts-btn">Remove</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'AdminPosts',
  data: () => ({
    
  }),
  computed: {
    ...mapState(['posts']),

    getFullPosts() {
      return this.$store.state.posts
    }
  },

  methods: {
    ...mapActions(['getPosts']),

    getAllPosts() {
      this.getPosts()
    },
  },

  created() {
    this.getAllPosts()
  }
}
</script>

<style lang="scss" scoped>
.posts {
  margin: 20px;
}

.posts-list {
  display: flex;
  margin-bottom: 25px;
  padding-bottom: 10px;
  border-bottom: 1px solid #000;
}

.post-index {
  padding-right: 20px;
  align-self: center;
}

.post-title {
  align-self: center;
}

.posts-btn {
  margin: 0 10px;
  padding: 5px 10px;
  background-color: transparent;
  color: rgba(0, 88, 202, 0.856);
  border: 1px solid rgba(0, 88, 202, 0.856);
  cursor: pointer;
  vertical-align: baseline;
}
</style>