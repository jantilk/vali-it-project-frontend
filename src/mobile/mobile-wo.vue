<template>
  <v-toolbar dark color="teal">
    {{select}}
    <v-autocomplete
        v-model="select"
        :items="items"
        :item-text="getName"
        :item-value="getId"
        :search-input.sync="search"
        cache-items
        class="mx-4"
        flat
        hide-no-data
        hide-details
        label="Find Client"
        solo-inverted
    ></v-autocomplete>
  </v-toolbar>
</template>

<script>
import ServiceClient from "@/Services/ServiceClient";

export default {
  data () {
    return {
      loading: false,
      items: [],
      search: null,
      select: null,
    }
  },
  watch: {
    search (value) {
      if (value && value !== this.select) {
        this.querySelections(value);
      }
    }
  },
  methods: {
    querySelections (value) {
      ServiceClient.clientByName(value)
          .then(response => {
            this.items = response.data;
          })
          .catch(e => {console.log(e);});
      console.log(this.items);
    },
    getName: function(el){
      return el.name;
    },
    getId: function(el){
      return el.id;
    }
  }
}
</script>