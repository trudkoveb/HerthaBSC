<template>
  <div class="main-content">
    <div class="post" v-if="post">
      <img :src="post.image" alt="">
      <h2>{{ post.title }}</h2>
      <p v-html="post.body">{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
  var posts = require('../posts')

  module.exports = {
    data: function() {
      return {
        posts: posts,
        post: null
      }
    },
    created: function() {
      var postId = this.$route.params.id

      this.post = this.posts[postId]
    }
  }
</script>

<style lang="sass?indentedSyntax=true">
  .post
    &:after, &:before
    content: ''
    clear: both
    display: table
    img
      width: 50%
      float: left
      margin: 20px
    h2
      font-family: 'Courier'
    p
      font-family: 'RobotoLight'
    a
      color: #012265
      text-decoration: none
      position: relative
      &:before
       content: ""
       position: absolute
       width: 100%
       height: 1px
       bottom: 0px
       left: 0
       background-color: #012265
       visibility: hidden
       -webkit-transform: scaleX(0)
       transform: scaleX(0)
       -webkit-transition: all 0.3s ease-in-out 0s
       transition: all 0.3s ease-in-out 0s
      &:hover:before
       visibility: visible;
       -webkit-transform: scaleX(1);
       transform: scaleX(1);
</style>