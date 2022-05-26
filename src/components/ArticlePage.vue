<template>
  <div class="template">
    <div class="post" v-if="getPostObj">
      <div class="edit-button" v-if="getAdminStatus">
        <button class="edit-btn">
          <img src="../assets/edit.png" 
            class="edit-img" 
            alt="edit" 
            @click="$router.push(`/edit-article-page/${getPostObj.id}`)"
          ></button>
      </div>
      <div class="post-title-block">
        <h3 class="post-title">{{ getPostObj.title }}</h3>
      </div>
      <div class="post-body-block">
        <p class="post-body">{{ getPostObj.body }}</p>
      </div>
      <div class="lables-block">
        <div class="lables" 
          v-for="label in getPostObj.lablesList" 
          :key="label" 
        >      
          <div class="label-element">
            <div class="label-text">
              <p>{{ label }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, } from 'vuex'

export default {
  name: 'ArticlePage',

  data: () => ({
    postId: '',
    postTitle: '',
    postObj: '',
    editing: false,
    labels: [
      'CSS',
      'Node',
      'HTML',
      'JS',
      'Vue',
      'React',
    ]
  }),

  computed: {
    ...mapState(['posts']),

    getAdminStatus() {
      return this.$store.state.isAdmin
    },

    getPostObj() {
      return this.posts.find(item => item.id === this.postId)
    },
  },

  methods: {
    ...mapMutations(['setPosts', 'setPostId']),
    ...mapActions(['getPosts']),

    editArticle() {
      this.editing = !this.editing
    },

    getAllPosts() {
      this.getPosts()
    },

    getPostId() {
      this.postId = +this.$route.params.id
    },

    setThisPostId() {
      this.setPostId(
        this.$store.state.postId = this.postId
      )
    },
  },

  async created() {
    await this.getAllPosts()
    this.getPostId()
    this.setThisPostId()
  },
}
</script>

<style lang="scss" scoped>
.template {
  text-align: -webkit-center;
}

.edit-button {
  text-align: end;
}

.edit-btn {
  position: relative;
  border: none;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  background-color: transparent;
  cursor: pointer;
}

.edit-img{
  position: absolute;
  width: 40px;
  height: 40px;
  left: -2px;
  top: -2px;
}

.post {
  background-color: #fff;
  padding: 20px;
  max-width: 700px;
  margin: 20px;
  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
}

.post-title-block {
  text-align: start;
  margin: 17px;
}

.post-title {
  font-size: 22px;
  font-weight: 700;
  font-family: Arial, Helvetica, sans-serif;
  margin: 17px;
  text-align: start;
}

.post-title-edit-title {
  margin: 10px 17px;
  font-size: 20px;
  font-weight: 700;
}

.post-title-edit {
  width: 630px;
  height: 50px;
  font-size: 20px;
  padding: 0 15px;
}

.post-body {
  margin: 20px;
  font-size: 18px;
  text-align: start;
  line-height: 1.4;
}

.post-body-edit-title {
  text-align: start;
  margin: 10px 33px;
  font-size: 20px;
  font-weight: 700;
}

.post-body-edit {
  font-size: 20px;
  padding: 5px 15px;
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

.delete-label {
  position: relative;
}

.delete-label-img {
  position: absolute;
  bottom: 26px;
  left: 8px;
}

.hide-label {
  display: none;
}

.labels-edit-block {
  display: flex;
}

.label-element-edit {
  text-align: start;
  margin: 20px;
}

.label-element-text {
  margin-bottom: 10px;
}

.label-element-select {
  font-size: 18px;
  padding: 7px;
  width: 250px;
  cursor: pointer;
}

.label-text {
  color: #fff;
  font-size: 16px;
  align-self: center;
}

.new-label {
  text-align: start;
  margin: 20px;
}

.label-element-input {
  font-size: 18px;
  padding: 7px;
}

.new-label-btn {
  background-color: transparent;
  border: 1px solid rgba(0, 88, 202, 0.856);
  color: rgba(0, 88, 202, 0.856);
  font-size: 18px;
  padding: 8px;
  cursor: pointer;
}

.save-btn {
  width: -webkit-fill-available;
  background-color: transparent;
  border: 1px solid rgba(0, 88, 202, 0.856);
  color: rgba(0, 88, 202, 0.856);
  font-size: 18px;
  margin: 20px;
  padding: 8px;
  cursor: pointer;
}
</style>