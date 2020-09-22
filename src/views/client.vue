<template>
  <div>
    <div class="row" v-if="!submitted">
      <div>
        <input type="text" id="name" required v-model="client.name" name="name" placeholder="create new client"/>
      </div>
      <button @click="createClient" class="btn btn-success">Create</button>
    </div>
    <div class="row" v-else>
      <a href="#">{{client.name}}</a>
      <button class="btn btn-success" @click="newClient">Create another</button>
    </div>

    <br>
    <search-client></search-client>

    </div>
</template>

<script>

import ServiceClient from "../Services/ServiceClient";
import SearchClient from "@/components/search-client";
import DeviceFilter from "@/components/search-device";


export default {
  name: "client",
  components: {DeviceFilter, SearchClient},
  data() {
    return {
      client: {name: ""},
      submitted: false
    };
  },
  methods: {
    createClient() {
      var data = {name: this.client.name};

      ServiceClient.create(data)
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