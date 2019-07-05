<template>
  <div id="app" v-scroll="handleScrollNav_2">
    <div v-scroll="handleScrollNav">
      <transition name="slide">
        <b-nav small class="e_navbar" v-if="navSl">
          <i id="e_burger" class="fas fa-bars"></i>
          <a class="e_logo">ENDU</a>
          <div class="cont_responsive_search" v-bind:class="{hidden_resp:nascosto}">

            <div class="e_form-group">
              <input class="e_search" placeholder="Cerca eventi, atleti, risultati.." v-model="keywords">
              <button class="e_btn_search" size="sm" text="Button" variant="success"><i
                  class="fas fa-search"></i></button>
            </div>
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
      </transition>
      <transition name="slide">
        <div class="scroll_down" v-if="navSl_2" v-bind:class="{scroll_margin:margin}">
          <div class="sc_1">
            <div class="sc_1_sx">
              <div class="e_event_logo_nav">
                <img
                  src="https://is5-ssl.mzstatic.com/image/thumb/Purple123/v4/14/dd/61/14dd611e-b3a4-2077-1870-c48d9b1569c4/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-10.png/1200x630wa.png"
                  alt="">
              </div>
              <div class="text_container">
                <h4 class="e_title">Parma Marathon</h4>
              </div>
            </div class="sc_1_dx">
            <div>
              <div class="e_jb_dx">
      <a class="e_btn">ISCRIVITI</a>
      <a class="e_btn">SEGUI GIA'</a>
      <div class="e_round_btn "><i class="fas fa-reply"></i></div>
      <div class="e_round_btn "><i class="fas fa-ellipsis-h"></i></div>
    </div>
            </div>
          </div>
          <div class="sc_2">
            <div class="e_h_main_sx_top_menu_nav">
              <div class="nav_container_nav" v-for="item in nav_items" :key="item.title" @mouseover="item.hover = true"
                @mouseleave="item.hover = false">

                <router-link class="e_inside_nav_el" :class="{ hover_color: item.hover }" v-bind:to="item.route">
                  {{item.title}}</router-link>
              </div>
            </div>
          </div>
        </div>
      </transition>


    </div>
    <main class="App__main">
      <div class="risultati_axios_search hidden">

        <ul v-if="results.length > 0">
          <li v-for="result in results" :key="result.id">{{result.title}}</li>
        </ul>
      </div>
      <transition name="fade" mode="out-in">
        <!-- routes will be rendered here -->

        <router-view />
      </transition>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
  /* eslint-disable */

  /* eslint-disable vue/no-unused-components */
  import Home from './components/Home.vue'
  import Pagina from './components/Pagina.vue'
  import Elenco from './components/Elenco.vue'
  import Footer from './components/Footer.vue'
  import ElementoSingolo from './components/ElementoSingolo.vue'

  // axios
  import axios from 'axios';



  //----JQUERY---in caso di emergenza------------


  import JQuery from 'jquery'
  let $ = JQuery




  //--------------------------------
  export default {
    name: 'app',
    components: {
      Home,
      Pagina,
      Elenco,
      ElementoSingolo,
      Footer,
    },
    data() {
      return {
        scrollPos: 0,
        navSl: true,
        navSl_2: false,
        margin: false,
        keywords: null,
        results: [],
        nascosto: false,
        nav_items: [{
            title: 'Home',
            route: '/home',
            hover: false
          },
          {
            title: 'Informazioni',
            route: '/elenco',
            hover: false
          },
          {
            title: 'Iscrizioni',
            route: '/pagina',
            hover: false
          },
          {
            title: 'Risultati',
            route: '/',
            hover: false
          },
          {
            title: 'Foto',
            route: '/',
            hover: false
          },
          {
            title: 'Video',
            route: '/',
            hover: false
          },
          {
            title: 'Recensioni',
            route: '/',
            hover: false
          },
          {
            title: 'Community',
            route: '/',
            hover: false
          },

        ],
      }
    },
    watch: {
      keywords(after, before) {
        this.fetch();
      }
    },
    created: function () {

    },
    methods: {
      fetch() {
        axios.get('https://jsonplaceholder.typicode.com/todos', {
            params: {
              keywords: this.keywords
            }
          })
          .then(response => {
            this.results = response.data
            console.log(response.data);

          })
          .catch(error => {});

      },

      handleScrollNav: function (evt, el) {

        if (window.scrollY > 100 && window.scrollY > this.scrollPos) {
          //down
          this.scrollPos = window.scrollY - 1
          this.navSl = false
        } else {
          //up
          this.scrollPos = window.scrollY + 1
          this.navSl = true
          // this.nascosto = true
        }
        if (window.scrollY < 4) {
          // this.nascosto = false

        }
      },
      handleScrollNav_2: function (evt, el) {

        if (window.scrollY > 400 && window.scrollY > this.scrollPos) {
          console.log('down');
          this.scrollPos = window.scrollY - 1
          this.navSl_2 = true
          this.margin = false


        } else {
          console.log('up');
          this.scrollPos = window.scrollY + 1
          // this.navSl_2 = false
          this.margin = true
        }
        if (window.scrollY < 10) {
          this.navSl_2 = false

        }
      }
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

  .slide-enter-active {
    -moz-transition-duration: .3s;
    -webkit-transition-duration: .3s;
    -o-transition-duration: .3s;
    transition-duration: .3s;
    -moz-transition-timing-function: ease-in;
    -webkit-transition-timing-function: ease-in;
    -o-transition-timing-function: ease-in;
    transition-timing-function: ease-in;
  }

  .slide-leave-active {
    -moz-transition-duration: .3s;
    -webkit-transition-duration: .3s;
    -o-transition-duration: .3s;
    transition-duration: .3s;
    -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  }

  .slide-enter-to,
  .slide-leave {
    max-height: 100px;
    overflow: hidden;
  }

  .slide-enter,
  .slide-leave-to {
    overflow: hidden;
    max-height: 0;
  }

  /* ------------------- */
  a {
    color: white !important;
  }

  a:hover {
    text-decoration: none !important;
  }

  .hidden {
    display: none;
  }

  .red {
    position: fixed;
    /* transition: 3s; */
  }

  .black {
    background: black;
    width: 100px;
    height: 100px;
  }

  #e_burger {
    color: white;
    font-size: 20px;
    display: none;
  }

  .risultati_axios_search {
    width: 200px;
    height: 200px;
    background: white;
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
    z-index: 9999;
    position: fixed;
  }

  .scroll_down {
    width: 100%;
    height: auto;
    background: lightgrey;
    position: fixed;
    z-index: 9999;
  }

  

  .sc_1 {
    height: 50%;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .sc_2 {
    height: 50%;
    width: 100%;
    background: white;
  }

  .e_h_main_sx_top_menu_nav {
    width: 100%;
    height: 50px;
    display: flex;
    -webkit-box-shadow: 0 0px 36px 0px rgba(0,0,0,0.73);
-moz-box-shadow: 0 0 36px 0px rgba(0,0,0,0.73);
box-shadow: 0 0 36px 0px rgba(0,0,0,0.73);
  }
  .nav_container_nav {
    cursor: pointer;
    border-bottom: 2px solid rgb(231, 231, 231);
    display: flex;
    justify-content: center;
  }

  .nav_container_nav:hover {
    color: black !important;
    border-bottom: 3px solid #00BCD4;
  }

  .hover_color {
    color: black !important;
  }
  .scroll_margin {
    margin-top: 70px;
  }

  .e_event_logo_nav {
    height: 50px;
    width: 50px;
    background: black;
    margin: 10px;
    /* margin-bottom: 20px; */
    border-radius: 50%;
    overflow: hidden;
    flex-shrink: 0;
  }

  .e_logo {
    color: white;
    font-weight: 600;
    font-size: 40px;
  }
 .e_inside_nav_el {
    margin: 20px;
    color: grey !important;
    height: 100%;
    font-weight: 800;
  }
  .e_title {
    font-weight: 800;
  }

  .e_search {
    border-radius: 50px;
    height: 30px;
    width: 300px;
    border: none;
    padding: 0px 10px;
  }

  .sc_1_sx, .sc_1_dx {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 50%;
    height: 100%;
  }
.e_jb_dx {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    /* width: 40%; */
    height: 100%;
  }
  .e_btn {
    background: #00BCD4;
    color: white!important;
    margin: 5px!important;
    font-size: 15px!important;
    padding: 5px 20px;
    border-radius: 50px;
    font-size: 20px;
    font-weight: 800;
    transition: .5s;
    cursor: pointer;
  }
  .e_btn:hover {
    color: #00BCD4!important;
    background: white;
    transition: .5s;
    border: 1px solid #00BCD4;
  }
  .e_round_btn {
    height: 30px;
    width: 30px;
    background: #FFC107;
    margin: 10px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .e_jb_dx i {
    color: white;
    cursor: pointer;
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

  input::placeholder {
    /* Chrome/Opera/Safari */
    color: grey;
  }

  .e_form-group {
    position: relative;

  }

  .btn:focus {
    outline: none !important;
  }

  button:focus {
    outline: none !important;
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
    color: black !important;
    margin: 0 !important;
    font-size: 15px !important;
    background: white;
    padding: 5px 20px;
    border-radius: 50px;
    font-size: 20px;
    font-weight: 800;
    transition: .5s;
  }

  .e_login:hover {
    color: white !important;
    background: #FFC107;
    transition: .5s;
  }

  .nav-link {
    padding: 0 !important;
  }






  /* MEDIA QUERY */

  /* Extra small devices (portrait phones, less than 576px) */
  @media (max-width: 575.98px) {
    /* @media (max-width: 1200px) {  */


    .e_nav_el,
    .e_cont_dx,
    .e_login,
    .e_cont_sx_bottom {
      display: none !important;
    }

    .hidden_resp {
      display: none;
    }

    .e_login {
      display: inherit !important;
      position: absolute;
      top: 15px;
      right: 15px;
    }

    .e_jumbo {
      height: auto !important;
      padding: 0 !important;
    }
.text_container {
    width: 80%;
    height: auto;
    border-bottom: 2px solid lightgrey;
    text-align: left;
  }
    .e_jumbo_cont {
      /* height: 300px!important; */
      width: 100% !important;
    }

    .cont_responsive_foto {
      display: block !important;
      display: flex !important;
      align-items: flex-end;
      background: url('https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
      background-size: cover;
      background-repeat: no-repeat;
      /* background-position-y: 80px; */
    }

    .nav {
      height: 80px !important;
      justify-content: center;
      z-index: 9999 !important;
    }

    .e_navbar {
      padding: 0 !important;
    }

    .scroll-hidden {
      display: none !important;
      transition: .5s;
    }

    .e_hc_head {
      flex-wrap: wrap !important;
      height: auto !important;
      padding-bottom: 10px;
    }

    .hc_head_dx {
      order: -1;
    }
.e_jb_dx {
  display: none;
}
    .e_h_main_sx_top_menu {
      overflow: scroll;
    }
    .e_h_main_sx_top_menu_nav {
      overflow:scroll;
      overflow-y: hidden;
          }

    .e_inside_nav_el {
      font-size: 13px;
    }

    .e_cont_sx_bottom_responsive {
      flex-wrap: nowrap !important;
      align-items: flex-start;
      overflow: scroll !important;
      width: 100% !important;
    }

    .e_cont_sx_top {
      justify-content: center;
    }

    .e_select_event {
      flex-shrink: 0;
    }

    .e_event_logo {
      flex-shrink: 0;
      height: 80px !important;
      width: 80px !important;
    }

    .e_cont_sx_top {
      height: auto !important;
      align-items: center;
      border: none !important;
    }

    .e_title {
      font-size: 15px;
    }

    .e_subtitle {
      font-size: 10px !important;
    }

    .pubblicita_resp {
      display: block !important;
    }

    .e_jb_container {
      /* height: 140px; */
      width: 100% !important;
    }

    .e_jb_container .e_event_logo {
      display: none;
    }

    .e_jb_sx {
      overflow: scroll;
      width: 100%;
    }

    .scroll_down {
      background: white;
    }

    .e_jb_dx {
      background: white;
      width: 100%;
      justify-content: center !important;
    }

    a,
    .e_round_btn {
      flex-shrink: 0 !important;
    }

    .e_h_main_sx {
      margin-top: 90px !important;
    }

    #e_burger {
      display: inherit;
      position: absolute;
      top: 25px;
      left: 25px;
    }

    .e_form-group {
      position: relative;
      margin-top: 15px;
    }

    .cont_responsive_search {
      width: 100%;
      height: 60px;
      background: lightgrey;
      padding: 0 10px;
      z-index: 800;
    }

    .e_search {
      width: 100%;
    }

    .scroll_margin {
      margin-top: 120px;
    }
    .sc_2 {
    padding-top: 10px;
  }
  }

  /* Small devices (landscape phones, less than 768px) */
  @media (max-width: 767.98px) {}

  /* Medium devices (tablets, less than 992px) */
  @media (max-width: 991.98px) {}

  /* Large devices (desktops, less than 1200px) */
  @media (max-width: 1199.98px) {}
</style>