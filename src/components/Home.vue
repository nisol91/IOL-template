<template>
  <div class="e_home">
    <div class="e_jumbo">
      <div class="e_jumbo_cont row">
        <div class="e_cont_sx col-md-5">
          <div class="e_cont_sx_top">
            <div class="e_event_logo">
              <img
                src="https://is5-ssl.mzstatic.com/image/thumb/Purple123/v4/14/dd/61/14dd611e-b3a4-2077-1870-c48d9b1569c4/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-10.png/1200x630wa.png"
                alt="">
            </div>
            <div class="e_event_title">
              <div class="rating">
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
              </div>
              <h4 class="e_title">Parma Marathon</h4>
              <h5 class="e_subtitle">20/10/18 - Parma (Pr)</h5>
            </div>
          </div>
          <div class="e_cont_sx_bottom">
            <div @click="toggleButton(event)" v-for="event in events" :key="event.title" class="e_select_event"
              v-bind:class="{e_select_event_hover: event.status}">
              <h6 class="e_event_name">{{event.title}}</h6>
            </div>
          </div>
        </div>
        <div class="e_cont_dx col-md-7">

        </div>
      </div>
    </div>

    <div class="e_home_background">
      <jumbo-bottom></jumbo-bottom>
      <div class="e_h_main row">
        <div class="e_h_main_sx col-md-8">
          <div class="e_h_main_sx_top_menu">
            <router-link class="e_nav_el" to="/">Home</router-link>
            <router-link class="e_nav_el" to="/">Informazioni</router-link>
            <router-link class="e_nav_el" to="/">Iscrizioni</router-link>
            <router-link class="e_nav_el" to="/pagina">Risultati</router-link>
            <router-link class="e_nav_el" to="/elenco">Foto</router-link>
            <router-link class="e_nav_el" to="/">Video</router-link>
            <router-link class="e_nav_el" to="/">Recensioni</router-link>
            <router-link class="e_nav_el" to="/">Community</router-link>
          </div>
          <div class="e_h_main_sx_contenuto">
            <main class="App__main">
              <transition name="fade" mode="out-in">
                <!-- routes will be rendered here -->

                <router-view name="inside_menu" />
              </transition>
            </main>
          </div>
        </div>
        <div class="e_h_main_dx col-md-4">
          <img src="https://via.placeholder.com/350x800.png/09f/fff" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import JumboBottom from './JumboBottom.vue'

  /* eslint-disable */
  export default {
    name: 'Home',
    components: {
      JumboBottom,
    },
    props: {

    },
    data() {
      return {
        events: [{
            title: 'Corsa su strada',
            status: false
          },
          {
            title: '10km',
            status: false
          },
          {
            title: '5km',
            status: false
          },
          {
            title: 'Fun Run',
            status: false
          },
          {
            title: 'In famiglia',
            status: false
          },
          {
            title: 'Non Competitiva',
            status: false
          },
        ],
      }
    },
    created: function () {

    },
    methods: {
      toggleButton(evento) {
        evento.status = !evento.status
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .active {
    color: red;
  }


  .e_home {}

  .e_jumbo {
    background: grey;
    height: 410px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding-top: 30px;
  }

  .e_jumbo_cont {
    background: white;
    width: 85%;
    height: 100%;
    display: flex;
  }

  .e_cont_dx,
  .e_cont_sx {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .e_cont_sx {
    background: white;
    padding: 0 !important;
    /* width: 40%; */
  }

  .e_cont_dx {
    background: lightgrey;
    padding: 0 !important;
    /* width: 60%; */
  }

  .e_cont_sx_top {
    width: 90%;
    height: 50%;
    border-bottom: 2px solid lightgrey;
    display: flex;
  }

  .e_cont_sx_bottom {
    width: 90%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  .e_event_logo {
    height: 150px;
    width: 150px;
    background: black;
    margin: 30px;
    border-radius: 50%;
    overflow: hidden;
  }

  .e_event_logo img {
    max-width: 200%;
  }

  .e_event_title {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .e_title {
    font-weight: 800;
  }

  .e_subtitle {
    font-size: 15px;
  }

  .fa-star {
    color: #FFC107 !important;
    margin: 0 3px;
  }

  .e_select_event {
    background: #00BCD4;
    height: 30px;
    width: 100px;
    margin: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }

  .e_event_name {
    font-size: 12px;
    margin: 0 !important;
  }

  .e_select_event_hover {
    background: white;
    border: 2px solid #00BCD4;
    color: #00BCD4;
  }

  .e_home_background {
    width: 100%;
    height: 1000px;
    background: lightgrey;
    margin: auto;
  }

  .e_h_main {
    width: 85%;
    height: 100%;
    margin: auto;
  }

  .e_h_main_sx {
    height: 100%;
    /* background: red; */
    padding: 0 !important;
  }

  .e_h_main_sx_top_menu {
    width: 100%;
    height: 50px;
    border-bottom: .5px solid grey;
  }

  .e_h_main_dx {
    height: 100%;
    padding: 20px !important;
  }

  .e_h_main_sx_contenuto {
    height: 1000px;
    width: 100%;
    background: lightblue;
    margin-top: 20px;
  }
</style>