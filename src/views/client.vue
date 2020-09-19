<template>
  <div>
    <div class="row" v-if="!submitted">
      <div>
        <input type="text" id="name" required v-model="client.name" name="name" placeholder="create new client"/>
      </div>
      <button @click="createClient" class="btn btn-success">Create</button>
    </div>
    <div class="row" v-else>
      <!--TODO add @click to client name that goes to client page-->
      <!--or TODO after creating client go to that client page-->
      <a href="#">{{client.name}}</a>
      <button class="btn btn-success" @click="newClient">Create another</button>
    </div>

    <br>
    <search-client></search-client>
  </div>
</template>

<script>

import FrontDataService from "../Services/FrontDataService";
import SearchClient from "@/components/search-client";


export default {
  name: "client",
  components: {SearchClient},
  data() {
    return {
      client: {name: ""},
      submitted: false
    };
  },
  methods: {
    createClient() {
      var data = {name: this.client.name};

      FrontDataService.create(data)
          .then(this.submitted = true)
          .catch(e => {console.log(e);});
    },
    newClient() {
      this.submitted = false;
      this.client = {};
    },
  }
};
</script>

<style scoped>

</style>