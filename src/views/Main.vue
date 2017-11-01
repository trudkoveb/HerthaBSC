<template>
  <div class="main-content">
    <div id="carousel-wrapper">
      <carousel-3d :autoplay="true" :autoplayTimeout="5000" :controls-visible="true">
        <div v-for="(sliderpost, index) in sliderposts">
          <slide :class="sliderpost.class" :index="sliderpost.index">
            <div class="slider-info">
              <h1>{{ sliderpost.title }}</h1>
              <p>{{ sliderpost.shortTitle }}</p>
              <router-link :to="{ name: 'sliderpost', params: { id: index } }">{{ readMore }}</router-link>
            </div>
          </slide>
        </div>
      </carousel-3d>
    </div>

    <div class="matches-info">
      <div class="last-match">
        <p>Фрайбург - Герта 1:1</p>
        <p><span>Голы :</span> 51' Хаберер - 81' Калу (п)</p>
        <p><span>Замены :<br></span><i class="ion-arrow-down-a"></i>Хаберер, Террацино, Линхарт<i class="ion-arrow-up-a"></i>Петерсен, Кат, Кох<br>
          <i class="ion-arrow-down-a"></i>Ибишевич, Дуда, Лустенбергер<i class="ion-arrow-up-a"></i>Зельке, Лазаро, Майер
        </p>
        <p><span>Желтые карточки :</span> Нидерлехнер, Хаберер, Сеюнджю, Линхарт - Лекки, Ибишевич, Штарк</p>
        <p><span>Красные карточки :</span> - </p>
      </div>
      <div class="next-match">
        <h4><i class="ion-fireball"></i>Следующий матч:</h4>
        <p><i class="ion-ios-football-outline"></i>Герта – Гамбург</p>
        <p><i class="ion-android-time"></i>28 октября 2017 16:30<p>
        <p><i class="ion-home"></i>Стадион Олимпияштадион</p>
      </div>
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
    </div>
    <button class="standard-btn" @click="limit += 3">Показать еще</button>

  </div>
</template>

<script>
  import { Carousel3d, Slide } from 'vue-carousel-3d';

  var posts = require('../posts')
  var sliderposts = require('../sliderposts')

  export default {
    name: 'carousel-wrapper',
    components: {
      'carousel-3d': Carousel3d,
      'slide': Slide
    },
    data: function () {
      return {
        slides: 3,
        readMore: 'Читать дальше',
        posts: posts,
        sliderposts: sliderposts,
        limit: 5
      }
    }
  }
</script>

<style lang="sass?indentedSyntax=true">
  @import '../../sass/common/_variables'

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

  .matches-info
    display: -webkit-flex
    display: -moz-flex
    display: -ms-flex
    display: -o-flex
    display: flex
    flex-direction: row
    justify-content: space-between
    align-items: center
    margin-bottom: 25px
    @media (#{$max_ipad})
      flex-wrap: wrap
    p, h4
      font-family: $font-roboto-light
    .last-match
      padding-left: 20px
      width: 70%
      p
        &:nth-of-type(1)
          font-size: 20px
          font-weight: bold
        span
          font-weight: bold
    .next-match
      width: 25%;
      margin-right: 0.5%;
      background-color: #012265
      border-radius: 5px
      color: #fff
      padding: 50px
      i
        font-size: 30px

  .blog
    display: -webkit-flex
    display: -moz-flex
    display: -ms-flex
    display: -o-flex
    display: flex;
    flex-direction: row
    align-items: stretch
    justify-content: space-around
    flex-wrap: wrap
    .blog__post.main-blog__post
      width: 65%
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

  .standard-btn
    background-color: #fff
    width: auto;
    margin: 0 auto;
    display: block;
    cursor: pointer
    outline: none
    padding: 5px 10px
    padding-bottom: 0
    border-radius: 5px
    border: 1px solid  #012265
    color: #012265
    text-transform: uppercase
    font-family: 'Courier'
    &:hover
      background-color: #012265
      color: #fff
      transition: all 0.7s ease-in-out 0s
</style>





