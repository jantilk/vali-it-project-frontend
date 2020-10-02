<template>
  <v-app>
    <v-app-bar app class="d-none d-sm-flex">
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="@/assets/logo_bird.png"
          width="40"
        />
        <div class="d-none d-sm-flex" style="margin: 0px 10px">
          <router-link to="/client" style="color:cadetblue; margin: 0px 10px">Client</router-link> |
          <router-link to="/device" style="color:cadetblue; margin: 0px 10px">Device</router-link> |
          <router-link to="/workOrder" style="color:cadetblue; margin: 0px 10px">Work order</router-link> |
          <router-link to="/product" style="color:cadetblue; margin: 0px 10px">Product</router-link> |
          <router-link to="/consumable" style="color:cadetblue; margin: 0px 10px">Consumable</router-link> |
          <router-link to="/login" style="color:cadetblue; margin-left: 10px">Login</router-link>
        </div>
        <button @click.prevent="playSound('sheep.mp3')">
        <v-img style="margin-left: 20px"
            alt="Vuetify Name"
            class="shrink mr-2"
            contain
            src="@/assets/sheep_logo.png"
            width="40">
        </v-img>
        </button>
      </div>
    </v-app-bar>

    <div class="container">
      <v-main class="d-none d-sm-flex">
        <div>
          <router-view/>
        </div>
      </v-main>
      <mobile class="d-row d-sm-none"/>
    </div>

  </v-app>
</template>

<script>
import Mobile from "@/views/mobile";

export default {
  name: 'App',

  components: {
    Mobile,
  },
  data: () => ({

  }),
  beforeCreate() {
    if (this.$store.state.token === null) {
      this.$router.push({ name: 'login' })
    }
  },

  methods: {
    playSound (sound) {
      if(sound) {
        var audio = new Audio(sound);
        audio.play();
      }
    },
}

};
</script>
