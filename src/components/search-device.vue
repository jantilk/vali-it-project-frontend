<template>
  <div>

    <div class="row">
      <div class="col-md-4">
        <input id="" v-model="client" placeholder="Search by client" type="text" @input="searchDevice"/>
      </div>
      <div class="col-md-4">
        <input v-model="product" placeholder="Search by product" type="text" @input="searchDevice"/>
      </div>
      <div class="col-md-4">
        <input v-model="serialNumber" placeholder="Search by serialNumber" type="text" @input="searchDevice"/>
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
              :to="{ path: '/workOrder', name: 'deviceWorkOrder', params: { deviceName: device.name, product: device.productName }}">
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