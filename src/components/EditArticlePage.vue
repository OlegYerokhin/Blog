<template>
  <div class="template">
    <div class="post" v-if="getPostObj">
      <form @submit.prevent="checkForm($event)">
        <div class="post-title-block">
          <p class="post-title-edit-title">Article title:</p>
          <input type="text" 
            class="post-title-edit" 
            placeholder="Article title" 
            :value="getPostObj.title" 
          />
        </div>
        <div class="post-body-block">
          <p class="post-body-edit-title">Article text:</p>
          <textarea class="post-body-edit" 
            name="post-body-edit" 
            cols="55" 
            rows="20" 
            placeholder="Article text" 
            :value="getPostObj.body"
          ></textarea>
        </div>
        <div class="lables-block">
          <div class="lables" 
            v-for="label in getPostObj.lablesList" 
            :key="label" 
          >      
            <div class="label-element"  >
              <div class="label-text">
                <p>{{ label }}</p>
              </div>
              <div class="delete-label">
                <img @click="deleteThisLabel()" 
                  class="delete-label-img" 
                  src="../assets/delete-label.png" 
                  alt="delete-label"
                >
              </div>
            </div>
          </div>
        </div>
        <div class="labels-edit-block">
          <div class="label-element-edit" >
            <p class="label-element-text">Choose from existing: </p>
            <select class="label-element-select" 
              v-model="currentLabel"
            >
              <option disabled 
                value=""
              >Choose more labels</option>
              <template v-for="(label, index) in this.labels">
                <option :key="index">
                  {{ label }}
                </option>
              </template>
            </select>
            <button class="new-label-btn" 
              @click="pushCurrentLabel()"
            >Add label</button>
          </div>
          <div class="new-label">
            <p class="label-element-text">Create new label:</p>
              <input v-model="customLabel" 
                class="label-element-input shorter-label" 
                type="text" 
                placeholder="New label title" 
              />
              <button class="new-label-btn" 
                @click="addCustomLabel()"
              >Add new label</button>
          </div>
        </div>
        <div>
          <button class="save-btn" 
            @click="changePost()"
          >Save</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'EditArticlePage',
  data: () => ({
    postTitle: [],
    postBody: '',
    fullPost: {},
    postLablesList: [],
    postId: '',
    labels: [
      'CSS',
      'Node',
      'HTML',
      'JS',
      'Vue',
      'React',
    ],
    currentLabel: '',
    customLabel: ''
  }),

  computed: {
    ...mapState(['posts']),

    getAdminStatus() {
      return this.$store.state.isAdmin
    },

    getPostObj() {
      return this.posts.find(item => item.id === this.postId)
    }
  },

  methods: {
    ...mapActions(['getPosts', 'getPostTitle']),

    checkForm() {
      this.addNewPostVersion()
      event.preventDefault()
    },

    pushCurrentLabel() {
      this.thisArticleLabels.push(this.currentLabel)
      event.preventDefault()
    },

    addCustomLabel() {
      this.$store.state.posts[this.postId].lablesList.push(this.customLabel)
      event.preventDefault()
    },

    deleteThisLabel() {
      let index = this.thisArticleLabels.indexOf(this.thisArticleLabels)
      this.thisArticleLabels.splice(index, 1)
      event.preventDefault()
    },
    
    getPostId() {
      this.postId = +this.$route.params.id
    },

    getObj() {
      this.fullPost = this.posts.find(item => item.id === this.postId)
    },

    getAllPosts() {
      this.getPosts()
    },

    getFullPostData() {
      
    },

    changePost() {
      this.deleteOldPostVersion()
      this.addNewPostVersion()
    },

    async deleteOldPostVersion() {
      await (await fetch(`http://localhost:3000/posts/${this.postId}`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        } 
      })).json
    },

    async addNewPostVersion() {
      await (await fetch(`http://localhost:3000/posts/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: this.getPostObj.title,
          body: this.getPostObj.body,
          lablesList: this.getPostObj.lablesList,
        })
      })).json()
    }
  },

  async created() {
    await this.getAllPosts()
    this.getPostId()
    this.getFullPostData()
    this.getObj()
  }
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
  resize: none;
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
  width: 200px;
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

.shorter-label {
  width: 175px;
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