<template>
  <v-container>
   <v-row>
     <v-col cols="12">
       <v-card class="info mb-2"  v-for="meetup of meetups" :key="meetup.id">
         <v-row>
           <v-col cols="5" sm="4" md="3">
             <v-img class="ml-3"  :src="meetup.imgUrl" />
           </v-col>
           <v-col cols="7" sm="8" md="9" class="d-flex flex-column justify-space-around">
                <v-card-title class="px-0">
                <div>
                  <h3 class="white--text">{{meetup.title}}</h3>
                  <div>{{meetup.date}}</div>
                </div>
              </v-card-title>
              <v-card-actions class="pa-0">
                <v-btn text class="px-0" :to="{name:'Meetup',params:{id:meetup.id}}">
                  <v-icon left>arrow_forward</v-icon>
                  View Meetup
                </v-btn>
              </v-card-actions>
           </v-col>
         </v-row>
       </v-card>
     </v-col>
   </v-row>
  </v-container>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
 name:"MeetUps",
 computed:{
   ... mapGetters({meetups:"meetups/loadedMeetups"})
 }
}
</script>

<style>

</style>