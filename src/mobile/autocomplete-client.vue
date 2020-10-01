<template>
  <div>
    <v-row>
      <v-autocomplete
          v-model="selectClient"
          :items="itemsClient"
          :item-text="getClientName"
          :item-value="getClientId"
          :search-input.sync="searchClient"
          class="mx-4"
          flat
          hide-no-data
          hide-details
          label="Find Client"
          solo-inverted
      ></v-autocomplete>
    </v-row>
  </div>
</template>

<script>
import ServiceClient from "@/Services/ServiceClient";

export default {
  name: "autocomplete-client",
  computed: {
    selectClient: {
      get() {
        return this.$store.state.selectClient;
      },
      set(newValue) {
        this.$store.commit("updateSelectClient", newValue);
      }
    },
    itemsClient: {
      get() {
        return this.$store.state.itemsClient;
      },
      set(newValue) {
        this.$store.commit("updateItemsClient", newValue);
      }
    },
    searchClient: {
      get() {
        return this.$store.state.searchClient;
      },
      set(newValue) {
        this.$store.commit("updateSearchClient", newValue);
      }
    },
    selectDevice: {
      get() {
        return this.$store.state.selectDevice;
      },
      set(newValue) {
        this.$store.commit("updateSelectDevice", newValue);
      }
    },
    itemsDevice: {
      get() {
        return this.$store.state.itemsDevice;
      },
      set(newValue) {
        this.$store.commit("updateItemsDevice", newValue);
      }
    },
    searchDevice: {
      get() {
        return this.$store.state.searchDevice;
      },
      set(newValue) {
        this.$store.commit("updateSearchDevice", newValue);
      }
    },
    deviceId: {
      get() {
        return this.$store.state.deviceId;
      },
      set(newValue) {
        this.$store.commit("updateDeviceId", newValue);
      }
    },
    clientId: {
      get() {
        return this.$store.state.clientId;
      },
      set(newValue) {
        this.$store.commit("updateClientId", newValue);
      }
    }
  },

  watch: {
    searchClient (queryString) {
      if (this.searchClient == "") {
        this.itemsDevice = [];
        this.selectDevice = null;
      } else {
        this.searchClientWatcher(queryString);
      }
    }
  },

  methods: {
    // select client logic
    searchClientWatcher (value) {
      ServiceClient.findClientByName(value)
          .then(response => {
            this.itemsClient = response.data;

          })
          .catch(e => {console.log(e);});
      console.log(this.itemsClient);
    },
    getClientName: function(el){
      return el.name;
    },
    getClientId: function(el){
      this.clientId = el.id;
      return el.id;
    }
  }
}
</script>