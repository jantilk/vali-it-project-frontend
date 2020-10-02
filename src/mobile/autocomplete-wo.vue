<template>
    <div>

      <br/>
      <autocomplete-client/>

      <br/>
      <autocomplete-device/>

      <br/>
      <br/>
      <div>
        <input type="text" class="form-control" placeholder="Add Job Description" v-model="jobDescription">
      </div>

      <br/>
      <autocomplete-technician/>

      <br/>
      <div>
        <label for="status">Work order completed</label>
        <input align="left" type="checkbox" id="status" required v-model="status"
               name="status"/>
      </div>

      <br/>
      <button class="btn btn-success float-right" @click="createMobileWO">Create</button>
      <button class="btn btn-danger float-left" @click="showCreatePageF">Cancel</button>

    </div>
</template>

<script>
import AutocompleteTechnician from "@/mobile/autocomplete-technician";
import AutocompleteDevice from "@/mobile/autocomplete-device";
import AutocompleteClient from "@/mobile/autocomplete-client";
import ServiceWorkOrder from "@/Services/ServiceWorkOrder";

export default {
  name: "autocomplete-wo",
  components: {AutocompleteClient, AutocompleteDevice, AutocompleteTechnician},

  computed: {
    token: {
      get() {
        return this.$store.state.token;
      },
      set(newValue) {
        this.$store.commit("updateToken", newValue);
      }
    },
    jobDescription: {
      get() {
        return this.$store.state.jobDescription;
      },
      set(newValue) {
        this.$store.commit("updateJobDescription", newValue);
      }
    },
    deviceId: {
      get() {
        return this.$store.state.deviceId;
      },
      set(newValue) {
        this.$store.commit("updateDeviceId", newValue);
      }
    },
    technicianId: {
      get() {
        return this.$store.state.technicianId;
      },
      set(newValue) {
        this.$store.commit("updateTechnicianId", newValue);
      }
    },
    productId: {
      get() {
        return this.$store.state.productId;
      },
      set(newValue) {
        this.$store.commit("updateProductId", newValue);
      }
    },
    status: {
      get() {
        return this.$store.state.status;
      },
      set(newValue) {
        this.$store.commit("updateStatus", newValue);
      }
    },
    selectDevice: {
      get() {
        return this.$store.state.selectDevice;
      },
      set(newValue) {
        this.$store.commit("updateSelectDevice", newValue);
      }
    },
    itemsDevice: {
      get() {
        return this.$store.state.itemsDevice;
      },
      set(newValue) {
        this.$store.commit("updateItemsDevice", newValue);
      }
    },
    itemsClient: {
      get() {
        return this.$store.state.itemsClient;
      },
      set(newValue) {
        this.$store.commit("updateItemsClient", newValue);
      }
    },

    selectClient: {
      get() {
        return this.$store.state.selectClient;
      },
      set(newValue) {
        this.$store.commit("updateSelectClient", newValue);
      }
    },
    searchClient: {
      get() {
        return this.$store.state.searchClient;
      },
      set(newValue) {
        this.$store.commit("updateSearchClient", newValue);
      }
    },

    selectTechnician: {
      get() {
        return this.$store.state.selectTechnician;
      },
      set(newValue) {
        this.$store.commit("updateSelectTechnician", newValue);
      }
    },

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
    }
  },

  methods: {
    showCreatePageF () {
      this.showCreatePage = !this.showCreatePage;
      this.showWoListPage = !this.showWoListPage;
    },

    createMobileWO() {
      let data = {
        jobDescription: this.jobDescription,
        deviceId: this.deviceId,
        technicianId: this.selectTechnician.id,
        productId: this.selectDevice.productId,
        status: this.status
      };

      this.showCreatePage = !this.showCreatePage;
      this.showWoListPage = !this.showWoListPage;
      ServiceWorkOrder.createMobileWO(data, this.token);
    }
  }
}
</script>

<style scoped>

</style>