<template>
    <v-container>
      <v-toolbar color="teal" dark>
        {{selectClient}}
        <v-row>
          <v-autocomplete
              v-model="selectClient"
              :items="itemsClient"
              :item-text="getName"
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
      </v-toolbar>
      <v-toolbar color="teal" dark>
        {{selectDevice}}
        <v-row>
          <v-autocomplete
              v-model="selectDevice"
              :items="itemsDevice"
              :item-text="getDeviceName"
              :item-value="getDeviceId"
              :search-input.sync="searchDevice"
              class="mx-4"
              flat
              hide-no-data
              hide-details
              label="Find Device"
              solo-inverted
          ></v-autocomplete>
        </v-row>
      </v-toolbar>

    </v-container>
</template>

<script>
import ServiceClient from "@/Services/ServiceClient";
import ServiceDevice from "@/Services/ServiceDevice";
import client from "@/views/client";

export default {
  name: "autocomplete-wo",
  data () {
    return {
      itemsClient: [],
      itemsDevice: [],
      searchClient: null,
      searchDevice: null,
      selectClient: null,
      selectDevice: null,
      clientId: null
    }
  },
  watch: {
    searchClient (inputClient) {
      if (this.searchClient == "") {
        this.itemsClient = [];
        this.selectClient = null;
      } else {
        this.clientByName(inputClient);
      }
    },
    searchDevice (inputDevice) {
      if (this.searchDevice == "") {
        this.itemsDevice = [];
        this.selectDevice = null;
      } else {
        this.deviceByDeviceName(inputDevice);
      }
    }
  },
  methods: {
    // select client logic
    clientByName (value) {
      ServiceClient.clientByName(value)
          .then(response => {
            this.itemsClient = response.data;
          })
          .catch(e => {console.log(e);});
      console.log(this.itemsClient);
    },
    getName: function(el){
      return el.name;
    },
    getClientId: function(el){
      this.clientId = el.id;
      return el.id;
    },

    // select device logic
    deviceByDeviceName (inputDevice) {
        ServiceDevice.deviceByDeviceName(inputDevice)
            .then(response => {
              this.itemsDevice = response.data;
              this.itemsDevice = this.itemsDevice.filter(item => (item.clientId == this.clientId))
            })
            .catch(e => {console.log(e);});
        console.log(this.itemsDevice);
    },
    getDeviceName: function(el){
      return el.deviceName;
    },
    getDeviceId: function(el){
      return el.deviceId;
    }
  }
}
</script>