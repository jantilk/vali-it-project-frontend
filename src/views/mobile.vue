<template>
  <div>
    <div v-if="showCreatePage">
      <autocomplete-wo></autocomplete-wo>
    </div>
    <div v-if="showWoListPage">
      <wo-mobilelist/>
    </div>
  </div>
</template>

<script>
import AutocompleteWo from "@/mobile/autocomplete-wo";
import WoMobilelist from "@/mobile/wo-mobilelist";

export default {
  name: "mobile",
  components: {WoMobilelist, AutocompleteWo},
  computed: {
    showCreatePage: {
      get() {
        return this.$store.state.showCreatePage;
      },
      set(newValue) {
        this.$store.commit("updateShowCreatePage", newValue);
      }
    },
    showWoListPage: {
      get() {
        return this.$store.state.showWoListPage;
      },
      set(newValue) {
        this.$store.commit("updateShowWoListPage", newValue);
      }
    },
  },
}
</script>

<style scoped>

</style>