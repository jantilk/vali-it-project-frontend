<template>
  <div>
    <!--    <div v-if="!submitted">-->
    <div class="form-group">
      <label for="username">Username</label>
      <input id="username" v-model="login.username" class="form-control" name="name" type="text"/>
    </div>
    <div class="form-group">
      <label for="stock">Password</label>
      <input id="stock" v-model="login.password" class="form-control" name="stock" type="password">
    </div>
    <div class="col-md-3">
      <!--      <router-link to="/client">-->
      <button id="login" class="btn btn-success" @click="technicianLogin">Login
        <router-link v-if="userpass" to="/client"></router-link>
      </button>
      <!--      </router-link>-->

    </div>
  </div>
  <!--  </div>-->
</template>

<script>


import ServiceTechnician from "@/Services/ServiceTechnician";

export default {
  name: "technician",
  components: {},
  data() {
    return {
      login: {
        username: "",
        password: ""
      },
      userpass: false
    };
  },
  methods: {
    technicianLogin() {
      let data = {
        username: this.login.username,
        password: this.login.password
      };
      if (this.login.username != null && this.login.username != "") {
        ServiceTechnician.loginTechnician(data)
            .then((response) => {
              console.log(response.data)
                if (response.data === true) {
                  this.userpass = true;
                }
              })
            .catch(error => {
              console.log(error);
            });
      }
    },
  },
};
</script>

<style scoped>

</style>