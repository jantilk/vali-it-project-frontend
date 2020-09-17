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
        <li class="list-group-item" v-for="client in clients">
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
  methods: {searchName() {
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
};
</script>

<style scoped>

</style>