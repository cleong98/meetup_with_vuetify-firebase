<template>
  <v-container >
    <v-row >
      <v-col cols="12"  sm="6" class="text-center text-sm-left">
        <v-btn large :to="{name:'meetups'}" class="primary" > Explore Meetups</v-btn>
      </v-col>
      <v-col cols="12" sm="6" class="text-center text-sm-right">
        <v-btn large :to="{name:'createMeetup'}" class="primary"> Organize Meetups</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-carousel continuous interval="2000" v-model="activeSlide" :touch="{left: () => activeSlide++,
    right: () => activeSlide--}" >

          <v-carousel-item v-for="meetup of meetups" :key="meetup.id" :src="meetup.imgUrl" @click="onLoadMeetup(meetup.id)" >
            <div class="title">
              {{  meetup.title }}
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="text-center">
        <p>Join our awesome meetups!</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import { createNamespacedHelpers} from 'vuex';
const {mapGetters}  = createNamespacedHelpers('meetups')
export default {
  name: 'Home',
  data() {
    return {
      activeSlide:2
    }
  },
  methods:{
    onLoadMeetup(id) {
      this.$router.push({name:'Meetup',params:{id:id}})
    }
  },
  computed: {
    ...mapGetters({ meetups:"featuresMeetups"})

  }
}
</script>

<style scoped>
  .title {
    position: absolute;
    bottom: 50px;
    left:50%;
    transform: translate(-50%,-50%);
    background:rgba(0,0,0,0.5);
    font-size: 2em;
    padding: 10px;
  }
  .carousel-nav-size {
    font-size: 100;
  }
</style>
