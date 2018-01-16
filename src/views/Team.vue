<template lang="pug">
  div(class="main-content")
    div.table-wrapper.adaptive-table
      table(class="team-table")
        thead
          tr
            th
              | Номер
            th
              | Игрок
            th
              |
            th
              | Амплуа
            th
              | Возраст
            th
              | Рост
            th
              | Вес
        tbody
          tr(v-for="player in players")
            td
              | {{ player.number }}
            td
              | {{ player.name }}
            td
              img(v-bind:src="player.image")
            td
              | {{ player.position }}
            td
              | {{ player.age }}
            td
              | {{ player.height }}
            td
              | {{ player.weight }}
</template>

<script>
  module.exports = {
    data: function () {
      return {
        players: [
          {
            number: '1',
            name: 'Томас Крафт',
            image: '../img/flags/germany-flag.png',
            position: 'Вратарь',
            age: '28',
            height: '187',
            weight: '84'
          },
          {
            number: '22',
            name: 'Руне Ярстейн',
            image: '../img/flags/norway-flag.png',
            position: 'Вратарь',
            age: '32',
            height: '190',
            weight: '82'
          },
          {
            number: '25',
            name: 'Джордан Торунарига',
            image: '../img/flags/germany-flag.png',
            position: 'Вратарь',
            age: '19',
            height: '189',
            weight: '77'
          },
          {
            number: '4',
            name: 'Карим Рекик',
            image: '../img/flags/holl-flag.png',
            position: 'Вратарь',
            age: '22',
            height: '186',
            weight: '79'
          },
          {
            number: '17',
            name: 'Максимилиан Миттельштедт',
            image: '../img/flags/germany-flag.png',
            position: 'Защитник',
            age: '20',
            height: '178',
            weight: '69'
          },
          {
            number: '21',
            name: 'Марвин Платтенхардт',
            image: '../img/flags/germany-flag.png',
            position: 'Защитник',
            age: '25',
            height: '181',
            weight: '76'
          },
          {
            number: '23',
            name: 'Митчелл Вайзер',
            image: '../img/flags/germany-flag.png',
            position: 'Защитник',
            age: '23',
            height: '176',
            weight: '67'
          },
          {
            number: '5',
            name: 'Никлас Штарк',
            image: '../img/flags/germany-flag.png',
            position: 'Защитник',
            age: '33',
            height: '189',
            weight: '77'
          },
          {
            number: '34',
            name: 'Максимиллиан Миттельштадт',
            image: '../img/flags/germany-flag.png',
            position: 'Защитник',
            age: '20',
            height: '178',
            weight: '69'
          },
          {
            number: '2',
            name: 'Петер Пекарик',
            image: '../img/flags/slovac-flag.png',
            position: 'Защитник',
            age: '30',
            height: '176',
            weight: '70'
          },
          {
            number: '15',
            name: 'Себастьян Лангкамп',
            image: '../img/flags/germany-flag.png',
            position: 'Защитник',
            age: '28',
            height: '190',
            weight: '85'
          },
          {
            number: '28',
            name: 'Фабиан Лустенбергер',
            image: '../img/flags/swiss-flag.png',
            position: 'Защитник',
            age: '29',
            height: '180',
            weight: '70'
          },
          {
            number: '14',
            name: 'Валентин Штокер',
            image: '../img/flags/swiss-flag.png',
            position: 'Полузащитник',
            age: '28',
            height: '179',
            weight: '72'
          },
          {
            number: '26',
            name: 'Арне Майер',
            image: '../img/flags/germany-flag.png',
            position: 'Полузащитник',
            age: '18',
            height: '183',
            weight: '79'
          },
          {
            number: '21',
            name: 'Митчелл Вайзер',
            image: '../img/flags/germany-flag.png',
            position: 'Полузащитник',
            age: '29',
            height: '176',
            weight: '67'
          },
          {
            number: '6',
            name: 'Владимир Дарида',
            image: '../img/flags/chech-flag.png',
            position: 'Полузащитник',
            age: '27',
            height: '171',
            weight: '64'
          },
          {
            number: '24',
            name: 'Генки Харагучи',
            image: '../img/flags/japan-flag.png',
            position: 'Полузащитник',
            age: '26',
            height: '177',
            weight: '68'
          },
          {
            number: '10',
            name: 'Ондрей Дуда',
            image: '../img/flags/slovac-flag.png',
            position: 'Полузащитник',
            age: '22',
            height: '183',
            weight: '64'
          },
          {
            number: '11',
            name: 'Мэтью Лекки',
            image: '../img/flags/australia-flag.png',
            position: 'Полузащитник',
            age: '26',
            height: '180',
            weight: '84'
          },
          {
            number: '3',
            name: 'Пер Шелбред',
            image: '../img/flags/norway-flag.png',
            position: 'Полузащитник',
            age: '30',
            height: '175',
            weight: '74'
          },
          {
            number: '27',
            name: 'Дэви Зельке',
            image: '../img/flags/germany-flag.png',
            position: 'Форвард',
            age: '22',
            height: '192',
            weight: '75'
          },
          {
            number: '8',
            name: 'Саломон Калу',
            image: '../img/flags/ivuar-flag.png',
            position: 'Форвард',
            age: '32',
            height: '184',
            weight: '77'
          },
          {
            number: '19',
            name: 'Ведад Ибишевич',
            image: '../img/flags/germany-flag.png',
            position: 'Форвард',
            age: '32',
            height: '189',
            weight: '80'
          }
        ]
      }
    }
  }
</script>

<style lang="sass?indentedSyntax=true">

</style>