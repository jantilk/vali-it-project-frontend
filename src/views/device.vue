<template>
  <div>
    <search-device-any></search-device-any>
    <search-device></search-device>
    <br>
    <div v-if="createNewButton">
      <div v-if="!submitted">
        <div class="form-group">
          <label for="clientName">Client Name</label>
          <input id="clientName" v-model="device.client" class="form-control" name="client" required type="text"/>
        </div>
        <div class="form-group">
          <label for="sn">Serial Number</label>
          <input id="sn" v-model="device.sn" class="form-control" name="sn" required type="text">
        </div>
        <div class="form-group">
          <label for="counter">Counter</label>
          <input id="counter" v-model="device.counter" class="form-control" name="counter" required type="number">
        </div>
        <div class="form-group">
          <label for="productName">Product Name</label>
          <input id="productName" v-model="device.product" class="form-control" name="product" required type="text" v-on:keyup.enter="createDevice">
        </div>

        <button class="btn btn-success" @click="createDevice">Create</button>
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
    createDevice() {
      let data = {
        client: this.device.client,
        sn: this.device.sn,
        counter: this.device.counter,
        product: this.device.product,
      };
      ServiceDevice.createDevice(data, this.token)
          .then(response => {
            console.log(response.data);
            this.submitted = true;
          })
          .catch(e => {
            console.log(e);
          });
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