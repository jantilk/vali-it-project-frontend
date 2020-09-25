<template>
  <div>

    <input type="text" placeholder="Search by name" v-model="name" v-on:input="clientByName"/>

    <div class="row">
      <div class="col-sm-4">
        <ul>
          <li v-for="client in clients">
            <router-link :to="{ path: '/device', name: 'clientDevice', params: { id: client.name }}">
              ID: {{client.id}}, {{ client.name }}
            </router-link>
          </li>
        </ul>
      </div>

<!--      <div class="col-sm-8">-->
<!--        <ul>-->
<!--          <li v-for="device in devices">-->
<!--            {{device}}-->
<!--          </li>-->
<!--        </ul>-->
<!--      </div>-->

    </div>

  </div>
</template>


<script>
import ServiceClient from "@/Services/ServiceClient";
import ServiceDevice from "@/Services/ServiceDevice";

export default {
  name: "all-clients",
  data() {
    key: null
    return {
      clients: [],
      devices: [],
      name: ""
    };
  },
  methods: {
    clientByName() {
      ServiceClient.clientByName(this.name)
          .then(response => {
            this.clients = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    },
    deviceByClientId(clientId) {
      ServiceDevice.deviceByClientId(clientId)
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