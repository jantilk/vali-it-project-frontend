<template>
    <div>
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

    </div>
</template>

<script>
import ServiceDevice from "@/Services/ServiceDevice";

export default {
  name: "autocomplete-device",
  data () {
    return {
      itemsDevice: [],
      searchDevice: null,
      selectDevice: null
    }
  },
  watch: {
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
    searchDeviceNamelike (queryString) {
      ServiceDevice.searchDeviceNamelike(queryString)
          .then(response => {
            this.itemsDevice = response.data;
          })
          .catch(e => {console.log(e);});
      console.log(this.itemsDevice);
    },
    getDeviceName: function(el){
      return el.deviceName;
    },
    getDeviceId: function(el){
      return el.deviceId;
    },
  }
}
// if (this.searchClient == null) {
//   //todo kas võib nii tühjaks jätta või peab returnima?
// } else {
//   this.itemsDevice = this.itemsDevice.filter(item => (item.clientId == this.clientId))
// }
</script>