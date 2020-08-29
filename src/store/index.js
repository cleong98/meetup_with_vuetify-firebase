import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const ModuleMeetups = {
  namespaced:true,
  state:{
    laodMeetups:[
      {
        imgUrl:'https://lp-cms-production.imgix.net/2019-06/GettyImages-538096543_medium.jpg?auto=format&fit=crop&vib=20&sharp=10&ixlib=react-8.6.4',
        id:1,
        title:'Meetup in New York',
        date:'2017-07-17'
      },
      {
        imgUrl:'https://photos.mandarinoriental.com/is/image/MandarinOriental/paris-2017-home?wid=2880&hei=1280&fmt=jpeg&crop=9,336,2699,1200&anchor=1358,936&qlt=75,0&fit=wrap&op_sharpen=0&resMode=sharp2&op_usm=0,0,0,0&iccEmbed=0&printRes=72',
        id:2,
        title:'Meetup in Paris',
        date:'2017-07-18'
      },
      {
        imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQpsMPDgVTlsEnJHgp-ZZZs43_evH_cFZ0PBQ&usqp=CAU',
        id:3,
        title:'Meetup in Malaysia',
        date:'2017-06-17'
      }
    ],
    user:{
      id:'123456',
      registeredMeetup:['0','1']
    },

  },
  mutations:{},
  actions:{},
  getters:{
    loadedMeetups (state) {
      return state.laodMeetups.sort((meetupA, meetupB) => meetupA.date > meetupB.date )
    },
    featuresMeetups(state,getters){
      return getters.loadedMeetups.slice(0,5)
    },
    loadedMeetup (state) {
      return meetupId => state.laodMeetups.find(meetup => meetup.id === meetupId)
    }
  }
}

const store = new Vuex.Store({
  state:{},
  mutations:{},
  actions:{},
  getters:{},
  modules: {
    meetups:ModuleMeetups
  }
})

export default store;

