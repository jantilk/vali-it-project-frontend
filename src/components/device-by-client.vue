<template>
  <div>

    <div class="row">
      <div class="col-md-4">
        <input type="text" placeholder="Search by client" v-model="client" @input="devicesByClientName"/>
      </div>
      <div class="col-md-4">
        <input type="text" placeholder="Search by product" v-model="product" @input="devicesByClientName"/>
      </div>
      <div class="col-md-4">
        <input type="text" placeholder="Search by serialNumber" v-model="serialNumber" @input="devicesByClientName"/>
      </div>
    </div>


    <div class="row">
      <div class="col-md-12">
        <ul>
          <li v-for="device in devices">
            <a href="#">
              Client:{{device.clientName}}
              <br>
              Product:{{device.productName}}
              <br>
<!--              SN:{{device.serialNumber}} ***-->
              <br>
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
  name: "device-by-client",
  data() {
    return {
      devices: [],
      client: "",
      product: "",
      serialNumber: ""
    };
  },
  methods: {
    devicesByClientName() {
      ServiceClient.devicesByClientName(this.client, this.product, this.serialNumber)
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