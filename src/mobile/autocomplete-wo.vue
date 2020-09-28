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

      <br/>
      <autocomplete-technician/>
    </v-container>
</template>

<script>
import AutocompleteTechnician from "@/mobile/autocomplete-technician";
import AutocompleteDevice from "@/mobile/autocomplete-device";
import AutocompleteClient from "@/mobile/autocomplete-client";
import ServiceDevice from "@/Services/ServiceDevice";
import ServiceClient from "@/Services/ServiceClient";

export default {
  name: "autocomplete-wo",
  components: {AutocompleteClient, AutocompleteDevice, AutocompleteTechnician},
  data () {
    return {
      itemsClient: [],
      searchClient: null,
      selectClient: null,
      clientId: null,

      itemsDevice: [],
      searchDevice: null,
      selectDevice: null,
      // deviceName: null
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
    searchDevice (queryString) {
      if (this.searchDevice == "") {
        this.itemsDevice = [];
        this.selectDevice = null;
      } else {
        this.searchDeviceNamelike(queryString);
      }
    }
  },
  methods: {
    // select client logic
    clientByName (value) {
      ServiceClient.clientByName(value)
          .then(response => {
            this.itemsClient = response.data;
            // if (this.searchClient == null && this.selectDevice != null) {
            //   this.selectClient ==
            // }
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

    // select client logic
    searchDeviceNamelike (queryString) {
      ServiceDevice.searchDeviceNamelike(queryString)
          .then(response => {
            this.itemsDevice = response.data
            // filters only chosen client's devices
            if (this.searchClient == null) {
              //todo kas võib nii tühjaks jätta või peab returnima?
            } else {
              this.itemsDevice = this.itemsDevice.filter(item => (item.clientId == this.clientId))
            }
          })
          .catch(e => {console.log(e);});
      console.log(this.itemsDevice);
    },
    getDeviceName: function(el){
      return el.name;
    },
    getDeviceId: function(el){
      // this.clientId = el.id;
      return el.id;
    }
  }
}
</script>