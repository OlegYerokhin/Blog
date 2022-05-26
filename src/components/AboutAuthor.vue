<template>
  <div class="about-author">
    <div class="top-block">
      <div class="personal-photo">
        <img class="personal-photo-img" 
          :src="this.$store.state.myPhotoURL" 
          alt="my-photo"
        >
      </div>
      <div class="personal-info">
        <div class="full-name">
          <p>{{ getFullName }}</p>
        </div>
        <div class="personal-data">
          <p>Phone: </p>
          <p class="my-data">{{ getFullInfo.phone }}</p>
        </div>
        <div class="personal-data">
          <p>Email: </p>
          <a href="mailto:olegyerokhin91@gmail.com" 
            class="my-data"
          >{{ getFullInfo.email }}</a>
        </div>
        <div class="personal-data">
          <p>Telegram:</p>
          <p class="my-data">{{ getFullInfo.telegramUserName }}</p>
        </div>
        <div class="personal-data">
          <p>GitHub: </p>
          <a href="https://github.com/OlegYerokhin" 
            class="my-data"
          >{{ getFullInfo.gitHubUserName }}</a>
        </div>
        <div class="personal-data">
          <p>LinkedIn: </p>
          <p class="my-data">{{ getFullInfo.linkedinLink }}</p>
        </div>
        <div class="personal-data">
          <p>Location: </p>
          <p class="my-data">{{ this.$store.state.myLocation }}</p>
        </div>
      </div>
    </div>
    <div class="about-me-block">
      <p class="about-me-title">About me:</p>
      <p>{{ this.$store.state.myBio }}</p>
    </div>
    <div class="about-me-block">
      <p class="about-me-title">Languages: </p>
      <div class="languages">
        <div class="languages-list" 
          v-for="language in getFullInfo.languages" 
          :key="language.name"
        >
          <p class="language">{{ language.name }}</p>
          <p class="language-level">Level: {{ language.level }}</p>
        </div>
      </div>
    </div>
    <div class="about-me-block">
      <p class="about-me-title">Skills: </p>
      <div class="languages">
          <div class="languages-list" 
            v-for="skill in getFullInfo.skils" 
            :key="skill.name"
          >
            <p class="language">{{ skill.name }}</p>
            <p class="language-level">Level: {{ skill.level }}</p>
          </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapState, mapActions } from 'vuex'

export default {
  name: 'AboutAuthor',

  computed: {
    ...mapState(['adminInfo']),

    getFullName() {
      return this.$store.state.adminInfo.name + ' ' + this.$store.state.adminInfo.surname
    },

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

.about-author {
  margin: 50px;
  padding: 60px;
  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
}

.top-block {
  display: flex;
  justify-content: center;

}

.personal-photo-img {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  margin-right: 100px;
}

.full-name {
  margin-bottom: 30px;
  font-size: 36px;
  font-weight: 700;
}

.personal-data {
  display: flex;
  margin-bottom: 10px;
}

.my-data {
  margin-left: 20px;
}

.about-me-block {
  text-align: center;
  margin-top: 70px;
  margin-bottom: 70px;
}

.about-me-title {
  margin: 30px;
  font-size: 20px;
  font-weight: 700;
}

.languages {
  display: flex;
  justify-content: center;
}

.languages-list {
  width: 175px;
  justify-content: center;
  margin: 0 40px;
  padding: 20px;
  background-color: rgba(34, 60, 80, 0.2);
  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  border-radius: 15px;
}

.language {
  margin-bottom: 20px;
}


</style>