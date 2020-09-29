<template>
  <v-app>
    <v-app-bar app>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          width="40"
        />
        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-light.png"
          width="100"
        />
        <div class="d-none d-sm-flex" style="margin-left: 20px">
          <router-link to="/client">Client</router-link> |
          <router-link to="/device">Device</router-link> |
          <router-link to="/workOrder">Work order</router-link> |
          <router-link to="/product">Product</router-link> |
          <router-link to="/consumable">Consumable</router-link>
        </div>

      </div>
    </v-app-bar>

    <div class="container">
      <v-main>
        <mobile class="d-row d-sm-none"/>
        <div class="d-none d-sm-row">
          <router-view/>
        </div>
      </v-main>
    </div>

  </v-app>
</template>

<script>
import Mobile from "@/views/mobile";

export default {
  name: 'App',

  components: {
    Mobile
  },

  data: () => ({
    //
  }),
};
</script>
