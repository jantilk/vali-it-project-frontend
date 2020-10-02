<template>
  <div>
    <div class="form-group">
      <label for="username">Username</label>
      <input id="username" v-model="login.username" class="form-control" name="name" type="text"/>
    </div>
    <div class="form-group">
      <label for="stock">Password</label>
      <input id="stock" v-model="login.password" class="form-control" name="stock" type="password">
    </div>
    <div class="col-md-3">
      <button id="login" class="btn btn-success" @click="technicianLogin">Login</button>
    </div>
  </div>
</template>

<script>
import ServiceTechnician from "@/Services/ServiceTechnician";
import ServiceWorkOrder from "@/Services/ServiceWorkOrder";

export default {
  name: "technician",
  components: {},
  data() {
    return {
      login: {
        username: "",
        password: ""
      },
    };
  },
  computed: {
    token: {
      get() {
        return this.$store.state.token;
      },
      set(newValue) {
        this.$store.commit("updateToken", newValue);
      }
    },
    loadWOmobilelist: {
      get() {
        return this.$store.state.loadWOmobilelist;
      },
      set(newValue) {
        this.$store.commit("updateloadWOmobilelist", newValue);
      }
    },
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
              if (response.data.status === true) {
                this.token = response.data.token;
                this.$router.push({name: 'device'});
                this.loadWOmobilelist = true;
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