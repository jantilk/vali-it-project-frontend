<template>
  <div>
      <search-device></search-device>
    <div class="row">
    </div>
    <div class="submit-form">
      <div v-if="createNewButton">
        <div v-if="!submitted">
          <div class="form-group">
            <label for="clientName">Client Name</label>
            <input type="text" class="form-control" id="clientName" required v-model="device.client" name="client"/>
          </div>
          <div class="form-group">
            <label for="sn">Serial Number</label>
            <input type="text" class="form-control" id="sn" required v-model="device.sn" name="sn">
          </div>
          <div class="form-group">
            <label for="counter">Counter</label>
            <input type="number" class="form-control" id="counter" required v-model="device.counter" name="counter">
          </div>
          <div class="form-group">
            <label for="productName">Product Name</label>
            <input type="text" class="form-control" id="productName" required v-model="device.product" name="product">
          </div>

          <button @click="createDevice" class="btn btn-success">Create</button>
        </div>
        <div v-else>
          <h4>Device created successfully!</h4>
          <button class="btn btn-success" @click="newDevice">Create another</button>
        </div>
      </div>
      <div v-else>
        <h4>Create a new Device</h4>
        <button class="btn btn-success" @click="createNewDevice">Create</button>
      </div>
      <br>
      <search-device-any></search-device-any>
    </div>
  </div>
</template>

<script>
import ServiceDevice from "@/Services/ServiceDevice";
import SearchDevice from "@/components/search-device";
import SearchDeviceAny from "@/components/search-device-any";

export default {
  name: "device",
  components: {SearchDevice, SearchDeviceAny},
  data() {
    return {
      device: {
        anyParam: null
        // client: "",
        // sn: "",
        // counter: null,
        // product: "",
      },
      submitted: false,
      createNewButton: false,
    };
  },
  mounted() {
    this.device = {}
    this.device.client = this.$route.params.id;
  },
  methods: {
    createDevice() {
      let data = {
        client: this.device.client,
        sn: this.device.sn,
        counter: this.device.counter,
        product: this.device.product,
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
    createNewDevice() {
      this.createNewButton = true;
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