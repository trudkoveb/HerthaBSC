var Vue = require('vue')


import VueRouter from 'vue-router'
import Vue from 'vue'
import Vue2Filters from 'vue2-filters'



// pages
var Main = require('./views/Main.vue')
var Team = require('./views/Team.vue')
var Post = require('./views/Post.vue')
var SliderPost = require('./views/SliderPost.vue')
var History = require('./views/History.vue')
var Table = require('./views/Table.vue')
var Achievement = require('./views/Achievement.vue')
var Season = require('./views/Season.vue')

// components

Vue.use(VueRouter)
Vue.use(Vue2Filters)

var router = new VueRouter({
 mode: 'history',
 routes: [
 { path: '/team', component: Team },
 { path: '/history', component: History },
 { path: '/table', component: Table },
 { path: '/achievement', component: Achievement },
 { path: '/', component: Main },
 { path: '/season', component: Season },
 { path: '/post/:id', name: 'post', component: Post },
 { path: '/post/:id', name: 'sliderpost', component: SliderPost }
 ]
})

new Vue({
 el: '#app',
 router: router
})

