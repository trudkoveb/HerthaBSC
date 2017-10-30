<template lang="pug">
  div(class="main-content")
    div(class="season-wrapper")

      div
        nav
          button.standard-btn.season-tabs(v-on:click="switchView('bundesliga')") Чемпионат Германии
          button.standard-btn.season-tabs(v-on:click="switchView('countryCup')") Кубок Германии
          button.standard-btn.season-tabs(v-on:click="switchView('euroCup')") Лига Европы



      div
        component(v-bind:is='currentView', transition='switchFigure')

      #bundesliga-template(style='display:none;')
        div
          //- button(v-on:click="show =!show")
          //-   | Полная информация
          div(class="results", v-for="result in results")
            p
              | {{ result.host }}
              span {{ result.total }}
              | {{ result.guest }}
              transition(name="slide-fade")
                span(transition="slide-fade", v-show="show") {{ result.info }}


      #countryCup-template(style='display:none;')
        div
          h2 Кубок Германии. 1/16 финала
          table.season-table
            thead
              tr
                th(colspan="2") Герта 1:3 Кельн
            tbody
              tr
                td(colspan="2") Голы:
              tr
                td 69' Штарк
                td 35' Цоллер, 43' Марох, 65' Клеменс
              tr
                td(colspan="2") Желтые картчоки:
              tr
                td 86' Дуда
                td 14' Озджан
              tr
                td(colspan="2") Красные карточки:
              tr
                td -
                td -
              tr
                td(colspan="2") Замены:
              tr
                td 47' <i class="ion-arrow-down-a"></i>Лустенбергер - <i class="ion-arrow-up-a"></i>Maier<br>59' <i class="ion-arrow-down-a"></i>Калу - <i class="ion-arrow-up-a"></i>Ибишевич<br>59' <i class="ion-arrow-down-a"></i>Пекарик - <i class="ion-arrow-up-a"></i>Дуда
                td 57' <i class="ion-arrow-down-a"></i>Битенкур - <i class="ion-arrow-up-a"></i>Клеменс<br>77' <i class="ion-arrow-down-a"></i>Handwerker - <i class="ion-arrow-up-a"></i>Осако


      #euroCup-template(style='display:none;')
        div
          h2 Лига Европы. Группа J
          table.season-table.league-europe-table
            thead
              tr
                th Команда
                th В
                th Н
                th П
                th ЗМ\ПМ
                th О
            tbody
              tr(v-for="leagueEurope in orderBy(leagueEuropes, 'points', -1)", v-bind:class="{ 'hertha-color': leagueEurope.status }")
                td {{ leagueEurope.team }}
                td {{ leagueEurope.wins }}
                td {{ leagueEurope.draws }}
                td {{ leagueEurope.loose }}
                td {{ leagueEurope.balls }}
                td {{ leagueEurope.points }}
          div
            p 14.09.2017
            p Герта - Атлетик 0:0
          div
            p 28.09.2017
            p Эстерсунд - Герта 1:0
          div
            p 19.10.2017
            p Заря - Герта 2:1
</template>


<script>
  module.exports = {
    data: function(){
      return{
        show: false,
        currentView: '',
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
        {
          host: 'Хоффенхайм-1899',
          guest: 'Герта',
          total: '1:1',
          info: '6 Вагнер (Крамарич) - 55 Эссвайн (Платтенхардт)'
        },
        {
          host: 'Герта',
          guest: 'Байер',
          total: '2:1',
          info: '16 Лекки (Ибишевич), 24 Калу (Ибишевич) - 84 Брандт (Рецос)'
        },
        {
          host: 'Майнц',
          guest: 'Герта',
          total: '1:0',
          info: '54 Де Бласис (пенальти) - x'
        },
        ],
        leagueEuropes: [
        {
          team: 'Герта',
          wins: '0',
          draws: '1',
          loose: '2',
          balls: '1:3',
          points: '1',
          status: true
        },
        {
          team: 'Эстерсунд',
          wins: '2',
          draws: '1',
          loose: '0',
          balls: '5:2',
          points: '7',
          status: false
        },
        {
          team: 'Заря',
          wins: '2',
          draws: '0',
          loose: '1',
          balls: '3:3',
          points: '6',
          status: false
        },
        {
          team: 'Атлетик',
          wins: '0',
          draws: '2',
          loose: '1',
          balls: '2:3',
          points: '2',
          status: false
        },
        ]
      }
    },
    components: {
      bundesliga: {
        template: '#bundesliga-template'
      },
      countryCup: {
        template: '#countryCup-template'
      },
      euroCup: {
        template: '#euroCup-template'
      },
      egg: {
        template: '#egg-template'
      }
    },
    methods: {
      switchView: function(view) {
        this.currentView = view
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
        transform: translateX(0)
        opacity: 0
    .season-tabs
      display: inline-block
      margin-right: 30px
      &:last-child
        margin-right: 0
    .season-table
      width: 60%
      margin: 0 auto
      text-align: center
      border: 1px solid  #000
      border-collapse: collapse
      font-family: 'RobotoLight'
      tr
        th
          padding: 10px 0
        td
          border: 1px solid  #000
          width: 50%
          padding: 5px 10px
      &.league-europe-table
        width: auto
        margin: 0
        thead
          tr
            th
              padding: 5px
              border: 1px solid  #000
        tbody
          tr
            td
              width: auto
</style>