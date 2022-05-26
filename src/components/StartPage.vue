<template>
  <div class="autorization">
    <div class="sign-in">
      <form @submit.prevent="checkForm($event)">
        <p>Sign In</p>
        <input
          v-model.trim="login" 
          type="text"
          name="login"
          placeholder="Login"
        />

        <input
          v-model.trim="password"
          type="password"
          name="password"
          placeholder="Password" 
        />

        <input 
          @click="showMessage()"
          type="submit" 
          class="sign-in-btn"
          value="Sign In"
          id="sign-in-btn"
        />

        <div v-if="showInfoMessage">
          <div  
            v-if="error.length"
            class="red"
          >
            {{ error }}
          </div>
        </div>
      </form>
    </div>
    <div class="registration">
      <p>Not registered yet? 
        <button class="register-now" 
          @click="$router.push('/registration-page')"
        >Register now</button>
      </p>
    </div>
  </div>
</template>

<script>

import { mapState, mapMutations, mapActions, } from 'vuex'

export default {
  name: 'StartPage',
  data: () => ({
    login: '',
    password: '',
    error: '',
    showInfoMessage: false,
    authorized: false,
    isAdmin: false
  }),
  computed: {
    ...mapState(['users', 'authorizedUser']),
  },
  methods: {
    ...mapMutations(['setUsers', 'setAuthorizedUser', 'setIsAdmin']),
    ...mapActions(['getUsers', 'getAdmin']),

    checkForm(event) {
      this.showInfoMessage = true
      
      for(let i = 0; i < this.$store.state.users.length; i++) {
        if(this.login === this.$store.state.users[i].logIn && this.password === this.$store.state.users[i].password) {
          this.authorized = true
          this.error = ''
          this.$store.state.isAuthorized = true
          this.$store.state.userLogin = this.login
          
          this.setAuthorizedUser({
            payload: this.$store.state.users[i],
          })
        }

        if(this.password !== this.$store.state.users[i].password) {
          this.error = 'Wrong password. Try again!'
        }

        if(this.login !== this.$store.state.users[i].logIn) {
          this.error = 'Not existing user!'
        }

        if(!this.password) {
          this.error = 'Enter your password!'
        }

        if(!this.login) {
          this.error = 'Enter your login!'
        }
      }

      if(this.login === this.$store.state.admin['login'] && this.password === this.$store.state.admin['password']) {
        this.authorized = true
        this.error = ''
        this.isAdmin = true
        this.$store.state.isAuthorized = true
        this.$store.state.userLogin = this.login

        this.setAuthorizedUser({
          payload: {
            login: this.$store.state.admin['login'],
            password: this.$store.state.admin['password']
            }
        })

        this.setIsAdmin({
          payload: this.$store.state.isAdmin
        })
      }

      if(this.login === this.$store.state.admin['login'] && this.password !== this.$store.state.admin['password']) {
        this.error = 'Wrong password. Try again!'
      }

      if(this.authorized) {
        this.$router.push('/main-page')
      }
      event.preventDefault()
    },

    showMessage() {
      this.showInfoMessage = true
    },

    getAllUsers() {
      this.getUsers()
    },

    getAdmins() {
      this.getAdmin()
    }
  },
  created() {
    this.getAdmins()
    this.getAllUsers()
    this.setAuthorizedUser()
  }
}
</script>

<style lang="scss" scoped>

.red {
    background-color: red;
    color: #fff;
    text-align: center;
    margin: 15px auto;
    border-radius: 20px;
    max-width: 50%;
    padding: 5px;
    border: 1px solid black;
}

form {
  background-color: #fff;
  padding: 20px;
  width: 47%;
  margin: 0 auto;
  font-size: 22px;
  text-align: -webkit-center;
  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
}

form p {
  font-family: Arial, Helvetica, sans-serif;
}

input {
  display: block;
  width: 70%;
  height: 35px;
  margin: 40px;
  border: none;
  border-bottom: 1px solid #000;
  font-size: 20px;
  text-align: center;
}

.sign-in-btn {
  background-color: rgb(0, 88, 202, 0.589);
  border-radius: 7px;
  max-width: 25%;
  border: 1px solid #000;
  color: #fff;
  cursor: pointer;
  text-transform: uppercase;
  justify-content: center;
}

.sign-in-btn:hover {
  background-color: rgba(0, 88, 202, 0.856);
  transition: 0.5s linear;
}

.registration {
  margin: 25px;
  text-align: center;
  
  font-family: Arial, Helvetica, sans-serif;
}

.register-now {
  border: none;
  background-color: transparent;
  color: rgba(0, 88, 202, 0.76);
  font-size: 16px;
  text-decoration: underline;
  cursor: pointer;
}

.register-now:hover {
  color: rgb(1, 73, 168);
}
</style>