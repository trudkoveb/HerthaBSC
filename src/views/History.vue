<template lang="pug">
  div(class="main-content")
    div(class="history")
      div(class="history-info")
        p
          |
          span(class="bold") Дата основания :
          |  25 июля 2142 года
        p
          |
          span(class="bold") Стадион :
          |  Lorem (г. Lorem), вместимость 10.500.
        p
          |
          span(class="bold") Официальный сайт клуба :
          a(href="#", target="_blank") www.google.com
        p
          |
          span(class="bold") Тренер :
          |  Lorem Lorem
        p
          |
          span(class="bold") Прозвище :
          |   Lorem ipsum ( Lorem ipsum)
        p
          |
          span(class="bold") Цвета :
          |  lorem-lorem
      div(id="carousel-wrapper")
        carousel-3d(:perspective="180", :display="1", :autoplay="true", :autoplayTimeout="3000", :controls-visible="true")
          slide(class="slide-a", :index="0")
          slide(class="slide-b" :index="1")
          slide(class="slide-c" :index="2")
          slide(class="slide-d" :index="3")
          slide(class="slide-e" :index="4")
          slide(class="slide-f" :index="5")
      div(class="history-text")
        h2
          | Lorem ipsum dolor:
        p
          | Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, exercitationem? Libero cupiditate natus pariatur dolorum doloremque fuga repudiandae perferendis eligendi.
          span(class="bold")  Lorem ipsum.
          | . Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque culpa, nobis aliquam, rerum enim cumque facilis ut repellat illum alias omnis veniam, assumenda autem aut non, consequuntur sit. Beatae, necessitatibus.
          img(class="float-right without-float", src="../../img/pictures/history/image.jpg")
          p
            | Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam ipsa, repellendus possimus obcaecati aliquam illo perspiciatis nam dolorem eligendi quidem?
          p
            | Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia vel aut sunt, iusto rem sed id minima dolorum nesciunt, aliquid tempora? Quam delectus vero incidunt, dolores eaque exercitationem veritatis distinctio.
          p
            | Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia vel aut sunt, iusto rem sed id minima dolorum nesciunt, aliquid tempora? Quam delectus vero incidunt, dolores eaque exercitationem veritatis distinctio.
            span(class="bold")  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, expedita!
          img(class="float-left without-float", src="../../img/pictures/history/image.jpg", width='50%')
          p
            | Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate nesciunt molestiae reiciendis! Autem distinctio aut rerum quidem nihil? Dolorum excepturi ex porro inventore vel minima ea cum doloremque ab obcaecati dignissimos voluptatibus blanditiis quaerat officiis sequi earum repellat, laborum. Quis, exercitationem eveniet dolorem error quisquam ab sequi nesciunt quae, in.
          p
            | Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, quae!
          p
            | Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed aut expedita excepturi ab distinctio quibusdam accusantium animi! Et, eveniet, voluptatem.
          p
            | Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate doloribus, alias non magni. Repellendus suscipit quo tempore aliquid quidem, molestiae.
          p
            | Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente excepturi aliquam hic illum necessitatibus at dolorem doloribus nemo quas natus, veniam incidunt tenetur, animi accusantium fugiat perspiciatis nostrum tempora autem!
          img(class="float-right without-float", src="../../img/pictures/history/image.jpg")
          p
            | Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam officiis debitis vero autem id quod vitae omnis officia, incidunt cupiditate.
          p
            | Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo quam magni, commodi eaque officiis facere similique, consequatur tempore, ullam sit voluptatibus. Incidunt quas sunt rem quam asperiores, et, sit id.
          p
            | Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores nam commodi eveniet modi voluptatibus animi doloribus incidunt est magnam exercitationem.
      </template>

<script>
  import { Carousel3d, Slide } from 'vue-carousel-3d';

  export default {
    name: 'carousel-wrapper',
    components: {
      'carousel-3d': Carousel3d,
      'slide': Slide
    }
  }
</script>

<style lang="sass?indentedSyntax=true">
  @import '../../sass/common/_variables'

  .history
    padding: 50px 20px
    background-color: #fff
    color: #000
    .carousel-3d-container
      height: auto!important
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
    .slide-a
      background-image: url('../../img/news/image.jpg')
    .slide-b
      background-image: url('../../img/news/image.jpg')
    .slide-c
      background-image: url('../../img/news/image.jpg')
    .slide-d
      background-image: url('../../img/news/image.jpg')
    .slide-e
      background-image: url('../../img/news/image.jpg')
    .slide-f
      background-image: url('../../img/news/image.jpg')

    .history-info
      p
        font-family: 'RobotoLight'
        a
          font-family: 'Courier'
          font-size: 16px
          color: #000
          text-decoration: none
          display: inline-block
          font-weight: bold
          position: relative
          margin-left: 5px
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
    .history-text
      font-family: 'HelveticaReg'
      &:after, &:before
        display: block
        content: ''
        clear: both
      h2
        margin: 40px
        @media (#{$max_ipad})
          margin: 40px 0
      p
        font-size: 16px
        line-height: 22px
        text-indent: 40px
        margin-bottom: 25px
        &:last-child
          margin-bottom: 0
      img
        @media (#{$max_ipad})
          width: 100%
          padding: 0
</style>
