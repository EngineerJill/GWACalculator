<template>
  <div id="app">
    <div class="nav-bar">
      <router-link to="/" ><a><h3 class="logo">AVERAGES | <span class="lite">Compute your GWA here</span></h3></a></router-link>
      <router-link to="sublist" class="express">EXPRESS</router-link>
    </div>
    <div class="copyrights">	&copy; Developer: Daniel A. Soriano II</div>
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

    .copyrights {
      position: fixed;
      color: white;
      font-size: .6rem;
      font-weight: 100;
      width: 100%;
      height: 17px;
      background-color: #F37777;
      bottom: 0;
      text-align: center;
      padding-top: 3px;
      z-index: 999999;
    }

    .nav-bar {
        top: 0;
        height: 50px;
        width: 100%;
        background-color: #07689F;
        position: fixed;
        box-shadow: 0px 1px 2px #BAC1C5;
        z-index: 999;
        
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

    .express {
        position: absolute;
        top: 35%;
        font-family: Arial, Helvetica, sans-serif;
        color: white;
        font-size: 0.8rem;
        right: 6%;
        font-weight: bold;
        text-decoration: none;
    }

    .express:hover {
      color: skyblue;
    }

    .logo:hover {
      color: skyblue;
    }

    @media screen and (max-width: 373px) {
      .lite {
        display: none;
      }
    }

    


</style>
