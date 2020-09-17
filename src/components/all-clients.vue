<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by name"
               v-model="name"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
                  @click="searchName"
          >
            Search
          </button>
        </div>
      </div>
    </div>

    <div class="col-md-6">
      <h4>Clients List</h4>
      <ul class="list-group">
        <li class="list-group-item" :class="{ active: index == currentIndex }" v-for="(client, index) in clients" :key="index"
            @click="setActiveClient(client, index)">
        <li class="list-group-item" v-for="(client, index) in clients" :key="index">
          {{ client.name }}
        </li>
      </ul>
    </div>

    <div class="col-md-6">
      <div v-if="currentClient">
        <h4>Client</h4>
        <div>
          <label><strong>Name:</strong></label> {{ currentClient.name }}
        </div>

        <a class="badge badge-warning" :href="'/clients/' + currentClient.id">Edit</a>
      </div>
      <div v-else>
        <br/>
        <p>Please click on a Client...</p>
      </div>

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
      currentClient: null,
      currentIndex: -1,
      name: ""
    };
    // return {
    //   clients: [],
    //   name: ""
    // };
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
    },

    // refreshList() {
    //   this.retrieveClients();
    //   this.currentClient = null;
    //   this.currentIndex = -1;
    // },

    setActiveClient(client, index) {
      this.currentClient = client;
      this.currentClient = index;
    },
    searchName() {
      FrontDataService.findByName(this.name)
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