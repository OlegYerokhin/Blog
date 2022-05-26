<template>

  <div class="article">
    <h2 class="article-head">{{ post.title }}</h2>
    <p class="article-text">{{ formatedCommentText(post.body) }}</p>
    <div class="label-block">
      <LabelElement 
        LabelButtonText="JS" 
        @labelButtonClick="labelButtonClick" 
        v-if="showLabel"
      >
        <button>
          <img src="../assets/delete-label.png" alt="delete-label" style="width:25px;height:25px;align-self:center;">
        </button>
      </LabelElement>
    </div>
    <a class="read-more" href="#">Read more</a>
  </div>

</template>

<script>

import LabelElement from './LabelElement.vue'
export default {
  name: 'ArticleCard',
  components: {
    LabelElement
  },
    
  data: () => ({
    post: {
      id: 1,
      title: 'Eum et est occaecati',
      body: 'Ullam et saepe reiciendis voluptatem adipisci\nsit … ipsam iure\nquis sunt voluptatem rerum illo velit. Ullam et saepe reiciendis voluptatem adipisci\nsit … ipsam iure\nquis sunt voluptatem rerum illo velit. Ullam et saepe reiciendis voluptatem adipisci\nsit … ipsam iure\nquis sunt voluptatem rerum illo velitullam et saepe reiciendis voluptatem adipisci\nsit … ipsam iure\nquis sunt voluptatem rerum illo velit. Ullam et saepe reiciendis voluptatem adipisci\nsit … ipsam iure\nquis sunt voluptatem rerum illo velit. Ullam et saepe reiciendis voluptatem adipisci\nsit … ipsam iure\nquis sunt voluptatem rerum illo velitullam et saepe reiciendis voluptatem adipisci\nsit … ipsam iure\nquis sunt voluptatem rerum illo velit. Ullam et saepe reiciendis voluptatem adipisci\nsit … ipsam iure\nquis sunt voluptatem rerum illo velit. Ullam et saepe reiciendis voluptatem adipisci\nsit … ipsam iure\nquis sunt voluptatem rerum illo velitullam et saepe reiciendis voluptatem adipisci\nsit … ipsam iure\nquis sunt voluptatem rerum illo velit.',
      postDate: new Date(),
      

    },
    showLabel: true
  }),
  methods: {
    formatedCommentText(str) {
      let upperCasedStr = str[0].toUpperCase() + str.slice(1)
      if(upperCasedStr.length > 260) {
        return upperCasedStr.slice(0, 259) + '...'
      }
      return upperCasedStr
    },
    labelButtonClick() {
      console.log(this.showLabel)
      this.showLabel = false
      console.log('Label is hidden')
      console.log(this.showLabel)
    }
  }
}
</script>

<style lang="scss" scoped>
.article {
  background-color: #fff;
  padding: 20px;
  // width: 47%;
  max-width: 500px;
  // margin: 20px auto;
  margin: 20px;
  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
}

.article-head {
  font-size: 22px;
  font-weight: 700;
  font-family: Arial, Helvetica, sans-serif;
  margin: 20px;
  text-align: start;
}

.article-text {
  margin: 20px;
  font-size: 18px;
  text-align: start;
}

.label-block {
  display: flex;
  margin: 0 20px 15px;
}

.read-more {
  color: rgba(0, 88, 202, 0.76);
  font-size: 18px;
  text-decoration: underline;
  cursor: pointer;
  margin: 20px;
}

.read-more:hover {
  
  color: rgb(1, 73, 168);
}
</style>