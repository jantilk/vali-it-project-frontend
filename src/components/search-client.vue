<template>
  <div>
    <input v-model="name" class="form-control" placeholder="Search by name" type="text" v-on:input="searchClientByName"/>
    <div>
      <ul>
        <li v-for="client in clients">
          <router-link :to="{ path: '/device', name: 'clientDevice', params: { id: client.name }}">
            ID: {{ client.id }}, {{ client.name }}
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
</template>


<script>
import ServiceClient from "@/Services/ServiceClient";
import ServiceDevice from "@/Services/ServiceDevice";

export default {
  name: "all-clients",
  data() {
    null
    return {
      clients: [],
      devices: [],
      name: ""
    };
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
    searchClientByName() {
      ServiceClient.findClientByName(this.name, this.token)
          .then(response => {
            this.clients = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    },
    deviceByClientId(clientId) {
      ServiceDevice.searchDeviceByClientId(clientId)
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