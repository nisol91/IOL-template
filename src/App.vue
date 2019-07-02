<template>
  <div id="app">
    <div>
      <b-nav small class="e_navbar">
        <div>
          <h1 class="e_logo">ENDU</h1>
        </div>
        <div class="e_form-group">
            <input class="e_search" placeholder="Cerca eventi, atleti, risultati..">
            <button class="btn e_btn_search" size="sm" text="Button" variant="success"></button>
        </div>
        <b-nav-item>
          <router-link to="/">Home</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/pagina">Pagina</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/elenco">Elenco</router-link>
        </b-nav-item>

      </b-nav>
    </div>
    <main class="App__main">
      <transition name="fade" mode="out-in">
        <!-- routes will be rendered here -->

        <router-view />
      </transition>
    </main>
  </div>
</template>

<script>
  /* eslint-disable vue/no-unused-components */
  import Home from './components/Home.vue'
  import Pagina from './components/Pagina.vue'
  import Elenco from './components/Elenco.vue'
  import ElementoSingolo from './components/ElementoSingolo.vue'





  export default {
    name: 'app',
    components: {
      Home,
      Pagina,
      Elenco,
      ElementoSingolo,
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 0px;
  }

  /* transition */
  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-timing-function: ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }



  a {
    margin: 0 10px;
    color: green !important;
  }

  a:hover {
    text-decoration: none !important;
  }


  .e_navbar {
    background: #00BCD4;
    height: 70px;
    width: 100%;
    padding-left: 80px !important;
    padding-right: 80px;
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .e_logo {
    color: white;
    font-weight: 600;
  }
  .e_search {
    border-radius: 50px;
    height: 30px;
    width: 300px;
    border: none;
    padding: 0px 10px;
  }
  .e_btn_search {
    background: #80DEEA!important;
    border: none!important;
    position: absolute!important;
    right: 0px!important;
    border-radius: 0 50px 50px 0!important;
    height: 30px!important;
    width: 40px;

  }
  input::placeholder { /* Chrome/Opera/Safari */
    color: grey;
  }
  .e_form-group {
      position: relative;
  }
</style>