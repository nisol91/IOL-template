<template>
  <div id="app">
    <div>
      <b-nav small class="e_navbar">
        <a class="e_logo">ENDU</a>
        <div class="e_form-group">
            <input class="e_search" placeholder="Cerca eventi, atleti, risultati..">
            <button class="e_btn_search" size="sm" text="Button" variant="success"><i class="fas fa-search"></i></button>
        </div>
        <b-nav-item>
          <router-link class="e_nav_el" to="/">Eventi</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link class="e_nav_el" to="/">Community</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link class="e_nav_el" to="/">ENDUmag</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link class="e_nav_el" to="/elenco_2">Servizi</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link class="e_nav_el" to="/">About</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link class="e_nav_el" to="/">Shop</router-link>
        </b-nav-item>
        <b-nav-item>
            <a class="e_login">ACCEDI</a>
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
    font-family: 'Lato', Helvetica, Arial, sans-serif;
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
    color: white !important;
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
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .e_logo {
    color: white;
    font-weight: 600;
    font-size: 40px;
  }
  .e_search {
    border-radius: 50px;
    height: 30px;
    width: 300px;
    border: none;
    padding: 0px 10px;
  }
  .e_btn_search {
    background: #80DEEA;
    border: none;
    position: absolute;
    right: 0px;
    border-radius: 0 50px 50px 0;
    height: 30px;
    width: 40px;
  }
  input::placeholder { /* Chrome/Opera/Safari */
    color: grey;
  }
  .e_form-group {
      position: relative;
  }
  .btn:focus{
    outline: none!important;
  }
  button:focus{
    outline: none!important;
  }
  input:focus {
    outline: none;
  }
  .fa-search {
    color: white;
  }
  .e_nav_el {
    font-weight: 800;
  }
  .e_login {
    color: black!important;
    margin: 0!important;
    font-size: 15px!important;
    background: white;
    padding: 5px 20px;
    border-radius: 50px;
    font-size: 20px;
    font-weight: 800;
    transition: .5s;
  }
  .e_login:hover {
    color: white!important;
    background: #FFC107;
    transition: .5s;
  }
  .nav-link {
    padding: 0!important;
  }
</style>