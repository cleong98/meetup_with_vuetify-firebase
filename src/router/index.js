import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
const MeetUps = () => import('@/views/Meetup/Meetups');
const Meetup = () => import('@/views/Meetup')
const CreateMeetUp = ()=> import('@/views/Meetup/Create');
const Profile = () => import('@/views/Users');
const SignIn = () => import('@/views/Users/SignIn');
const SignUp = () => import('@/views/Users/SignUp');


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/meetups',
    name:'meetups',
    component:MeetUps
  },
  {
    path:'/meetup/:id',
    name:'Meetup',
    props:true,
    component:Meetup
  },
  {
    path:'/meetups/new',
    name:'createMeetup',
    component:CreateMeetUp
  },
  {
    path:'/profile',
    name:'Profile',
    component:Profile
  },
  {
    path:'/signup',
    name:'SignUp',
    component:SignUp
  },
  {
    path:'/signin',
    name:'SignIn',
    component:SignIn
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
