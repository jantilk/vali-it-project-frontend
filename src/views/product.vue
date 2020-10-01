<template>
  <div>
    <div class="row">
    </div>
    <div class="submit-form">
      <div v-if="createNewButton">
        <div v-if="!submitted">
          <div class="form-group">
            <label for="name">Product Name</label>
            <input id="name" v-model="product.name" class="form-control" name="name" required type="text"/>
          </div>
          <div class="form-group">
            <label for="stock">Stock</label>
            <input id="stock" v-model="product.stock" class="form-control" name="stock" required type="number">
          </div>


          <button class="btn btn-success" @click="createProduct">Create</button>
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
    createProduct() {
      let data = {
        name: this.product.name,
        stock: this.product.stock
      };
      if (this.product.name != null && this.product.name != "" && this.product.stock != null) {
        ServiceProduct.createProduct(data, this.token)
            .then(response => {
              console.log(response.data)
              this.submitted = true;
            })
            .catch(e => {
              console.log(e);
            });
      }
    },
    newProduct() {
      this.submitted = false;
      this.product = {};
    },
    createNewProduct() {
      this.createNewButton = true;
      this.product = {};
    }
  }
}
</script>

<style scoped>

</style>