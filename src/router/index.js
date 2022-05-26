import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'StartPage',
    component: () => import('../components/StartPage')
  },
  {
    path: '/main-page',
    name: 'MainPage',
    component: () => import('../components/MainPage')
  },
  {
    path: '/about-author',
    name: 'AboutAuthor',
    component: () => import('../components/AboutAuthor')
  },
  {
    path: '/article-page/:id',
    name: 'ArticlePage',
    component: () => import('../components/ArticlePage')
  },
  {
    path: '/edit-article-page/:id',
    name: 'EditArticlePage',
    component: () => import('../components/EditArticlePage')
  },
  {
    path: '/new-article-page',
    name: 'NewArticlePage',
    component: () => import('../components/NewArticlePage')
  },
  {
    path: '/registration-page',
    name: 'RegistrationPage',
    component: () => import('../components/RegistrationPage')
  },
  {
    path: '/admin/admin-panel',
    name: 'AdminPanel',
    component: () => import('../components/admin/AdminPanel'),
    children: [
      {
        path: '/admin/admin-panel',
        name: 'StartAdminPanel',
        component: () => import('../components/admin/StartAdminPanel')
      },
      {
        path: '/admin/admin-posts',
        name: 'AdminPosts',
        component: () => import('../components/admin/AdminPosts')
      }, 
      {
        path: '/admin/admin-author',
        name: 'AdminAuthor',
        component: () => import('../components/admin/AdminAuthor')
      }, 
      {
        path: '/admin/admin-main',
        name: 'AdminMain',
        component: () => import('../components/admin/AdminMain')
      }, 
      {
        path: '/admin/admin-new-post',
        name: 'AdminNewPost',
        component: () => import('../components/admin/AdminNewPost')
      },
    ]
  },
  {
    path: '/*',
    name: 'PageNotFound',
    component: () => import('../components/PageNotFound')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
