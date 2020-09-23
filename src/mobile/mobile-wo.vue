<template>
  <div>
    <div>
      <div>
        <div class="dropdown">

          <input v-if="Object.keys(selectedClient).length === 0" type="text" class="dropdown-input" ref="dropdowninput" placeholder="Client"
                 v-model.trim="inputClient" @input="clientByName">

          <div v-else @click="resetClient" class="dropdown-selected">
            {{ selectedClient.name }}
          </div>

          <div class="dropdown-list">
            <div v-for="client in clients" :key="client.inputClient" class="dropdown-item" @click="selectClient(client)">
              {{ client.name }}
            </div>
          </div>

        </div>


        <input type="text" class="row" placeholder="Device" v-model="anyParam" @input="searchAnyParam">
        <input type="number" class="row" placeholder="Counter">
        <br>
        <input type="text" class="row" placeholder="Add consumable" v-model="consumable" @input="searchConsumable">
        <br>
        <input type="text" class="row" placeholder="Description">
        <input type="text" class="row" placeholder="Technician" v-model="technician" @input="searchTechnician">
        <input type="checkbox">
      </div>
    </div>
  </div>
</template>

<script>
import ServiceClient from "@/Services/ServiceClient";
import ServiceDevice from "@/Services/ServiceDevice";

export default {
  name: "mobile-wo",
  data() {
    return {
      clients: [],
      selectedClient: {},
      devices: [],
      name: "",
      inputClient: "",
      anyParam: "",
      consumable: "",
      technician: "",
      apiLoaded: false
    }
  },
  methods: {
    clientByName() {
      ServiceClient.clientByName(this.inputClient)
          .then(response => {
            this.clients = response.data;
            console.log(response.data);
            this.apiLoaded = true;
          })
          .catch(e => {
            console.log(e);
          });
    },
    searchAnyParam() {
      ServiceDevice.searchAnyParam(this.anyParam)
          .then(response => {
            this.devices = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    },
    selectClient (theClient) {
      this.selectedClient = theClient
      this.inputClient = ''
      this.$emit('on-client-selected', theClient)
    },
    resetClient () {
      this.selectedClient = {}
      this.$nextTick( () => this.$refs.dropdowninput.focus() )
      this.$emit('on-client-reset')
    }
  }
}
</script>

<style scoped>
.dropdown{
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}
.dropdown-input, .dropdown-selected{
  width: 100%;
  padding: 10px 16px;
  border: 1px solid transparent;
  background: #edf2f7;
  line-height: 1.5em;
  outline: none;
  border-radius: 8px;
}
.dropdown-input:focus, .dropdown-selected:hover{
  background: #fff;
  border-color: #e2e8f0;
}
.dropdown-input::placeholder{
  opacity: 0.7;
}
.dropdown-selected{
  font-weight: bold;
  cursor: pointer;
}
.dropdown-list{
  position: absolute;
  width: 100%;
  max-height: 500px;
  margin-top: 4px;
  overflow-y: auto;
  background: #ffffff;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
}
.dropdown-item{
  display: flex;
  width: 100%;
  padding: 11px 16px;
  cursor: pointer;
}
.dropdown-item:hover{
  background: #edf2f7;
}
</style>