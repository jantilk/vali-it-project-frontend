<!--<template>-->
<!--  <div>-->
<!--    <h2>device</h2>-->
<!--  </div>-->
<!--</template>-->

<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="client_id">Client ID</label>
        <input type="number" class="form-control" id="client_id" required v-model="device.client_id" name="ClientID"/>
      </div>
      <div class="form-group">
        <label for="sn">Serial Number</label>
        <input type="text" class="form-control" id="sn" required v-model="device.sn" name="SerialNumber">
      </div>
      <div class="form-group">
        <label for="counter">Counter</label>
        <input type="number" class="form-control" id="counter" required v-model="device.counter" name="Counter">
      </div>
      <div class="form-group">
        <label for="product_id">Product ID</label>
        <input type="number" class="form-control" id="product_id" required v-model="device.product_id" name="ProductID">
      </div>

      <button @click="createDevice" class="btn btn-success">Create</button>
    </div>

    <div v-else>
      <h4>Device created successfully!</h4>
      <button class="btn btn-success" @click="newDevice">Create another</button>
    </div>
  </div>
</template>

<script>
import ServiceDevice from "@/Services/ServiceDevice";

export default {
  name: "create-device",
  data() {
    return {
      device: {
        id: null,
        client_id: null,
        sn: "",
        counter: null,
        product_id: null,
      },
      submitted: false
    };
  },
  methods: {
    createDevice() {
      let data = {
        // id: null,
        client_id: this.device.client_id,
        sn: this.device.sn,
        counter: this.device.counter,
        product_id: this.product_id,
      };

      ServiceDevice.createDevice(data)
          .then(response => {
          //   this.client.id = response.data.id;
          //   console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    },

    newDevice() {
      this.submitted = false;
      this.device = {};
    }
  }
};
</script>

<style scoped>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>