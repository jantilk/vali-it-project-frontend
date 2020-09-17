<template>
  <div>
    <div class="submit-form">
      <div v-if="!submitted"> <!--todo ahhaa: if submitted=false, only then is this div visible-->
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name" required v-model="client.name" name="name"/>
        </div>

        <button @click="createClient" class="btn btn-success">Create</button><!--todo ahhaa: if this button clicked, createClient runs from script-->
      </div>

      <div v-else> <!--todo ahhaa: if submitted=true, then this div is visible-->
        <h4>Client created successfully!</h4>
        <button class="btn btn-success" @click="newClient">Create another</button> <!--todo ahhaa: if this button clicked, newClient runs from script methods-->
      </div>
    </div>
    <br>
    <all-clients></all-clients>
  </div>
</template>

<script>

import FrontDataService from "../Services/FrontDataService";
import AllClients from "@/components/all-clients";

export default {
  name: "client",
  components: {AllClients},
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