<template>
    <div>
        <v-row>
          <v-autocomplete
              v-model="selectDevice"
              :items="itemsDevice"
              :item-text="getDeviceName"
              :item-value="getDevice"
              :search-input.sync="searchDevice"
              class="mx-4"
              flat
              hide-no-data
              hide-details
              label="Find Device"
              solo-inverted
          ></v-autocomplete>
        </v-row>

    </div>
</template>

<script>
import ServiceDevice from "@/Services/ServiceDevice";
import ServiceClient from "@/Services/ServiceClient";

export default {
  name: "autocomplete-device",

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

  mounted() {
      ServiceDevice.searchDeviceNamelike('')
          .then(response => {
            this.itemsDevice = response.data
            // filters only chosen client's devices
            console.log(this.itemsClient);
            if(this.searchClient){
              this.itemsDevice = this.itemsDevice.filter(item => (item.clientId == this.clientId))
            } else {
              this.selectClient = this.selectDevice.clientId;
            }
          })
          .catch(e => {console.log(e);});
      console.log(this.itemsDevice);
  },

  watch: {
    searchDevice (queryString) {
      if (this.searchDevice == "") {
        // this.itemsDevice = [];
        this.selectDevice = null;
      } else {
        this.searchDeviceNamelike(queryString);
      }
    }
  },
  methods: {
    searchDeviceNamelike (queryString) {
      ServiceDevice.searchDeviceNamelike(queryString)
          .then(response => {
            this.itemsDevice = response.data
            // filters only chosen client's devices
            console.log(this.itemsClient);
            if(this.searchClient){
              this.itemsDevice = this.itemsDevice.filter(item => (item.clientId == this.clientId))
            } else {
              this.selectClient = this.selectDevice.clientId;
            }
          })
          .catch(e => {console.log(e);});
      console.log(this.itemsDevice);
    },
    getDeviceName: function(el){
      return el.name;
    },
    getDevice: function(el){
      this.deviceId = el.id;
      return el;
    }
  }
}
</script>