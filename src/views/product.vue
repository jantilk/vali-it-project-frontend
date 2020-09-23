<template>
  <div>
    <div class="row">
    </div>
    <div class="submit-form">
      <div v-if="createNewButton">
        <div v-if="!submitted">
          <div class="form-group">
            <label for="name">Product Name</label>
            <input type="text" class="form-control" id="name" required v-model="product.name" name="name"/>
          </div>
          <div class="form-group">
            <label for="stock">Stock</label>
            <input type="number" class="form-control" id="stock" required v-model="product.stock" name="stock">
          </div>


          <button @click="createProduct" class="btn btn-success">Create</button>
        </div>
        <div v-else>
          <h4>Product created successfully!</h4>
          <button class="btn btn-success" @click="newProduct">Create another</button>
        </div>
      </div>
      <div v-else>
        <h4>Create a new Product</h4>
        <button class="btn btn-success" @click="createNewProduct">Create</button>
      </div>
      <br>
    </div>
  </div>
</template>

<script>

import ServiceProduct from "@/Services/ServiceProduct";

export default {
  name: "product",
  data() {
    return {
      product: {
        name: "",
        stock: null
      },
      submitted: false,
      createNewButton: false
    };
  },
  methods:{
    createProduct(){
      let data = {
        name: this.product.name,
        stock: this.product.stock
      };
      ServiceProduct.createProduct(data)
            .then(this.submitted = true)
            .then(response => console.log(response.data))
            .catch(e => {console.log(e);});
    },
    newProduct() {
      this.submitted = false;
      this.product = {};
    },
    createNewProduct(){
      this.createNewButton = true;
      this.product = {};
    }
  }
}
</script>

<style scoped>

</style>