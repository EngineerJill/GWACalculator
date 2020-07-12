<template>
  <div id="app">
    <div class="nav-bar">
      <h3 class="logo">AVERAGES | <span class="lite">Compute your GWA here</span></h3>
    </div>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
   
   }
</script>

<style>
     * {
        margin: 0;
        padding: 0;
        font-family: Arial, Helvetica, sans-serif;
    }
    .nav-bar {
        height: 50px;
        width: 100%;
        background-color: #07689F;
        position: relative;
        box-shadow: 0px 2px 3px gray;
    }
    
    .logo {
        position: absolute;
        top: 30%;
        font-family: Arial, Helvetica, sans-serif;
        color: white;
        font-size: 1.0rem;
        left: 6%;
    }

    .lite {
      font-weight: 100;
      margin-left: 8px;
      font-size: 0.8rem;
    }

</style>
