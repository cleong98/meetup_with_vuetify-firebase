<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            <h6 class="primary--text text-h6">{{meetup.title}}</h6>
          </v-card-title>
          <v-img>
               <v-img   max-height="400px"  :src="meetup.imgUrl" />
          </v-img>
          <v-card-text>
            <div class="info--text text-h5">{{meetup.date}} - Where it tales places</div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus aperiam deserunt molestias deleniti officia impedit dolorum repellat eligendi asperiores culpa, quos quibusdam praesentium in? Itaque optio nihil quam facilis harum, quas hic praesentium eaque beatae molestias tempora voluptatem mollitia repellat rerum illo officiis, nulla nesciunt ex repellendus dolore error? Repudiandae magni excepturi placeat sapiente nostrum, consequatur animi totam minima quis id nesciunt delectus odio quasi ea vel eligendi sequi ab cum voluptatibus beatae dignissimos quos sint. Rerum reprehenderit sit molestias dolores quidem delectus, officia labore? Dolorem veritatis officiis fugiat ut incidunt aperiam at quam quod doloremque? Pariatur neque corrupti eius.</div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="primary">Register</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
  export default {
    name:'Meetup',
    props:['id'],
    computed:{

      ... mapGetters({getmeetup:"meetups/loadedMeetup"}),
      meetup() {
        return this.getmeetup(this.id)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>