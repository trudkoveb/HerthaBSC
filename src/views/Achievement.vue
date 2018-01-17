<template lang="pug">
  div(class="main-content")
    div(class="achievements-wrapper")
      div(class="achievement-example")
        img(src="../../img/pictures/achievements/image3.png", class="img-responsive center-block", alt="Lorem", title="Lorem")
        p  Lorem ipsum (2142, 2142)
      div(class="achievement-example")
        img(src="../../img/pictures/achievements/image3.png", class="img-responsive center-block", alt="Lorem", title="Lorem")
        p  Lorem ipsum (2142, 2142)
      div(class="achievement-example")
        img(src="../../img/pictures/achievements/image3.png", class="img-responsive center-block", alt="Lorem", title="Lorem")
        p  Lorem ipsum (2142)
</template>

<script>
  module.exports = {
    data: function(){
      return{
        show: false
      }
    }
  }
</script>

<style lang="sass?indentedSyntax=true">
  @import '../../sass/common/_variables'

  .achievements-wrapper
    background-color: #fff
    display: -webkit-flex
    display: -moz-flex
    display: -ms-flex
    display: -o-flex
    display: flex
    flex-direction: column
    align-items: flex-end
    padding: 50px 0
    flex-wrap: wrap
    .achievement-example
      display: -webkit-flex
      display: -moz-flex
      display: -ms-flex
      display: -o-flex
      display: flex
      flex-direction: row
      align-items: center
      justify-content: center
      margin-bottom: 50px
      flex-wrap: wrap
      &:last-child
        margin-bottom: 0
      p
        width: 540px
        font-family: 'HelveticaReg'
        font-size: 18px
        @media (#{$max_ipad})
          width: auto
      img
        margin-right: 50px
        @media (#{$max_ipad})
          margin-right: 0
</style>