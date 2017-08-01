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
          matches: '34',
          points: '49',
          status: true,
          wins: '15',
          draws: '4',
          losses: '15',
          goals: '43:47',
          difference: '-4'
        },
        {
          name: 'Бавария',
          matches: '34',
          points: '82',
          status: false,
          wins: '25',
          draws: '7',
          losses: '2',
          goals: '89:22',
          difference: '+67'
        },
        {
          name: 'РБ Лейпциг',
          matches: '34',
          points: '67',
          status: false,
          wins: '20',
          draws: '7',
          losses: '7',
          goals: '66:39',
          difference: '+27'
        },
        {
          name: 'Боруссия Д',
          matches: '34',
          points: '64',
          status: false,
          wins: '18',
          draws: '10',
          losses: '6',
          goals: '72:40',
          difference: '+32'
        },
        {
          name: 'Хоффенхайм-1899',
          matches: '34',
          points: '62',
          status: false,
          wins: '16',
          draws: '14',
          losses: '4',
          goals: '64:37',
          difference: '+27'
        },
        {
          name: 'Кельн',
          matches: '34',
          points: '49',
          status: false,
          wins: '12',
          draws: '13',
          losses: '9',
          goals: '51:42',
          difference: '+9'
        },
        {
          name: 'Фрайбург',
          matches: '34',
          points: '48',
          status: false,
          wins: '14',
          draws: '6',
          losses: '14',
          goals: '42:60',
          difference: '-18'
        },
        {
          name: 'Вердер',
          matches: '34',
          points: '45',
          status: false,
          wins: '13',
          draws: '16',
          losses: '5',
          goals: '61:64',
          difference: '-3'
        },
        {
          name: 'Боруссия М',
          matches: '34',
          points: '45',
          status: false,
          wins: '12',
          draws: '9',
          losses: '13',
          goals: '45:49',
          difference: '-4'
        },
        {
          name: 'Шальке-04',
          matches: '34',
          points: '43',
          status: false,
          wins: '11',
          draws: '10',
          losses: '13',
          goals: '45:40',
          difference: '+5'
        },
        {
          name: 'Айнтрахт',
          matches: '34',
          points: '42',
          status: false,
          wins: '11',
          draws: '9',
          losses: '14',
          goals: '36:43',
          difference: '-7'
        },
        {
          name: 'Байер',
          matches: '34',
          points: '41',
          status: false,
          wins: '11',
          draws: '8',
          losses: '15',
          goals: '53:55',
          difference: '-2'
        },
        {
          name: 'Аугсбург',
          matches: '34',
          points: '38',
          status: false,
          wins: '9',
          draws: '11',
          losses: '14',
          goals: '35:51',
          difference: '-16'
        },
        {
          name: 'Гамбург',
          matches: '34',
          points: '38',
          status: false,
          wins: '10',
          draws: '8',
          losses: '16',
          goals: '33:61',
          difference: '-28'
        },
        {
          name: 'Майнц',
          matches: '34',
          points: '37',
          status: false,
          wins: '10',
          draws: '7',
          losses: '17',
          goals: '44:55',
          difference: '-11'
        },
        {
          name: 'Вольфсбург',
          matches: '34',
          points: '37',
          status: false,
          wins: '10',
          draws: '7',
          losses: '17',
          goals: '34:52',
          difference: '-18'
        },
        {
          name: 'Ингольштадт',
          matches: '34',
          points: '32',
          status: false,
          wins: '8',
          draws: '8',
          losses: '18',
          goals: '36:57',
          difference: '-21'
        },
        {
          name: 'Дармштадт',
          matches: '34',
          points: '25',
          status: false,
          wins: '7',
          draws: '4',
          losses: '23',
          goals: '28:63',
          difference: '-35'
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
                background-color: #d9534f
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
            background-color: #d9534f
</style>