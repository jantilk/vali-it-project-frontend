<template>
  <div>

    <div class="row">
      <input type="text" placeholder="Search by name" v-model="name" @input="devicesByClientName"/>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <ul>
          <li v-for="device in devices">
            <a href="#">
              Client:{{device.clientName}} ***
              Product:{{device.productName}} ***
              SN:{{device.serialNumber}} ***
              Counter:{{device.counter}}</a>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>


<script>
import ServiceClient from "@/Services/ServiceClient";
import ServiceDevice from "@/Services/ServiceDevice";

export default {
  name: "device-filter",
  data() {
    return {
      devices: []
    };
  },
  methods: {
    devicesByClientName() {
      ServiceClient.devicesByClientName(this.name)
          .then(response => {
            this.devices = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    }
  }
};
</script>

<style scoped>

</style>