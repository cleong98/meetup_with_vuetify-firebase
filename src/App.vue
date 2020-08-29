<template>

<v-app>
   <v-navigation-drawer temporary absolute v-model="sideNav">
     <v-list>
       <v-list-item-group>
         <v-list-item v-for="item of menuItem" :key="item.title" :to="{name:item.link}">
         <v-list-item-icon>
           <v-icon>{{item.icon}}</v-icon>
         </v-list-item-icon>
         <v-list-item-content>{{item.title}}</v-list-item-content>
       </v-list-item>
       </v-list-item-group>
     </v-list>
   </v-navigation-drawer>
  <v-card>
    <v-app-bar dark class="primary">
      <v-app-bar-nav-icon class="hidden-md-and-up" @click ="sideNav = !sideNav"/>
      <v-toolbar-title><router-link to="/" tag="span" style="cursor:pointer"> DevMeetup </router-link></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text v-for="item of menuItem" :key="item.title" :to="{name:item.link}">
          <v-icon left >{{ item.icon }}</v-icon>
           {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

  </v-card>
  <main>
    <router-view/>
  </main>
</v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      sideNav:false,
      menuItem:[
        {icon:'supervisor_account',title:'View Meetups', link:'meetups'},
        {icon:'room',title:'Organize Meetup',link:'createMeetup'},
        {icon:'person',title:'Profile',link:'Profile'},
        {icon:'face',title:'Sign Up',link:'SignUp'},
        {icon:'lock_open',title:'Sign In',link:'SignIn'}
        ]
    }
  }
};
</script>
<style scoped>

</style>
