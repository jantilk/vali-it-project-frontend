<template>
  <div class="list row">
    <div class="col-md-6">
      <h4>Clients List</h4>
      <ul class="list-group">
        <li class="list-group-item" v-for="(client, index) in clients" :key="index">
          {{ client.name }}
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
import FrontDataService from "@/Services/FrontDataService";

export default {
  name: "all-clients",
  data() {
    return {
      clients: [],
      name: ""
    };
  },
  methods: {
    retrieveClients() {
      FrontDataService.getAll()
          .then(response => {
            this.clients = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    }
  },
  mounted() {
    this.retrieveClients();
  }
};
</script>

<style scoped>

</style>