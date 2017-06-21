<template lang="pug">
  div(class="main-content")
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
            name: 'Рун Ярстейн',
            image: '../img/flags/norway-flag.png',
            position: 'Вратарь',
            age: '32',
            height: '186',
            weight: '82'
          },
          {
            number: '29',
            name: 'Нильс-Йонатан Кёрбер',
            image: '../img/flags/germany-flag.png',
            position: 'Вратарь',
            age: '20',
            height: '186',
            weight: '84'
          },
          {
            number: '35',
            name: 'Мариус Гершбек',
            image: '../img/flags/germany-flag.png',
            position: 'Вратарь',
            age: '22',
            height: '187',
            weight: '80'
          },
          {
            number: '25',
            name: 'Джон Брукс',
            image: '../img/flags/usa-flag.png',
            position: 'Защитник',
            age: '24',
            height: '193',
            weight: '78'
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
            name: 'Йоханнес Ван Дер Берг',
            image: '../img/flags/germany-flag.png',
            position: 'Защитник',
            age: '25',
            height: '183',
            weight: '75'
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
            number: '14',
            name: 'Валентин Штокер',
            image: '../img/flags/swiss-flag.png',
            position: 'Полузащитник',
            age: '28',
            height: '179',
            weight: '72'
          },
          {
            number: '9',
            name: 'Александр Баумйоханн',
            image: '../img/flags/germany-flag.png',
            position: 'Полузащитник',
            age: '30',
            height: '178',
            weight: '75'
          },
          {
            number: '17',
            name: 'Толга Чигерчи',
            image: '../img/flags/turkey-flag.png',
            position: 'Полузащитник',
            age: '25',
            height: '185',
            weight: '80'
          },
          {
            number: '10',
            name: 'Анис Бен-Хатира',
            image: '../img/flags/tunis-flag.png',
            position: 'Полузащитник',
            age: '29',
            height: '183',
            weight: '80'
          },
          {
            number: '9',
            name: 'Йенс Хегелер',
            image: '../img/flags/germany-flag.png',
            position: 'Полузащитник',
            age: '29',
            height: '193',
            weight: '86'
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
            number: '12',
            name: 'Ронни',
            image: '../img/flags/brazil-flag.png',
            position: 'Полузащитник',
            age: '31',
            height: '175',
            weight: '74'
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
            number: '27',
            name: 'Рой Бееренс',
            image: '../img/flags/holl-flag.png',
            position: 'Полузащитник',
            age: '29',
            height: '193',
            weight: '85'
          },
          {
            number: '7',
            name: 'Хаджиме Хасагай',
            image: '../img/flags/japan-flag.png',
            position: 'Полузащитник',
            age: '31',
            height: '176',
            weight: '68'
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
            number: '31',
            name: 'Флориан Кохис',
            image: '../img/flags/germany-flag.png',
            position: 'Полузащитник',
            age: '22',
            height: '173',
            weight: '69'
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
            number: '11',
            name: 'Сами Аллаги',
            image: '../img/flags/tunis-flag.png',
            position: 'Форвард',
            age: '31',
            height: '184',
            weight: '77'
          },
          {
            number: '16',
            name: 'Юлиан Шибер',
            image: '../img/flags/germany-flag.png',
            position: 'Форвард',
            age: '28',
            height: '186',
            weight: '83'
          }
        ]
      }
    }
  }
</script>

<style lang="sass?indentedSyntax=true">

</style>