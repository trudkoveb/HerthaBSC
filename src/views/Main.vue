<template>
  <div class="main-content">
    <div id="carousel-wrapper">
      <carousel-3d :autoplay="true" :autoplayTimeout="5000" :controls-visible="true">
        <slide class="slide-a" :index="0">
          <div class="slider-info">
            <h1>Lorem ipsum dolor sit amet, consectetur.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor cum minima, ea labore delectus quis.</p>
            <a href="">{{ readMore }}</a>
          </div>
        </slide>
        <slide class="slide-b" :index="1">
          <div class="slider-info">
            <h1>Lorem ipsum dolor sit amet, consectetur.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quam consequuntur corporis rerum consequatur rem?</p>
            <a href="">{{ readMore }}</a>
          </div>
        </slide>
        <slide class="slide-c" :index="2">
          <div class="slider-info">
            <h1>Lorem ipsum dolor sit amet, consectetur.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis numquam libero, quas? Tenetur ea, voluptatum!</p>
            <a href="">{{ readMore }}</a>
          </div>
        </slide>
      </carousel-3d>
    </div>

    <div class="blog">
      <div class="blog__post" v-bind:class="{ 'main-blog__post': post.status }" v-for="(post, index) in posts" :post="post" v-if="index < limit">
        <div class="news-date">
          <i class="ion-android-time"></i><span>{{ post.date }}</span>
        </div>
        <div class="news-image">
          <img :src="post.image" alt="">
        </div>
        <div class="news-text-wrapper ">
          <h3 v-html="post.title">>{{ post.title }}</h3>
          <p>{{ post.shortTitle }}</p>
          <router-link :to="{ name: 'post', params: { id: index } }">{{ readMore }}</router-link>
        </div>
      </div>
       <div class="matches-info">
        <div class="last-match">
          <h4>Последний матч:</h4>
          <p v-html="textLM">{{ textLM }}</p>
        </div>
        <div class="next-match">
          <h4><i class="ion-fireball"></i>Следующий матч:</h4>
          <p v-html="textNM">{{ textNM }}</p>
        </div>
      </div>
    </div>
    <button @click="limit += 2">Show more</button>

  </div>
</template>

<script>
  import { Carousel3d, Slide } from 'vue-carousel-3d';

  var posts = require('../posts')

  export default {
    name: 'carousel-wrapper',
    components: {
      'carousel-3d': Carousel3d,
      'slide': Slide
    },
    data: function () {
      return {
        slides: 3,
        textLM: '<p>Герта - Байер 2:6</p><p>Голы : 71 Вайзер, 86 Аллаги - 5 Эрнандес, 31 Хавертц, 45 Хавертц, 64 Кисслинг, 81 Арангис, 90 Похьянпало</p><p>Замены:</p><p>Желтые карточки : Аллан, Ибишевич, Дарида - Венделл</p><p>Красные карточки : - </p>',
        textNM: '<p><i class="ion-ios-football-outline"></i>Герта – Хоффенхайм-1899</p><p><i class="ion-android-time"></i>22 ноября 2015 17:30<p><p><i class="ion-home"></i>Стадион Олимпияштадион</p>',
        readMore: 'Читать дальше',
        posts: posts,
        limit: 2
      }
    }
  }
</script>

<style lang="sass?indentedSyntax=true">
  .carousel-3d-container
    height: 100%!important
    margin: 0!important
    margin-bottom: 20px!important

  .carousel-3d-slider
    width: 70%!important
    height: 600px!important

  .carousel-3d-slide
    width: 100%!important
    height: 100%!important

  .carousel-3d-slide img
    width: auto!important

  .slide-a, .slide-b, .slide-c
    text-align: center!important
    .slider-info
        position: absolute
        bottom: 20px
        left: 0
        right: 0
        width: 50%;
        margin: 0 auto;
        h1, p, a
          color: #dfdfdf
          position: relative
          z-index: 10
        h1
          font-family: 'RobotoLight'
          font-size: 36px
        p
          font-family: 'HelveticaReg'
          font-size: 14px
          padding: 0 20%
        a
          font-family: 'Courier'
          font-size: 14px
          text-transform: uppercase
          text-decoration: none
          font-weight: bold
          display: inline-block
          position: relative
          &:before
           content: ""
           position: absolute
           width: 100%
           height: 1px
           bottom: -5px
           left: 0
           background-color: #fff
           visibility: hidden
           -webkit-transform: scaleX(0)
           transform: scaleX(0)
           -webkit-transition: all 0.3s ease-in-out 0s
           transition: all 0.3s ease-in-out 0s
          &:hover:before
           visibility: visible;
           -webkit-transform: scaleX(1);
           transform: scaleX(1);

  .slide-a:after, .slide-b:after, .slide-c:after
    content: ''
    display: block
    width: 100%
    height: 100%
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    z-index: 1

  .slide-a
    background-image: url('http://www.berliner-kurier.de/image/25174836/2x1/940/470/888cd22990f6830a04ee34f0949f76db/LC/hertha-mainz.jpg')
  .slide-b
    background-image: url('http://media.gettyimages.com/photos/peter-niemeyer-and-marcel-ndjeng-of-hertha-bsc-during-the-game-bsc-picture-id464763980')
  .slide-c
    background-image: url('http://media.gettyimages.com/photos/aenis-benhatira-salomon-kalou-and-marvin-plattenhardt-of-hertha-bsc-picture-id464763970')

  .blog
    display: -webkit-flex
    display: -moz-flex
    display: -ms-flex
    display: -o-flex
    display: flex;
    flex-direction: row
    align-items: stretch
    justify-content: space-between
    flex-wrap: wrap
    position: relative
  .blog__post.main-blog__post
    width: 66%
    margin-bottom: 0
    .news-image
      height: 515px;
      img:hover
        -webkit-transform: scale(1.2)
        -ms-transform: scale(1.2)
        transform: scale(1.2)

  .blog__post
    width: 32%
    position: relative
    margin-bottom: 50px
    &:nth-child(2)
      margin-right: 34%
    &:nth-child(5)
      margin-top: 32%
    .news-date
     position: absolute
     z-index: 1
     top: 10px
     left: 10px
     padding: 8px
     background-color: rgba(0, 0, 0, 0.4);
     border-radius: 5px
     color: #fff
     span
      font-family: 'Courier'
      font-size: 12px
      line-height: 12px
      font-weight: bold
      display: inline-block
      vertical-align: middle
      position: relative
      z-index: 10
     i
      padding-right: 5px
      font-size: 15px
      line-height: 15px
      display: inline-block
      vertical-align: middle
      position: relative
      z-index: 10
    .news-image
      display: -webkit-flex
      display: -moz-flex
      display: -ms-flex
      display: -o-flex
      display: flex
      justify-content: center
      overflow: hidden
      width: 100%
      height: 280px
      border-radius: 5px
      img
        align-self: center;
        -webkit-transition: -webkit-transform .9s ease-out;
        transition: -webkit-transform .9s ease-out;
        transition: transform .9s ease-out;
        transition: transform .9s ease-out, -webkit-transform .9s ease-out;
        &:hover
         -webkit-transform: scale(0.8)
         -ms-transform: scale(0.8)
         transform: scale(0.8)

    .news-text-wrapper
      padding: 0 20px
      h3
        font-family: 'RobotoLight'
        font-size: 24px
      p
        font-family: 'HelveticaReg'
        font-size: 14px
        color: #555
      a
        font-family: 'Courier'
        font-size: 14px
        color: #000
        text-decoration: none
        display: inline-block
        text-transform: uppercase
        font-weight: bold
        position: relative
        &:before
          content: ""
          position: absolute
          width: 100%
          height: 1px
          bottom: 0
          left: 0
          background-color: #012265
          visibility: hidden
          -webkit-transform: scaleX(0)
          transform: scaleX(0)
          -webkit-transition: all 0.3s ease-in-out 0s
          transition: all 0.3s ease-in-out 0s
        &:hover:before
          visibility: visible;
          -webkit-transform: scaleX(1)
          transform: scaleX(1)
        &:hover
         color: #012265
  .matches-info
    width: 32%
    display: -webkit-flex
    display: -moz-flex
    display: -ms-flex
    display: -o-flex
    display: flex
    flex-direction: column
    Justify-content: space-between
    position: absolute;
    right: 0;
    top: 0;
    p, h4
      font-family: 'RobotoLight'
    .last-match
      padding-left: 20px
    .next-match
      background-color: #012265
      border-radius: 5px
      color: #fff
      padding: 50px
      i
        padding-right: 5px
        font-size: 30px
</style>





