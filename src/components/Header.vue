<template>
  <div>
    <div class="header">
      <div class="header-logo" 
        v-html="logoHtml" 
        @click="routeTo()"
      ></div>
      <div class="button-block">
        <button v-if="this.$store.state.isAdmin" 
          @click="$router.push({name: 'StartAdminPanel'})"
        >Admin Panel</button>
        <button @click="$router.push('../about-author')">About Author</button>
        <button v-if="!this.$store.state.isAuthorized" 
          @click="$router.push({name: 'StartPage'})"
        >Sign In</button>
        <div class="user-block">
          <p class="user-login">{{this.$store.state.userLogin}} 
            <button class="logout-btn" 
              v-if="this.$store.state.isAuthorized 
              && this.$store.state.userLogin" 
              @click="logout()"
            >( LogOut )</button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Header',
  data: () => ({
    logoHtml: '<img src="https://i.ibb.co/JqQGGXV/logo.png" alt="Logo">',
  }),
  methods: {

    routeTo() {
      if(this.$store.state.isAuthorized) {
        this.$router.push({name: 'MainPage'})
      } else {
      location.reload()
      this.$router.push({name: 'StartPage'})
      }
    },

    logout() {
      this.logMeOut()
      this.pushToStart()
    },

    logMeOut() {
      history.replaceState(null, 'home', '/')
      location.reload()

    },
    pushToStart() {
      this.$router.push({name: 'StartPage'})
    }
  },

}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  background-color: rgba(0, 88, 202, 0.589);
  min-height: 80px;
  justify-content: space-around;
  margin-bottom: 20px;
}

.header-logo {
  align-self: center;
  cursor: pointer;
}

.header-logo a {
  vertical-align: middle;
  cursor: pointer;
}

.button-block {
  align-self: center;
}

button {
  background-color: transparent;
  border: none;
  color: #fff;
  text-decoration: underline;
  cursor: pointer;
  font-size: 18px;
  margin: 0 15px;
}

button:hover {
  color: rgb(0, 89, 255);
  transition: 0.5s linear;
}

.user-block {
  display: inline-flex;
}

.logout-btn {
  margin: 0;
}

.user-login {
  color: #fff;
  font-size: 18px;
  margin-left: 20px;
}
</style>
