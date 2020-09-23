<template>
  <div id="app" class="container">
    <div id="nav">
      <img src="./assets/logo.png">

      <router-link to="client">Client</router-link> |
      <router-link to="/device">Device</router-link> |
      <router-link to="/workOrder">Work order</router-link> |
      <router-link to="/product">Product</router-link> |
      <router-link to="/consumable">Consumable</router-link>

    </div>
    <div id="mobile" class="d-block d-sm-none">
      <mobile></mobile>
    </div>
    <router-view/>

  </div>
</template>


<script>
// alert("Veebilehe kasutamine omal vastutusel. Jaanus, Tenno ja Morten ei saa kinnitada, et tehniku tehtud päringud saavad tõesed vastused. Saame vaid parimat loota");
import Mobile from "@/views/mobile";
// alert("Veebilehe kasutamine omal vastutusel. Jaanus, Tenno ja Morten ei saa kinnitada, et tehniku tehtud päringud saavad tõesed vastused. Saame vaid parimat loota");
export default {
  components: {Mobile}
}
</script>


<style>
</style>
