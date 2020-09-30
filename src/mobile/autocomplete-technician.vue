<template>
  <div>
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
  </div>
</template>

<script>
import ServiceTechnician from "@/Services/ServiceTechnician";

export default {
  name: "autocomplete-technician",

  computed: {
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
    ServiceTechnician.searchTechnicianNamelike('')
        .then(response => {
          this.itemsTechnician = response.data;
        })
        .catch(e => {console.log(e);});
    console.log(this.itemsTechnician);
  },

  watch: {
    searchTechnician (queryString) {
      if (this.searchTechnician == "") {
        // this.itemsTechnician = [];
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
    getTechnicianName: function (el) {
      return el.name;
    },
    getTechnicianId: function (el) {
      return el;
    },
  }
}
</script>