<template lang="pug">
  div(class="margin-top-30")
    table(class="team-table")
      thead
        tr
          th
            | cddcdc
          th
            | cdcdccd
          th
            | cdcdcdcdc
          th
            | dvdvdvdvd
          th
            | dcdcdcdc
          th
            | dcdcdcdc
      tbody
        tr(v-for="player in players")
          td {{ player.name }}
          td
            img(v-bind:src="player.image")
          td {{ player.position }}
          td {{ player.age }}
          td {{ player.height }}
          td {{ player.weight }}
</template>

<script>
  module.exports = {
    data: function () {
      return {
        players: [
          {
            name: 'Томас Крафт',
            image: '../img/flags/germany-flag.png',
            position: 'Вратарь',
            age: '26',
            height: '187',
            weight: '84'
          },
          {
            name: 'Рун Ярстейн',
            image: '../img/flags/norway-flag.png',
            position: 'Вратарь',
            age: '30',
            height: '186',
            weight: '82'
          },
          {
            name: 'Нильс-Йонатан Кёрбер',
            image: '../img/flags/germany-flag.png',
            position: 'Вратарь',
            age: '18',
            height: '186',
            weight: '84'
          }
        ]
      }
    }
  }
</script>

<style lang="sass?indentedSyntax=true">
  table.team-table
    width: 50%
    margin: 200px auto
</style>