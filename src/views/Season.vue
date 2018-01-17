<template lang="pug">
  div(class="main-content")
    div(class="season-wrapper")

      div.cup-type
        nav
          button.standard-btn.season-tabs(v-on:click="switchView('bundesliga')") Lorem
          button.standard-btn.season-tabs(v-on:click="switchView('countryCup')") Lorem
          button.standard-btn.season-tabs(v-on:click="switchView('euroCup')") Lorem



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
          h2 Lorem ipsum. 1/128 финала
          table.season-table
            thead
              tr
                th(colspan="2") Lorem 1:3 Lorem
            tbody
              tr
                td(colspan="2") Голы:
              tr
                td 69' Lorem
                td 35' Lorem, 43' Lorem, 65' Lorem
              tr
                td(colspan="2") Желтые картчоки:
              tr
                td 86' Lorem
                td 14' Lorem
              tr
                td(colspan="2") Красные карточки:
              tr
                td -
                td Lorem
              tr
                td(colspan="2") Замены:
              tr
                td 47' <i class="ion-arrow-down-a"></i>Lorem - <i class="ion-arrow-up-a"></i>Lorem<br>59' <i class="ion-arrow-down-a"></i>Lorem - <i class="ion-arrow-up-a"></i>Lorem<br>59' <i class="ion-arrow-down-a"></i>Lorem - <i class="ion-arrow-up-a"></i>Lorem
                td 57' <i class="ion-arrow-down-a"></i>Lorem - <i class="ion-arrow-up-a"></i>Lorem<br>77' <i class="ion-arrow-down-a"></i>Lorem - <i class="ion-arrow-up-a"></i>Lorem


      #euroCup-template(style='display:none;')
        div
          h2 Lorem ipsum. Группа X
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
              tr(v-for="leagueEurope in orderBy(leagueEuropes, 'points', 'wins', -1)", v-bind:class="{ 'hertha-color': leagueEurope.status }")
                td {{ leagueEurope.team }}
                td {{ leagueEurope.wins }}
                td {{ leagueEurope.draws }}
                td {{ leagueEurope.loose }}
                td {{ leagueEurope.balls }}
                td {{ leagueEurope.points }}
          div
            p.date 14.09.2142
            p Lorem - Lorem 0:0
          div
            p.date 28.09.2142
            p Lorem - Lorem 1:0
          div
            p.date 19.10.2142
            p Lorem - Lorem 2:1
          div
            p.date 02.11.2142
            p Lorem - Lorem 2:0
          div
            p.date 23.11.2142
            p Lorem - Lorem 3:2
          div
            p.date 07.12.2142
            p Lorem - Lorem 1:1
</template>


<script>
  module.exports = {
    data: function(){
      return{
        show: false,
        currentView: '',
        results: [
        {
          host: 'Lorem',
          guest: 'Lorem',
          total: '2:0',
          info: '46 Lorem (Lorem), 62 Lorem - х'
        },
        {
          host: 'Lorem',
          guest: 'Lorem',
          total: '1:1',
          info: '78 Lorem (Lorem) - 16 Lorem'
        },
        ],
        leagueEuropes: [
        {
          team: 'Lorem',
          wins: 1,
          draws: '2',
          loose: '3',
          balls: '6:7',
          points: 5,
          status: true
        },
        {
          team: 'Lorem',
          wins: 3,
          draws: '2',
          loose: '1',
          balls: '8:4',
          points: 11,
          status: false
        },
        {
          team: 'Lorem',
          wins: 2,
          draws: '0',
          loose: '4',
          balls: '3:9',
          points: 6,
          status: false
        },
        {
          team: 'Lorem',
          wins: 3,
          draws: '2',
          loose: '1',
          balls: '8:5',
          points: 11,
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
  @import '../../sass/common/_variables'

  .season-wrapper
    background-color: #fff
    padding: 20px 50px
    @media (#{$max_ipad})
      padding-right: 0
      padding-left: 0
    .cup-type
      @media (#{$max_ipad})
        nav
          button
            margin-right: 0
            display: block
            margin: 0 auto
            margin-bottom: 20px
            &:last-child
              margin-bottom: 0
              margin: 0 auto

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
      @media (#{$max_ipad})
        width: 100%
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
    div
     > p.date
      font-family: $font-levetica-reg
      font-size: 17px
      + p
        padding-left: 20px
</style>