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

export default {
  name: "autocomplete-device",
  computed: {
    token: {
      get() {
        return this.$store.state.token;
      },
      set(newValue) {
        this.$store.commit("updateToken", newValue);
      }
    },
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
    deviceFilterByClient: {
      get() {
        return this.$store.state.deviceFilterByClient;
      },
      set(newValue) {
        this.$store.commit("updateDeviceFilterByClient", newValue);
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
  },

  watch: {
    searchDevice (queryString) {
      if (this.searchDevice == "") {
        // this.selectClient = null;
      } else {
        this.searchDeviceWatcher(queryString);
      }
    },
    selectClient () {
        this.searchDeviceWatcher(null);
    }
  },

  methods: {
    searchDeviceWatcher (queryString) {
      ServiceDevice.searchDeviceNamelike(queryString, this.token)
          .then(response => {
            this.itemsDevice = response.data;

            if(this.selectClient){
              this.itemsDevice = this.itemsDevice.filter(item => (item.clientId == this.selectClient))
            } else if (this.selectDevice) {
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