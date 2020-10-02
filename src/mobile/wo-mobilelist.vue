<template>
  <v-container>
    <v-row>
      <v-btn fab dark color="teal" @click="showCreatePageF">
        <v-icon dark>mdi-plus</v-icon>
      </v-btn>
    </v-row>

    <v-row>
      <v-card v-for="wo in allWo" class="ma-3 pa-3 col-12" :color=wo.color>
        <v-card-title>{{wo.clientName}}</v-card-title>
        <v-card-subtitle class="subtitle-1">{{wo.deviceName}}</v-card-subtitle>
        <v-card-text>{{wo.jobDescription}}</v-card-text>
      </v-card>
    </v-row>

  </v-container>
</template>

<script>
import ServiceWorkOrder from "@/Services/ServiceWorkOrder";
import AutocompleteTechnician from "@/mobile/autocomplete-technician";

export default {
  name: "wo-mobilelist",
  data: () => ({
    dialog: false,
  }),
  components: {AutocompleteTechnician},
  computed: {
    token: {
      get() {
        return this.$store.state.token;
      },
      set(newValue) {
        this.$store.commit("updateToken", newValue);
      }
    },
    allWo: {
      get() {
        return this.$store.state.allWo;
      },
      set(newValue) {
        this.$store.commit("updateAllWo", newValue);
      }
    },
    showCreatePage: {
      get() {
        return this.$store.state.showCreatePage;
      },
      set(newValue) {
        this.$store.commit("updateShowCreatePage", newValue);
      }
    },
    showWoListPage: {
      get() {
        return this.$store.state.showWoListPage;
      },
      set(newValue) {
        this.$store.commit("updateShowWoListPage", newValue);
      }
    },
    selectTechnician: {
      get() {
        return this.$store.state.selectTechnician;
      },
      set(newValue) {
        this.$store.commit("updateSelectTechnician", newValue);
      }
    },
    itemsTechnician: {
      get() {
        return this.$store.state.itemsTechnician;
      },
      set(newValue) {
        this.$store.commit("updateItemsTechnician", newValue);
      }
    },
    searchTechnician: {
      get() {
        return this.$store.state.searchTechnician;
      },
      set(newValue) {
        this.$store.commit("updateSearchTechnician", newValue);
      }
    }
  },

  mounted() {
    ServiceWorkOrder.findAllWoMobile(this.token)
        .then(response => {
          this.allWo = response.data;
        })
        .catch(e => {console.log(e);});
    console.log(this.allWo);
  },

  methods: {
    showCreatePageF () {
      this.showCreatePage = !this.showCreatePage;
      this.showWoListPage = !this.showWoListPage;
    }
  }
}
</script>

<style scoped>

</style>