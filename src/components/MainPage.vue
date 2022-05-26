<template>
  <div class="main-page">
    <aside class="aside-bar">
      <h2 class="aside-head">Topics</h2>
      <ul class="topics-list">
        <li class="topic-element">
          <button class="topic-button">All</button>
        </li>
        <li class="topic-element">
          <button class="topic-button" @click="postsFilter">CSS</button>
        </li>
        <li class="topic-element">
          <button class="topic-button">Node</button>
        </li>
        <li class="topic-element">
          <button class="topic-button">HTML</button>
        </li>
        <li class="topic-element">
          <button class="topic-button">JS</button>
        </li>
        <li class="topic-element">
          <button class="topic-button">Vue</button>
        </li>
        <li class="topic-element">
          <button class="topic-button">React</button>
        </li>
        <!-- цикл на posts, if this. ... .posts.lablesList includes ("название тега") === false {присвоить класс с display:none} -->
      </ul>
    </aside>
    <div>
      <div class="post" 
        v-for="post in getFullPosts" 
        :key="post.id" 
      >
        <div>
          <h3 class="post-title">{{ post.title }}</h3>
        </div>
        <div>
          <p class="post-body">{{ formatedText(post.body) }}</p>
        </div>
        <div class="lables-block">
          <div class="lables" 
            v-for="label in post.lablesList" 
            :key="label"
          >
            <div class="label-element">
              <p class="label-text">
                {{ label }} 
              </p>
            </div>   
          </div>
        </div>
        <div>
          <a class="read-more"  @click="$router.push(`/article-page/${post.id}`)">Read more</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  name: 'MainPage',

  data: () => ({
    postId: '',
  }),

  computed: {
    ...mapState(['posts']),

    getFullPosts() {
      return this.$store.state.posts
    },
  },

  methods: {
    ...mapMutations(['setPosts', 'setPostId']),
    ...mapActions(['getPosts']),

    getAllPosts() {
      this.getPosts()
    },

    formatedText(str) {
      let upperCasedStr = str[0].toUpperCase() + str.slice(1)
      return upperCasedStr.split(' ').splice(0, 60).join(' ') + '...'
    },

    postsFilter() {
      if(this.$store.state.posts[0].lablesList.includes('css')) {
        console.log('includes')
      }
    }
  },
  async created() {
    await this.getAllPosts()
  }
}
</script>

<style lang="scss" scoped>

.main-page {
  display: flex;
  justify-content: center;
}

.aside-bar {
  margin: 20px 240px 20px 0;
}

.aside-head {
  font-weight: 700;
  font-size: 20px;
  padding-bottom: 15px;
}

.topic-element {
  padding-bottom: 10px;
}

.topic-button {
  border: none;
  background-color: transparent;
  font-size: 18px;
  cursor: pointer;
  text-decoration: underline;
}

.post {
  background-color: #fff;
  padding: 20px;
  max-width: 500px;
  margin: 20px;
  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
}

.post-title {
  font-size: 22px;
  font-weight: 700;
  font-family: Arial, Helvetica, sans-serif;
  margin: 20px;
  text-align: start;
}

.post-body {
  margin: 20px;
  font-size: 18px;
  text-align: start;
  line-height: 1.2;
}

.lables-block {
  display: flex;
  margin: 15px;
}

.label-element {
  display: flex;
  justify-content: center;
  background-color: grey;
  width: 75px;
  height: 40px;
  border-radius: 5px;
  margin: 5px;
}

.label-text {
  color: #fff;
  font-size: 16px;
  align-self: center;
}

.read-more {
  color: rgba(0, 88, 202, 0.76);
  font-size: 18px;
  text-decoration: underline;
  cursor: pointer;
  margin: 20px;
}

.read-more:hover {
  color: rgb(1, 73, 168);
}
</style>