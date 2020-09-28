<template>
    <v-container>
      <autocomplete-client/>
      <autocomplete-device/>
      <br/>
      <autocomplete-technician/>
    </v-container>
</template>

<script>
import AutocompleteTechnician from "@/mobile/autocomplete-technician";
import AutocompleteDevice from "@/mobile/autocomplete-device";
import AutocompleteClient from "@/mobile/autocomplete-client";

export default {
  name: "autocomplete-wo",
  components: {AutocompleteClient, AutocompleteDevice, AutocompleteTechnician},
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>