<template>
  <div>
    <div class="row">
      <div class="col-md-4">
        <input v-model="client" class="form-control" placeholder="Search by Client" @input="searchDevice"/>
      </div>
      <div class="col-md-4">
        <input v-model="product" class="form-control" placeholder="Search by Product" type="text"
               @input="searchDevice"/>
      </div>
      <div class="col-md-4">
        <input v-model="serialNumber" class="form-control" placeholder="Search by S/N" type="text"
               @input="searchDevice"/>
      </div>
    </div>

    <div>
      <ul class="list-group">
        <div class="row" v-if="client || product || serialNumber" >
          <div class="col-md-4">Client</div>
          <div class="col-md-4">Device Name</div>
          <div class="col-md-4">Counter</div>
        </div>
        <li v-for="device in devices" class="list-group-item">
          <router-link
              :to="{ path: '/workOrder', name: 'deviceWorkOrder', params: {deviceName: device.name}}">
            <div class="row">
              <div class="col-md-4">{{ device.clientName }}</div>
              <div class="col-md-4">{{ device.name }}</div>
              <div class="col-md-4">{{ device.counter }}</div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
import ServiceDevice from "@/Services/ServiceDevice";

export default {
  name: "search-device",
  data() {
    return {
      devices: [],
      client: "",
      product: "",
      serialNumber: "",
    };
  },
  computed: {
    token: {
      get() {
        return this.$store.state.token;
      },
      set(newValue) {
        this.$store.commit("updateToken", newValue);
      }
    },
  },
  methods: {
    searchDevice() {
      if (this.client == "" && this.product == "" && this.serialNumber == "") {
        this.devices = [];
      } else {
        ServiceDevice.searchDeviceMultilike(this.client, this.product, this.serialNumber, this.token)
            .then(response => {
              this.devices = response.data;
              console.log(response.data);
            })
            .catch(e => {
              console.log(e);
            });
      }
    }
  }
};
</script>

<style scoped>

</style>