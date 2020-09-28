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

    <ul class="list-group">
      <div v-if="client || product || serialNumber" class="row">
        <div class="col-md-4">Client</div>
        <div class="col-md-4">Device Name</div>
        <div class="col-md-4">Counter</div>
      </div>
      <li v-for="device in devices" class="list-group-item">
        <router-link
            :to="{ path: '/workOrder', name: 'deviceWorkOrder', params: { id: device.name, product: device.productName }}">
          <div class="row">
            <div class="col-md-4">{{ device.clientName }}</div>
            <div class="col-md-4">{{ device.name }}</div>
            <div class="col-md-4">{{ device.counter }}</div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>


<script>
import ServiceClient from "@/Services/ServiceClient";

export default {
  name: "search-device",
  data() {
    return {
      devices: [],
      client: "",
      product: "",
      serialNumber: ""
    };
  },
  methods: {
    searchDevice() {
      if (this.client == "" && this.product == "" && this.serialNumber == "") {
        this.devices = [];
      } else {
        ServiceClient.searchDevice(this.client, this.product, this.serialNumber)
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