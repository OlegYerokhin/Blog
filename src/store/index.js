import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: () => ({
    users: [],
    admin: [],
    adminInfo: {},
    authorizedUser: {
      login: '',
      password: '',
    },
    isAuthorized: false,
    isAdmin: false,
    userLogin: '',
    usersLogins: [],
    posts: [],
    post: {},
    postId: '',
    myPhotoURL: '',
    myLocation: '',
    myBio: '',
  }),

  props: {
    posts: Array
  },

  getters: {

  },

  mutations: {
    setUsers(state, payload) {
      state.users = payload
    },    

    setIsAdmin(state) {
      state.isAdmin = true
    },

    setAdmin(state, payload) {
      state.admin = payload
    },

    setAuthorizedUser(state, payload) {
      state.authorizedUser = payload
    },

    setPosts(state, payload) {
      state.posts = payload
    },

    setPostId(state, payload) {
      state.postId = payload
    },

    setAdminInfo(state, payload) {
      state.adminInfo = payload
    },

    setGithubInfo(state, payload) {
      state.myPhotoURL = payload.avatar_url
      state.myLocation = payload.location
      state.myBio = payload.bio
    },
  },

  actions: {
    async getUsers({ commit }) {
      let response = await(await fetch('http://localhost:3000/users')).json()
      commit('setUsers', response)
    },

    async getAdmin({ commit }) {
      let response = await(await fetch('http://localhost:3000/adminCredentials')).json()
      commit('setAdmin', response)
    },

    async getPosts({ commit }) {
      let response = await(await fetch('http://localhost:3000/posts')).json()
      commit('setPosts', response)
    },

    async getAdminInfo({ commit }) {
      let response = await(await fetch('http://localhost:3000/adminInfo')).json()
      commit('setAdminInfo', response)
    },

    async getGithubInfo({ commit }) {
      let response = await(await fetch('https://api.github.com/users/OlegYerokhin')).json()
      commit('setGithubInfo', response)
    },
  }
})