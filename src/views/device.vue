<!--<template>-->
<!--  <div>-->
<!--    <h2>device</h2>-->
<!--  </div>-->
<!--</template>-->

<template>
  <div>
    <div class="row">
      <device-by-client></device-by-client>
    </div>
<!--    <div class="submit-form">-->
<!--      <div v-if="!submitted">-->
<!--        <div class="form-group">-->
<!--          <label for="client_id">Client ID</label>-->
<!--          <input type="number" class="form-control" id="client_id" required v-model="device.clientId" name="ClientID"/>-->
<!--        </div>-->
<!--        <div class="form-group">-->
<!--          <label for="sn">Serial Number</label>-->
<!--          <input type="text" class="form-control" id="sn" required v-model="device.serialNumber" name="SerialNumber">-->
<!--        </div>-->
<!--        <div class="form-group">-->
<!--          <label for="counter">Counter</label>-->
<!--          <input type="number" class="form-control" id="counter" required v-model="device.counter" name="Counter">-->
<!--        </div>-->
<!--        <div class="form-group">-->
<!--          <label for="product_id">Product ID</label>-->
<!--          <input type="number" class="form-control" id="product_id" required v-model="device.productId" name="ProductID">-->
<!--        </div>-->
<!--  -->
<!--        <button @click="createDevice" class="btn btn-success">Create</button>-->
<!--      </div>-->
<!--  -->
<!--      <div v-else>-->
<!--        <h4>Device created successfully!</h4>-->
<!--        <button class="btn btn-success" @click="newDevice">Create another</button>-->
<!--      </div>-->
<!--      <br>-->
<!--      <search-device></search-device>-->
<!--    </div>-->
  </div>
</template>

<script>
import ServiceDevice from "@/Services/ServiceDevice";
import SearchDevice from "@/components/search-device";
import DeviceFilter from "@/components/device-by-client";
import ClientFilter from "@/components/device-by-product";
import DeviceByProduct from "@/components/device-by-product";
import DeviceByClient from "@/components/device-by-client";

export default {
  name: "device",
  components: {DeviceByClient, DeviceByProduct, ClientFilter, DeviceFilter, SearchDevice},
  data() {
    return {
      device: {
        anyParam: null
        // clientId: null,
        // serialNumber: "",
        // counter: null,
        // productId: null,
      },
      submitted: false
    };
  },
  methods: {
    createDevice() {
      let data = {
        // id: null,
        clientId: this.device.clientId,
        serialNumber: this.device.serialNumber,
        counter: this.device.counter,
        productId: this.device.productId,
      };
      ServiceDevice.createDevice(data)
          .then(this.submitted = true)
          .then(response => console.log(response.data))
          // .then(response => {
          //   // this.client.id = response.data.id;
          //   // console.log(response.data);
          // })
          .catch(e => {console.log(e);});
    },
    newDevice() {
      this.submitted = false;
      this.device = {};
    },
  }
};
</script>

<style scoped>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>