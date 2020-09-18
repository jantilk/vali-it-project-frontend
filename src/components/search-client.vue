<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by name"
               v-model="name" v-on:input="findByName"/>
      </div>
    </div>

    <div class="col-md-6">
      <h4>Clients List</h4>
      <ul class="list-group">
        <li class="list-group-item" v-for="client in clients">
          <a href="#" v-on:click="deviceByClient(client.name)">{{ client.name }}</a>
        </li>
      </ul>
    </div>

    <div>
      Device List Here
      <ul>
        <li v-for="device in devices">
          {{device}}
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
import FrontDataService from "@/Services/FrontDataService";
import ServiceDevice from "@/Services/ServiceDevice";

export default {
  name: "all-clients",
  data() {
    return {
      clients: [],
      devices: [],
      name: null
    };
  },
  methods: {
    findByName() {
      FrontDataService.findByName(this.name)
          .then(response => {
            this.clients = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    },
    deviceByClient() {
      ServiceDevice.deviceByClient(this.name)
          .then(response => {
            this.devices = response.data;
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