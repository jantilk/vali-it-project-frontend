<template>
  <div>
    <v-container>
      <v-row>
        <autocomplete-wo></autocomplete-wo>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import AutocompleteWo from "@/mobile/autocomplete-wo";

export default {
  name: "mobile",
  components: {AutocompleteWo}
}
</script>

<style scoped>

</style>