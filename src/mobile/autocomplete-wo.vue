<template>
    <v-container>

      <br/>
      <autocomplete-client/>
      <autocomplete-device/>

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

    </v-container>
</template>

<script>
import AutocompleteTechnician from "@/mobile/autocomplete-technician";
import AutocompleteDevice from "@/mobile/autocomplete-device";
import AutocompleteClient from "@/mobile/autocomplete-client";
import ServiceDevice from "@/Services/ServiceDevice";
import ServiceClient from "@/Services/ServiceClient";
import ServiceTechnician from "@/Services/ServiceTechnician";
import ServiceWorkOrder from "@/Services/ServiceWorkOrder";

export default {
  name: "autocomplete-wo",
  components: {AutocompleteClient, AutocompleteDevice, AutocompleteTechnician},

  computed: {
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
    selectTechnician: {
      get() {
        return this.$store.state.selectTechnician;
      },
      set(newValue) {
        this.$store.commit("updateSelectTechnician", newValue);
      }
    }
  },

  methods: {
    // create WO
    createMobileWO() {
      let data = {
        jobDescription: this.jobDescription,
        deviceId: this.deviceId,
        technicianId: this.selectTechnician.id,
        productId: this.selectDevice.productId,
        status: this.status
      };

      ServiceWorkOrder.createMobileWO(data);
    }
  }
}
</script>