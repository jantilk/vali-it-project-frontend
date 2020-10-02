<template>
  <div>
    <div class="row">
    </div>
    <div class="submit-form">
      <div v-if="createNewButton">
        <div v-if="!submitted">
          <div class="form-group">
            <label for="name">Consumable Name</label>
            <input id="name" v-model="consumable.name" class="form-control" name="name" required type="text"/>
          </div>
          <div class="form-group">
            <label for="stock">Stock</label>
            <input id="stock" v-model="consumable.stock" class="form-control" name="stock" required type="number" v-on:keyup.enter="createConsumable">
          </div>


          <button class="btn btn-success" @click="createConsumable">Create</button>
        </div>
        <div v-else>
          <h4>Consumable created successfully!</h4>
          <button class="btn btn-success" @click="newConsumable">Create another</button>
        </div>
      </div>
      <div v-else>
        <h4>Create a new Consumable</h4>
        <button class="btn btn-success" @click="createNewConsumable">Create</button>
      </div>
      <br>
    </div>
  </div>
</template>

<script>

import ServiceConsumable from "@/Services/ServiceConsumable";

export default {
  name: "consumable",
  data() {
    return {
      consumable: {
        name: "",
        stock: null
      },
      submitted: false,
      createNewButton: false
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
  },
  methods: {
    createConsumable() {
      let data = {
        name: this.consumable.name,
        stock: this.consumable.stock
      };
      if (this.consumable.name != null && this.consumable.name != "" && this.consumable.stock != null) {
        ServiceConsumable.createConsumable(data, this.token)
            .then(response => {
              console.log(response.data)
              this.submitted = true;
            })
            .catch(e => {
              console.log(e);
            });
      }
    },
    newConsumable() {
      this.submitted = false;
      this.consumable = {};
    },
    createNewConsumable() {
      this.createNewButton = true;
      this.consumable = {};
    }
  }
}
</script>

<style scoped>

</style>