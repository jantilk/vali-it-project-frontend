<template>
  <v-container>
    <v-row>
      <v-btn fab dark color="teal" @click="showCreatePageF">
        <v-icon dark>mdi-plus</v-icon>
      </v-btn>
    </v-row>

    <v-row>
      <v-card v-for="wo in allWo" class="ma-3 pa-3 col-12">
        <v-card-text>
          <div class="font-weight-bold">{{wo.clientName}}</div>
          <div class="subtitle-1">{{wo.deviceName}}</div>
          <div class="caption">{{wo.jobDescription}}</div>
        </v-card-text>
      </v-card>
    </v-row>

  </v-container>
</template>

<script>
import ServiceWorkOrder from "@/Services/ServiceWorkOrder";

export default {
  name: "wo-mobilelist",
  computed: {
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
    }
  },

  mounted() {
    ServiceWorkOrder.findAllWo()
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