<template>
  <div>
    <div class="submit-form">
      <div v-if="!submitted">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name" required v-model="client.name" name="name"/>
        </div>

        <button @click="createClient" class="btn btn-success">Create</button>
      </div>

      <div v-else>
        <h4>Client created successfully!</h4>
        <button class="btn btn-success" @click="newClient">Create another</button>
      </div>
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
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>