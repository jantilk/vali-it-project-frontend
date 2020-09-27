<template>
    <div>
      <v-toolbar color="teal" dark>
        {{selectTechnician}}
        <v-row>
          <v-autocomplete
              v-model="selectTechnician"
              :items="itemsTechnician"
              :item-text="getTechnicianName"
              :item-value="getTechnicianId"
              :search-input.sync="searchTechnician"
              class="mx-4"
              flat
              hide-no-data
              hide-details
              label="Find Technician"
              solo-inverted
          ></v-autocomplete>
        </v-row>
      </v-toolbar>

    </div>
</template>

<script>
import ServiceTechnician from "@/Services/ServiceTechnician";

export default {
  name: "autocomplete-technician",
  data () {
    return {
      itemsTechnician: [],
      searchTechnician: null,
      selectTechnician: null
    }
  },
  watch: {
    searchTechnician (queryString) {
      if (this.searchTechnician == "") {
        this.itemsTechnician = [];
        this.selectTechnician = null;
      } else {
        this.searchTechnicianNamelike(queryString);
      }
    }
  },
  methods: {
    // select client logic
    searchTechnicianNamelike (queryString) {
      ServiceTechnician.searchTechnicianNamelike(queryString)
          .then(response => {
            this.itemsTechnician = response.data;
          })
          .catch(e => {console.log(e);});
      console.log(this.itemsTechnician);
    },
    getTechnicianName: function(el){
      return el.name;
    },
    getTechnicianId: function(el){
      return el.id;
    },
  }
}
</script>