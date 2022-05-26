<template>
  <div class="sign-up-page">
    <form class="sign-up-page__form" @submit.prevent="checkForm($event)">
      <div class="column-block">
        <h3 class="sign-up-page__title">Sign Up</h3>
        <div class="column">
          <div class="sign-up-page__form-item">
            <input 
              id="login" 
              v-model.trim.lazy="$v.userInfo.logIn.$model" 
              type="text" 
              :class="$v.userInfo.logIn.$error ? 'is-invalid' : '' "
              placeholder="Login"
            /> 
            <p class="invalid-feedback" 
              v-if="$v.userInfo.logIn.$dirty 
              && !$v.userInfo.logIn.isUnique"
            >This login is already taken</p>
            <p class="invalid-feedback" 
              v-if="$v.userInfo.logIn.$dirty 
              && !$v.userInfo.logIn.required"
            >Required field</p>
            <p class="invalid-feedback" 
              v-if="$v.userInfo.logIn.$dirty 
              && !$v.userInfo.logIn.minLength"
            >Minimum length for this field is 8</p> 
            
          </div>

          <div class="sign-up-page__form-item">
            <input 
              id="name"
              v-model.lazy="$v.userInfo.name.$model" 
              type="text" 
              :class="$v.userInfo.name.$error ? 'is-invalid' : '' "
              placeholder="Name"
            />
            <p class="invalid-feedback" 
              v-if="$v.userInfo.name.$dirty 
              && !$v.userInfo.name.required"
            >Required field</p>
          </div>

          <div class="sign-up-page__form-item">
            <input  
              id="email"
              v-model.trim.lazy="$v.userInfo.email.$model" 
              type="text" 
              :class="$v.userInfo.email.$error ? 'is-invalid' : '' "
              placeholder="Email"
            />
            <p class="invalid-feedback" 
              v-if="$v.userInfo.email.$dirty 
              && !$v.userInfo.email.required"
            >Required field</p>
            <p class="invalid-feedback" 
              v-if="$v.userInfo.email.$dirty 
              && !$v.userInfo.email.email"
            >Enter correct email address</p>
          </div>

          <div class="sign-up-page__form-item">
            <input 
              id="birthday"
              v-model.lazy="$v.userInfo.birthday.$model" 
              type="text" 
              :class="$v.userInfo.birthday.$error ? 'is-invalid' : '' "
              placeholder="Birthday"
            />
            <p class="invalid-feedback" 
              v-if="$v.userInfo.birthday.$model 
              && !$v.userInfo.birthday.required"
            >Required field</p>
          </div>
        </div>

        <div class="column">
          <div class="sign-up-page__form-item">
            <input 
              id="password"
              v-model.trim.lazy="$v.userInfo.password.$model" 
              type="password" 
              :class="$v.userInfo.password.$error ? 'is-invalid' : '' "
              placeholder="Password"
            />
            <p class="invalid-feedback" 
              v-if="$v.userInfo.password.$dirty 
              && !$v.userInfo.password.required"
            >Required field</p>
            <p class="invalid-feedback" 
              v-if="$v.userInfo.password.$dirty 
              && !$v.userInfo.password.minLength"
            >Minimum length for this field is 8</p>
          </div>

          <div class="sign-up-page__form-item">
            <input 
              id="surname"
              v-model.lazy="$v.userInfo.surname.$model" 
              type="text" 
              placeholder="Surname"
            />
            <p class="invalid-feedback" 
              v-if="$v.userInfo.surname.$dirty 
              && !$v.userInfo.surname.required"
            >Required field</p>
          </div>

          <div class="sign-up-page__form-item">
            <input 
              id="phone" 
              v-model.number.lazy="$v.userInfo.phone.$model" 
              type="number" 
              :class="$v.userInfo.phone.$error ? 'is-invalid' : '' "
              placeholder="Phone"
            />
            <p class="invalid-feedback" 
              v-if="$v.userInfo.phone.$dirty 
              && !$v.userInfo.phone.required"
            >Required field</p>
            <p class="invalid-feedback" 
              v-if="$v.userInfo.phone.$dirty 
              && !$v.userInfo.phone.minLength"
            >Minimum length for this field is 10</p>
          </div>

          <div class="sign-up-page__form-item">
            <input 
              id="gender" 
              v-model.lazy="$v.userInfo.gender.$model" 
              type="text"  
              :class="$v.userInfo.gender.$error ? 'is-invalid' : '' "
              placeholder="Gender"
            />
            <p class="invalid-feedback" 
              v-if="$v.userInfo.gender.$dirty 
              && !$v.userInfo.gender.required"
            >Required field</p>
          </div>
        </div>
        <div>
          <input 
            type="submit"
            value="Sign Up"
            class="sign-up-btn"
            @click="addNewUser()"
            :disabled="!canBeRegistered"
            :class="{'disabled-button': !canBeRegistered}"
           />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { checkLoginUnique } from '../validators/validators'
import { required, minLength, email, numeric } from 'vuelidate/lib/validators'
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  mixins: [validationMixin],
  name: 'RegistrationPage',
  data: () => ({

    userInfo: {
      logIn: '',
      password: '',
      name: '',
      surname: '',
      email: '',
      phone: null,
      birthday: null,
      gender: null,
    },
    canBeRegistered: false,
    uniqueLogIn: null
  }),

  computed: {
    ...mapState(['users']),
  },

  validations: {
    userInfo: {
      logIn: { required, minLength: minLength(8), isUnique: checkLoginUnique },
      password: { required, minLength: minLength(8) },
      name: { required },
      surname: { required },
      email: { required, email },
      phone: { required, minLength: minLength(10), numeric },
      birthday: { required },
      gender: { required }
    }
  },

  watch: {
    userInfo: {
      deep: true,
      immediate: true,
      handler(newValue) {
        this.checkValue(newValue)
      }
    },
  },
  
  methods: {
    ...mapMutations(['addUser','addNewUser']),
    ...mapActions(['getUsers']),

    checkValue(newValue) {
      let value = Object.values(newValue)
      value.map(item => {
        item !== '' && item !== null ? this.canBeRegistered = true : this.canBeRegistered = false
      })
    },

    checkForm() {
      this.$v.userInfo.$touch()
      event.preventDefault()
    },

    async addNewUser() {
      await (await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          logIn: `${this.userInfo.logIn}`.toLowerCase(),
          name: `${this.userInfo.name}`,
          email: `${this.userInfo.email}`,
          birthday: `${this.userInfo.birthday}`,
          password: `${this.userInfo.password}`,
          surname: `${this.userInfo.surname}`,
          phone: `${this.userInfo.phone}`,
          gender: `${this.userInfo.gender}`
        })
      })).json()
      
    },
    
    getAllUsers() {
      this.getUsers()
    }  
  },

  mounted() {
    this.getAllUsers()
  }
}
</script>

<style lang="scss" scoped>

.sign-up-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 100px;
  min-height: calc(100vh - 230px);

  &__title {
    font-size: 22px;
    text-align: center;
  }

  form {
    display: flex;
    background-color: #fff;
    padding: 20px;
    margin: 0 auto;
    font-size: 22px;
    text-align: -webkit-center;
    -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  }

  .column {
    margin: 30px;
    display: inline-block;
  }

  input {
    display: block;
    width: 70%;
    height: 35px;
    margin: 10px;
    border: none;
    border-bottom: 1px solid #000;
    font-size: 20px;
    text-align: center;
  }

  .is-invalid {
    border-bottom: 1px solid red;
  }

  .invalid-feedback {
    color: red;
    font-size: 13px;
  }

  select {
    padding: 8px 12px;
    border: 1px solid #000;
    border-radius: 20px;
    font-size: 16px;
    width: 220px;
  }

  &__form-item {
    margin: 10px;
  }

  &__form-item.active {
    background-color: lightgrey;
  }

  .sign-up-btn {
    margin: 15px 0;
    padding: 8px 20px;
    border: 1px solid #000;
    background-color: rgb(53, 170, 206);
    color: #fff;
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;
    max-width: 200px;
  }

  .disabled-button {
    margin: 15px 0;
    padding: 8px 20px;
    border: 1px solid rgb(105, 0, 0);
    background-color: lightgrey;
    color: rgb(184, 184, 184);
    font-weight: 700;
    font-size: 16px;
    cursor: no-drop;
  }
}
</style>