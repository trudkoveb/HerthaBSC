<template lang="pug">
  div(class="main-content")
    div(class="season-wrapper")
      button(v-on:click="show =!show")
        | Полная информация
      div(class="results", v-for="result in results")
        p
          | {{ result.host }}
          span {{ result.total }}
          | {{ result.guest }}
          transition(name="slide-fade")
            span(transition="slide-fade", v-show="show") {{ result.info }}
</template>


<script>
  module.exports = {
    data: function(){
      return{
        show: false,
        results: [
        {
          host: 'Герта',
          guest: 'Штутгарт',
          total: '2:0',
          info: '46 Лекки (Ибишевич), 62 Лекки - х'
        },
        {
          host: 'Боруссия Д',
          guest: 'Герта',
          total: '2:0',
          info: '15 Обамеянг (Шахин), 57 Шахин - х'
        },
        {
          host: 'Герта',
          guest: 'Вердер',
          total: '1:1',
          info: '38 Лекки (Дарида) - 59 Дилэйни'
        },
        ]
      }
    }
  }
</script>

<style lang="sass?indentedSyntax=true">
  .season-wrapper
    background-color: #fff
    padding: 20px 50px
    .results
      p
        font-size: 18px
        span
          padding: 0 20px
      .slide-fade-enter-active
        transition: 0.9s ease-in
      .slide-fade-leave-active
        transition: 0.9s ease-in
      .slide-fade-enter, .slide-fade-leave-to
        transform: translateX(0);
        opacity: 0;
</style>