<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by any parameter"
               v-model="anyParam"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button" @click="searchAnyParam">Search</button>
        </div>
      </div>
    </div>

    <div class="col-md-6">
      <h4>Device List</h4>
      <ul class="list-group">
        <li class="list-group-item" v-for="device in devices">
<!--          {{device.id}}-->
<!--          <br>-->
          Client ID:
          {{device.clientId}}
          <br>
          Product ID:
          {{device.productId}}
          <br>
          S/N:
          {{device.serialNumber}}
          <br>
          Counter:
          {{device.counter}}
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
import ServiceDevice from "@/Services/ServiceDevice";

export default {
  name: "devices",
  data() {
    return {
      devices: [],
      anyParam: ""
    };
  },
  methods: {searchAnyParam() {
      ServiceDevice.searchAnyParam(this.anyParam)
          .then(response => {
            this.devices = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    }
  },
};
</script>

<style scoped>

</style>