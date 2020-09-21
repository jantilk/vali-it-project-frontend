<template>
  <div id="app" class="container">
    <div id="nav">
      <img src="./assets/logo.png">

      <router-link to="client">Client</router-link> |
      <router-link to="/device">Device</router-link> |
      <router-link to="/workOrder">Work order</router-link> |

    </div>
    <router-view/>

  </div>
</template>


<script>
</script>


<style>
</style>
