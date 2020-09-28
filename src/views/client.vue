<template>
  <div>
    <search-client></search-client>
    <div v-if="!submitted" class="row">
      <div>
        <input id="name" v-model="client.name" name="name" placeholder="create new client" required type="text"/>
      </div>
      <button class="btn btn-success" @click="createClient">Create</button>
    </div>
    <div v-else>
      <h4>Client created successfully!</h4>
      <button class="btn btn-success" @click="newClient">Create another</button>
    </div>
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
      if(this.client.name != null && this.client.name != ""){
      ServiceClient.create(data)
          .then(this.submitted = true)
          .catch(e => {
            console.log(e);
          });
    }},
    newClient() {
      this.submitted = false;
      this.client = {};
    },
  }
};
</script>

<style scoped>

</style>