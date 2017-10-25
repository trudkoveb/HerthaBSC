<template lang="pug">
  div(class="main-content")
    div.table-wrapper
      input(type="text", v-model="search", autofocus, style="display: none")
      table(class="bundesliga-table")
        thead
          tr
            th
            th
            th
              | Матчи
            th
              | Очки
            th
              | Победы
            th
              | Ничьи
            th
              | Поражения
            th
              | Голы
            th
              | Разница
        tbody
          tr(v-for="club in orderBy(clubs, 'points', -1)", v-bind:class="{ 'hertha-color': club.status }")
            td
            td
              | {{ club.name }}
            td
              | {{ club.matches }}
            td
              | {{ club.points }}
            td
              | {{ club.wins }}
            td
              | {{ club.draws }}
            td
              | {{ club.losses }}
            td
              | {{ club.goals }}
            td
              | {{ club.difference }}
    div.place-description
      ul
        li
          | Лига Чемпионов
        li
          | Квалификация Лиги Чемпионов
        li
          | Лига Европы
        li
          | Плей-офф за вылет
        li
          | Вылет
</template>

<script>
  module.exports = {
    data: function() {
      return{
        search: '',
        clubs: [
        {
          name: 'Герта',
          matches: '9',
          points: '10',
          status: true,
          wins: '2',
          draws: '4',
          losses: '3',
          goals: '9:11',
          difference: '-2'
        },
        {
          name: 'Бавария',
          matches: '9',
          points: '20',
          status: false,
          wins: '6',
          draws: '2',
          losses: '1',
          goals: '22:7',
          difference: '+15'
        },
        {
          name: 'РБ Лейпциг',
          matches: '9',
          points: '19',
          status: false,
          wins: '6',
          draws: '1',
          losses: '2',
          goals: '16:10',
          difference: '+6'
        },
        {
          name: 'Боруссия Д',
          matches: '9',
          points: '20',
          status: false,
          wins: '6',
          draws: '2',
          losses: '1',
          goals: '25:7',
          difference: '+18'
        },
        {
          name: 'Хоффенхайм-1899',
          matches: '9',
          points: '16',
          status: false,
          wins: '4',
          draws: '4',
          losses: '1',
          goals: '16:11',
          difference: '+5'
        },
        {
          name: 'Кельн',
          matches: '9',
          points: '02',
          status: false,
          wins: '0',
          draws: '2',
          losses: '7',
          goals: '51:42',
          difference: '-5'
        },
        {
          name: 'Фрайбург',
          matches: '9',
          points: '08',
          status: false,
          wins: '1',
          draws: '5',
          losses: '3',
          goals: '6:17',
          difference: '-11'
        },
        {
          name: 'Вердер',
          matches: '9',
          points: '05',
          status: false,
          wins: '0',
          draws: '5',
          losses: '4',
          goals: '3:9',
          difference: '-6'
        },
        {
          name: 'Боруссия М',
          matches: '9',
          points: '14',
          status: false,
          wins: '4',
          draws: '2',
          losses: '3',
          goals: '13:17',
          difference: '-4'
        },
        {
          name: 'Шальке-04',
          matches: '9',
          points: '16',
          status: false,
          wins: '5',
          draws: '1',
          losses: '3',
          goals: '12:9',
          difference: '+3'
        },
        {
          name: 'Айнтрахт',
          matches: '9',
          points: '14',
          status: false,
          wins: '4',
          draws: '2',
          losses: '3',
          goals: '10:9',
          difference: '+1'
        },
        {
          name: 'Байер',
          matches: '9',
          points: '12',
          status: false,
          wins: '3',
          draws: '3',
          losses: '3',
          goals: '20:14',
          difference: '+6'
        },
        {
          name: 'Аугсбург',
          matches: '9',
          points: '12',
          status: false,
          wins: '3',
          draws: '3',
          losses: '3',
          goals: '12:10',
          difference: '+2'
        },
        {
          name: 'Гамбург',
          matches: '9',
          points: '07',
          status: false,
          wins: '2',
          draws: '1',
          losses: '6',
          goals: '6:15',
          difference: '-9'
        },
        {
          name: 'Майнц',
          matches: '9',
          points: '10',
          status: false,
          wins: '3',
          draws: '1',
          losses: '5',
          goals: '10:15',
          difference: '-5'
        },
        {
          name: 'Вольфсбург',
          matches: '9',
          points: '09',
          status: false,
          wins: '1',
          draws: '6',
          losses: '2',
          goals: '9:12',
          difference: '-3'
        },
        {
          name: 'Штутгарт',
          matches: '9',
          points: '10',
          status: false,
          wins: '3',
          draws: '1',
          losses: '5',
          goals: '6:11',
          difference: '-5'
        },
        {
          name: 'Ганновер 96',
          matches: '9',
          points: '15',
          status: false,
          wins: '4',
          draws: '3',
          losses: '2',
          goals: '10:7',
          difference: '+3'
        },
        ]
      }
    }
  }
</script>

<style lang="sass?indentedSyntax=true">
    .bundesliga-table
      width: 80%
      counter-reset: list 0
      tbody
        tr
          td:first-child:before
            counter-increment: list
            content: counter(list)
        tr:first-child, tr:nth-child(2), tr:nth-child(3), tr:nth-child(4), tr:nth-child(5), tr:nth-child(6), tr:nth-child(16), tr:nth-child(17), tr:last-child
            td:first-child
              position: relative
              &:after
                content:  ''
                display: block
                height: 100%
                width: 6px
                background-color: #009000
                position: absolute
                top: 0
                left: -6px
        tr:nth-child(4)
            td:first-child:after
                background-color: #00c300
        tr:nth-child(5), tr:nth-child(6)
            td:first-child:after
                background-color: #31b0d5
        tr:nth-child(16)
            td:first-child:after
                background-color: #f0ad4e
        tr:last-child, tr:nth-child(17)
            td:first-child:after
                background-color: red
    .hertha-color
      color: #0058a3
    .place-description
      text-align: center
      padding: 30px 0
      ul
        li
          display: inline-block
          position: relative
          margin-right: 30px
          &:last-child
            margin-right: 0
          &:after
            content:  ''
            display: block
            height: 30px
            width: 6px
            position: absolute
            top: -7px
            left: -10px
          &:first-child:after
            background-color: #009000
          &:nth-child(2):after
            background-color: #00c300
          &:nth-child(3):after
            background-color: #31b0d5
          &:nth-child(4):after
            background-color: #f0ad4e
          &:last-child:after
            background-color: red
</style>