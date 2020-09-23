<template>
  <div id="app" class="container">
    <div id="nav" class="d-none d-sm-block">
      <img src="./assets/logo.png">

      <router-link to="client">Client</router-link> |
      <router-link to="/device">Device</router-link> |
      <router-link to="/workOrder">Work order</router-link> |

    </div>
    <div id="mobile" class="d-block d-sm-none">
      <mobile></mobile>
    </div>
    <router-view/>
  </div>
</template>


<script>
import Mobile from "@/views/mobile";
// alert("Veebilehe kasutamine omal vastutusel. Jaanus, Tenno ja Morten ei saa kinnitada, et tehniku tehtud päringud saavad tõesed vastused. Saame vaid parimat loota");
export default {
  components: {Mobile}
}
</script>


<style>
</style>
