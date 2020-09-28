<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <search-client></search-client>
      </div>
    </div>
    <div class="row" v-if="!submitted">
      <div class="col-md-8">
        <input v-model="client.name" class="form-control" name="name" placeholder="Create new client" required
               type="text"/>
      </div>
      <div class="col-md-3" style="margin-left: 20px">
        <button class="btn btn-success" @click="createClient">Create</button>
      </div>
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
      if (this.client.name != null && this.client.name != "") {
        ServiceClient.create(data)
            .then(this.submitted = true)
            .catch(e => {
              console.log(e);
            });
      }
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