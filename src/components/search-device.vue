<template>
  <div>

    <div class="row">
      <div class="col-md-4">
        <input id="" type="text" placeholder="Search by client" v-model="client" @input="searchDevice"/>
      </div>
      <div class="col-md-4">
        <input type="text" placeholder="Search by product" v-model="product" @input="searchDevice"/>
      </div>
      <div class="col-md-4">
        <input type="text" placeholder="Search by serialNumber" v-model="serialNumber" @input="searchDevice"/>
      </div>
    </div>

    <br>
    <div class="row">
      <div class="col-md-3">Client</div>
      <div class="col-md-3">Product</div>
      <div class="col-md-3">Serial Number</div>
      <div class="col-md-3">Counter</div>
    </div>

    <div>
      <ul class="list-group">
        <li class="list-group-item" v-for="device in devices">
          <router-link :to="{ path: '/workOrder', name: 'deviceWorkOrder', params: { id: device.deviceId, product: device.productId }}">
            <div class="row">
              <div class="col-md-3">{{device.clientName}}</div>
              <div class="col-md-3">{{device.productName}}</div>
              <div class="col-md-3">{{device.serialNumber}}</div>
              <div class="col-md-3">{{device.counter}}</div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>

  </div>
</template>


<script>
import ServiceClient from "@/Services/ServiceClient";
import ServiceDevice from "@/Services/ServiceDevice";
import client from "@/views/client";

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