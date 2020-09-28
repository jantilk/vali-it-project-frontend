<template>
    <div>
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
    </div>
</template>

<script>
import ServiceClient from "@/Services/ServiceClient";

export default {
  name: "autocomplete-client",
  data () {
    return {
      itemsClient: [],
      searchClient: null,
      selectClient: null,
      clientId: null
    }
  },
  computed: {
  },
  watch: {
    searchClient (inputClient) {
      if (this.searchClient == "") {
        this.itemsClient = [];
        this.selectClient = null;
      } else {
        this.clientByName(inputClient);
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
    }
  }
}
</script>