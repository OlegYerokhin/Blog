<template>
  <div>
    <div class="footer">
      <div class="created" v-html="linkToMyProfile"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data: () => ({
    linkToMyProfile: '<p>Created by <a href="https://github.com/OlegYerokhin/MetraBit">Me</a></p>'
  })
}
</script>

<style lang="scss" scoped>

.footer {
  height: 50px;
  background-color: #666666fa;
  display: flex;
  justify-content: center;
}

.created {
  align-self: center;
  color: #fff;
  font-size: 20px;
}

</style>