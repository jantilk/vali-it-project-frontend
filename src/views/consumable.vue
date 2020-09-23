<template>
  <div>
    <div class="row">
    </div>
    <div class="submit-form">
      <div v-if="createNewButton">
        <div v-if="!submitted">
          <div class="form-group">
            <label for="name">Consumable Name</label>
            <input type="text" class="form-control" id="name" required v-model="consumable.name" name="name"/>
          </div>
          <div class="form-group">
            <label for="stock">Stock</label>
            <input type="number" class="form-control" id="stock" required v-model="consumable.stock" name="stock">
          </div>


          <button @click="createConsumable" class="btn btn-success">Create</button>
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
  methods:{
    createConsumable(){
      let data = {
        name: this.consumable.name,
        stock: this.consumable.stock
      };
      ServiceConsumable.createConsumable(data)
            .then(this.submitted = true)
            .then(response => console.log(response.data))
            .catch(e => {console.log(e);});
    },
    newConsumable() {
      this.submitted = false;
      this.consumable = {};
    },
    createNewConsumable(){
      this.createNewButton = true;
      this.consumable = {};
    }
  }
}
</script>

<style scoped>

</style>