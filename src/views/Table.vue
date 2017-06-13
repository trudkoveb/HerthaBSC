<template>
  <div class="container margin-top-30">
    <div class="row">
      <div class="col-md-12">
        <h1 class="text-center">Table</h1>
      </div>
    </div>
    <div id="table" class="row margin-top-30">
      <input type="text" v-model="search" autofocus>
      <table class="bundesliga-table">
        <thead>
          <tr>
            <!-- <th>Place</th> -->
            <th>Team</th>
            <th>Matches</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="club in orderBy(clubs, 'points', -1)">
            <td v-bind:class="{ 'hertha': club.status }">{{ club.name }}</td>
            <td >{{ club.matches }}</td>
            <td >{{ club.points }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  module.exports = {
    data: function() {
      return{
        search: '',
        clubs: [
        {
          name: 'Hertha BSC',
          matches: '34',
          points: '49',
          status: true
        },
        {
          name: 'FC Bayern München',
          matches: '34',
          points: '82',
          status: false
        },
        {
          name: 'RB Leipzig',
          matches: '34',
          points: '67',
          status: false
        },
        {
          name: 'Borussia Dortmund',
          matches: '34',
          points: '64',
          status: false
        },
        {
          name: 'TSG 1899 Hoffenheim',
          matches: '34',
          points: '62',
          status: false
        },
        {
          name: '1. FC Köln',
          matches: '34',
          points: '49',
          status: false
        },
        {
          name: 'Sport-Club Freiburg',
          matches: '34',
          points: '48',
          status: false
        },
        {
          name: 'SV Werder Bremen',
          matches: '34',
          points: '45',
          status: false
        },
        {
          name: 'Borussia Mönchengladbach',
          matches: '34',
          points: '45',
          status: false
        },
        {
          name: 'FC Schalke 04',
          matches: '34',
          points: '43',
          status: false
        },
        {
          name: 'Eintracht Frankfurt',
          matches: '34',
          points: '42',
          status: false
        },
        {
          name: 'Bayer 04 Leverkusen',
          matches: '34',
          points: '41',
          status: false
        },
        {
          name: 'FC Augsburg',
          matches: '34',
          points: '38',
          status: false
        },
        {
          name: 'Hamburger SV',
          matches: '34',
          points: '38',
          status: false
        },
        {
          name: '1. FSV Mainz 05',
          matches: '34',
          points: '37',
          status: false
        },
        {
          name: 'VfL Wolfsburg',
          matches: '34',
          points: '37',
          status: false
        },
        {
          name: 'FC Ingolstadt 04',
          matches: '34',
          points: '32',
          status: false
        },
        {
          name: 'SV Darmstadt 98',
          matches: '34',
          points: '25',
          status: false
        },
        ]
      }
    }
  }
</script>

<style>
  table.bundesliga-table{
    width: 100%;
  }

  table th{
    font-size: 17px;
    text-align: center;
  }

  table th, table td{
    text-align: center;
  }

  .hertha{
    color: blue;
  }
</style>