<template lang="pug">
  div(class="main-content")
    div.table-wrapper.adaptive-table
      input(type="text", v-model="search", autofocus, style="display: none")
      table(class="bundesliga-table")
        thead
          tr
            th
            th
            th
              | Matches
            th
              | Points
            th
              | Wins
            th
              | Draws
            th
              | Losses
            th
              | Goals
            th
              | Goals difference
        tbody
          tr(v-for="club in orderBy(clubs, 'points', 'scoredGoals', -1)", v-bind:class="{ 'hertha-color': club.status }")
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
              | {{ club.scoredGoals }}:{{ club.missedGoals }}
            td
              | {{ club.scoredGoals - club.missedGoals}}
    div.place-description
      ul
        li
          | Lorem
        li
          | Lorem
        li
          | Lorem
        li
          | Lorem
        li
          | Lorem
</template>

<script>
  module.exports = {
    data: function() {
      return{
        search: '',
        clubs: [
        {
          name: 'Lorem',
          matches: '18',
          points: 24,
          status: true,
          wins: 6,
          draws: '6',
          losses: '6',
          scoredGoals: 26,
          missedGoals: 26
        },
        {
          name: 'Lorem',
          matches: '18',
          points: 44,
          status: false,
          wins: 14,
          draws: '2',
          losses: '2',
          scoredGoals: 40,
          missedGoals: 12
        },
        {
          name: 'Lorem',
          matches: '18',
          points: 31,
          status: false,
          wins: 9,
          draws: '4',
          losses: '5',
          scoredGoals: 30,
          missedGoals: 26
        },
        {
          name: 'Lorem',
          matches: '18',
          points: 29,
          status: false,
          wins: 8,
          draws: '5',
          losses: '5',
          scoredGoals: 39,
          missedGoals: 24
        },
        {
          name: 'Lorem',
          matches: '18',
          points: 27,
          status: false,
          wins: 7,
          draws: '6',
          losses: '5',
          scoredGoals: 28,
          missedGoals: 23
        },
        {
          name: 'Lorem',
          matches: '18',
          points: 9,
          status: false,
          wins: 2,
          draws: '3',
          losses: '13',
          scoredGoals: 12,
          missedGoals: 33
        },
        {
          name: 'Lorem',
          matches: '20',
          points: 19,
          status: false,
          wins: 4,
          draws: '8',
          losses: '6',
          scoredGoals: 18,
          missedGoals: 32
        },
        {
          name: 'Lorem',
          matches: '18',
          points: 16,
          status: false,
          wins: 3,
          draws: '7',
          losses: '8',
          scoredGoals: 14,
          missedGoals: 21
        },
        {
          name: 'Lorem',
          matches: '18',
          points: 28,
          status: false,
          wins: 8,
          draws: '4',
          losses: '6',
          scoredGoals: 28,
          missedGoals: 30
        },
        {
          name: 'Lorem',
          matches: '18',
          points: 30,
          status: false,
          wins: 8,
          draws: '6',
          losses: '4',
          scoredGoals: 29,
          missedGoals: 24
        },
        {
          name: 'Lorem',
          matches: '18',
          points: 27,
          status: false,
          wins: 7,
          draws: '6',
          losses: '5',
          scoredGoals: 21,
          missedGoals: 19
        },
        {
          name: 'Lorem',
          matches: '18',
          points: 28,
          status: false,
          wins: 7,
          draws: '7',
          losses: '4',
          scoredGoals: 35,
          missedGoals: 26
        },
        {
          name: 'Lorem',
          matches: '18',
          points: 27,
          status: false,
          wins: 7,
          draws: '6',
          losses: '5',
          scoredGoals: 28,
          missedGoals: 23
        },
        {
          name: 'Lorem',
          matches: '18',
          points: 15,
          status: false,
          wins: 4,
          draws: '3',
          losses: '11',
          scoredGoals: 15,
          missedGoals: 26
        },
        {
          name: 'Lorem',
          matches: '18',
          points: 17,
          status: false,
          wins: 4,
          draws: '5',
          losses: '9',
          scoredGoals: 21,
          missedGoals: 31
        },
        {
          name: 'Lorem',
          matches: '18',
          points: 20,
          status: false,
          wins: 3,
          draws: '11',
          losses: '4',
          scoredGoals: 21,
          missedGoals: 21
        },
        {
          name: 'Lorem',
          matches: '18',
          points: 20,
          status: false,
          wins: 6,
          draws: '2',
          losses: '10',
          scoredGoals: 14,
          missedGoals: 21
        },
        {
          name: 'Lorem',
          matches: '18',
          points: 26,
          status: false,
          wins: 7,
          draws: '5',
          losses: '6',
          scoredGoals: 27,
          missedGoals: 28
        },
        ]
      }
    }
  }
</script>

<style lang="sass?indentedSyntax=true">
    @import '../../sass/common/_variables'

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
      @media (#{$max_ipad})
        text-align: left
        margin-left: 4%
      ul
        li
          display: inline-block
          position: relative
          margin-right: 30px
          @media (#{$max_ipad})
            display: block
            margin-right: 0
            margin-bottom: 20px
          &:last-child
            margin-right: 0
            @media (#{$max_ipad})
              margin-bottom: 0
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