<template lang="pug">
  div(class="main-content")
    div(class="season-wrapper")

      div.cup-type
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
              tr(v-for="leagueEurope in orderBy(leagueEuropes, 'points', 'wins', -1)", v-bind:class="{ 'hertha-color': leagueEurope.status }")
                td {{ leagueEurope.team }}
                td {{ leagueEurope.wins }}
                td {{ leagueEurope.draws }}
                td {{ leagueEurope.loose }}
                td {{ leagueEurope.balls }}
                td {{ leagueEurope.points }}
          div
            p.date 14.09.2017
            p Герта - Атлетик 0:0
          div
            p.date 28.09.2017
            p Эстерсунд - Герта 1:0
          div
            p.date 19.10.2017
            p Заря - Герта 2:1
          div
            p.date 02.11.2017
            p Герта - Заря 2:0
          div
            p.date 23.11.2017
            p Атлетик - Герта 3:2
          div
            p.date 07.12.2017
            p Герта - Эстерсунд 1:1
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
        {
          host: 'Герта',
          guest: 'Бавария',
          total: '2:2',
          info: '51 Дуда (Харагути), 56 Калу (Рекик) - 10 Хуммельс (Боатенг), 49 Левандовски (Толиссо)'
        },
        {
          host: 'Герта',
          guest: 'Шальке-04',
          total: '0:2',
          info: 'х - 54 Горетцка (Харит) (пенальти), 78 Бургшталлер (Налдо)'
        },
        {
          host: 'Фрайбург',
          guest: 'Герта',
          total: '1:1',
          info: '51 Хаберер (Гюнтер) (пенальти) - 81 Калу (Зельке) (пенальти)'
        },
        {
          host: 'Герта',
          guest: 'Гамбург',
          total: '2:1',
          info: '17 Штарк (Платтенхардт), 49 Рекик (Вайзер) - 73 Арп (Пападопулос)'
        },
        {
          host: 'Вольфсбург',
          guest: 'Герта',
          total: '3:3',
          info: '41 Малли (Ориги), 44 Гомес (Дидави), 60 Ориги (Кнохе) - 1 Ибишевич (Лазаро), 53 Рекик (Платтенхардт), 83 Зельке'
        },
        {
          host: 'Герта',
          guest: 'Боруссия М',
          total: '2:4',
          info: '28 Ибишевич (Вайзер), 71 Вайзер (Калу) - 5 Штиндль, 14 Азар (пенальти), 20 Раффаэл, 77 Раффаэл (Херрманн)'
        },
        {
          host: 'Кельн',
          guest: 'Герта',
          total: '0:2',
          info: 'х - 17 Ибишевич (Зельке), 64 Ибишевич (Зельке) (пенальти)'
        },
        {
          host: 'Герта',
          guest: 'Айнтрахт Ф',
          total: '1:2',
          info: '15 Зельке (Лекки) - 26 Вольф (Виллемс), 80 Боатенг'
        },
        {
          host: 'Аугсбург',
          guest: 'Герта',
          total: '1:1',
          info: '74 Каюби - 90 Калу (Штарк)'
        },
        {
          host: 'Герта',
          guest: 'Ганновер',
          total: '3:1',
          info: '18 Калу (Пекарик), 45 Калу (Рекик), 83 Торунарига (Штарк) - 65 Бебу (Харник)'
        },
        {
          host: 'РБ Лейпциг',
          guest: 'Герта',
          total: '2:3',
          info: '68 Орбан (Брума), 90 Хальстенберг (Демме) - 5 Зельке (Эссвайн), 31 Калу (Лазаро), 51 Зельке (Лазаро)'
        },
        {
          host: 'Штутгарт',
          guest: 'Герта',
          total: '1:0',
          info: '78 Штарк (Гомес) (автогол) - x'
        },
        ],
        leagueEuropes: [
        {
          team: 'Герта',
          wins: 1,
          draws: '2',
          loose: '3',
          balls: '6:7',
          points: 5,
          status: true
        },
        {
          team: 'Эстерсунд',
          wins: 3,
          draws: '2',
          loose: '1',
          balls: '8:4',
          points: 11,
          status: false
        },
        {
          team: 'Заря',
          wins: 2,
          draws: '0',
          loose: '4',
          balls: '3:9',
          points: 6,
          status: false
        },
        {
          team: 'Атлетик',
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