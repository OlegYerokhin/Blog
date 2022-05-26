<template>
  <div class="admin-panel">
    <div> 
      <aside class="aside-bar">
        <ul class="routes-list">
          <li class="route-element">
            <router-link
              :to="{ path: '/admin/admin-main' }"
            >
              Main
            </router-link>
          </li>
          <li class="route-element">
            <router-link
              :to="{ path: '/admin/admin-posts' }"
            >
              Posts
            </router-link>
          </li>
          <li class="route-element">
            <router-link
              :to="{ path: '/admin/admin-author' }"
            >
              Edit author info
            </router-link>
          </li>
          <li class="route-element">
            <router-link
              :to="{ path: '/new-article-page' }"
            >
              Add new post
            </router-link>
          </li>

        </ul>
      </aside>
    </div>
    <div class="components">

      <router-view></router-view>
    </div>


  </div>
</template>

<script>

export default {
  name: 'AdminPanel',
  data: () => ({
    showPosts: false,
    showAuthor: false
  }),

  methods: {
    showPostsList() {
      this.showPosts = true
      this.showAuthor = false
    },

    showAuthorInfo() {
      this.showPosts = false
      this.showAuthor = true
    }
  }

}
</script>

<style lang="scss" scoped>

.admin-panel {
  display: flex;
  justify-content: center;
}

.aside-bar {
  margin: 30px;
}

.admin-btn {
  background-color: transparent;
  border: none;
  margin: 10px;
  font-size: 16px;
  cursor: pointer;
}

.route-element {
  font-size: 26px;
  color: rgba(0, 88, 202, 0.589);
  margin: 15px;
}

.route-element:visited {
  color: rgba(0, 88, 202, 0.589);
  margin: 40px;
}
</style>