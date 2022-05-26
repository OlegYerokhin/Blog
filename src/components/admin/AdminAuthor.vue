<template>
  <div>
    <div class="about-author">
      <div class="author-info-title">
        <h2>Author info</h2>
      </div>
      <div class="input-block">
        <div class="info">
          <p class="info-title">Name: </p>
          <input 
            class="info-input" 
            type="text" 
            :value="getFullInfo.name"
          />
          <button class="author-edit-btn">Edit</button>
        </div>
        <div class="info">
          <p class="info-title">Surname:</p>
          <input 
            class="info-input" 
            type="text" 
            :value="getFullInfo.surname"
          />
          <button class="author-edit-btn">Edit</button>
        </div>
        <div class="info">
          <p class="info-title">Phone</p>
          <input 
            class="info-input" 
            type="text" 
            :value="getFullInfo.phone"
          />
          <button class="author-edit-btn">Edit</button>
        </div>
        <div class="info">
          <p class="info-title">Email</p>
          <input class="info-input" 
            type="text" 
            :value="getFullInfo.email"
          />
          <button class="author-edit-btn">Edit</button>
        </div>
        <div class="info">
          <p class="info-title">GitHub:</p>
          <input class="info-input" 
            type="text" 
            :value="getFullInfo.gitHubUserName"
          />
          <button class="author-edit-btn">Edit</button>
        </div>
        <div class="info">
          <p class="info-title">Telegram</p>
          <input class="info-input" 
            type="text" 
            :value="getFullInfo.telegramUserName"
          />
          <button class="author-edit-btn">Edit</button>
        </div>
        <div class="info">
          <p class="info-title">LinkedIn:</p>
          <input 
            class="info-input" 
            type="text" 
            :value="getFullInfo.linkedinLink"
          />
          <button class="author-edit-btn">Edit</button>
        </div>
        <div class="info">
          <p class="info-title">Location:</p>
          <input class="info-input" 
            type="text" 
            :value="this.$store.state.myLocation"
          />
          <button class="author-edit-btn">Edit</button>
        </div>
        <div class="info">
          <p class="info-title">About me:</p>
          <textarea class="info-input" 
            type="text" 
            :value="this.$store.state.myBio" 
            cols="10" 
            rows="5"
          ></textarea>
          <button class="author-edit-btn">Edit</button>
        </div>
      </div>
      <div class="languages-block">
        <p>Languages: </p>
        <div class="language-element" 
          v-for="language in getFullInfo.languages" 
          :key="language.name">
          <div class="language-text" >
            <p>{{ language.name }}</p>
          </div>
        </div>
        <button class="author-edit-btn block-btn">Edit</button>

      </div>
      <div class="languages-block">
        <p>Skills: </p>
        <div class="language-element" 
          v-for="skill in getFullInfo.skils" 
          :key="skill.name"
        >
          <div class="language-text" >
            <p>{{ skill.name }}</p>
          </div>
        </div>
        <button class="author-edit-btn block-btn">Edit</button>
      </div>
      <button class="author-edit-btn save-changes-btn">Save all changes</button>
    </div>

  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'AdminAuthor',
  data: () => ({

  }),

  computed: {
    ...mapState(['adminInfo']),

    getFullInfo() {
      return this.$store.state.adminInfo
    }
  },

  methods: {
    ...mapActions(['getAdminInfo', 'getGithubInfo']),

    getAdminsInfo() {
      this.getAdminInfo()  
    },

    getGithubData() {
      this.getGithubInfo()
    }
  },

  created() {
    this.getAdminsInfo()
    this.getGithubData()
  }
}
</script>

<style lang="scss" scoped>
.author-info-title {
  font-size: 30px;
  font-weight: 700;
  width: 937px;
}

.info {
  margin: 20px;
}

.info-title {
  margin-bottom: 10px;
}

.info-input {
  font-size: 20px;
  padding: 5px 15px;
  border: none;
  border-bottom: 1px solid grey;
  width: 450px;
}

.author-edit-btn {
  margin: 0 10px;
  padding: 5px 10px;
  background-color: transparent;
  color: rgba(0, 88, 202, 0.856);
  border: 1px solid rgba(0, 88, 202, 0.856);
  cursor: pointer;
  vertical-align: baseline;
}

.languages-block {
  margin: 20px;
}

.language-element {
  display: inline-flex;
  justify-content: center;
  background-color: grey;
  width: 75px;
  height: 40px;
  border-radius: 5px;
  margin: 10px;
}

.language-text {
  color: #fff;
  font-size: 16px;
  align-self: center;
}

.block-btn {
  display: block;
}

.save-changes-btn {
  margin: 20px;
}
</style>