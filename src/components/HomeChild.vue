<template>
  <div>
    <div class="e_hc_head">
      <div class="hc_head_sx col-md-6">
        <i class="fas fa-arrow-left"></i>
        <h1 class="e_hc_title">Completa l'iscrizione</h1>
      </div>
      <div class="hc_head_dx col-md-6">
        <div v-for="lang in langs" :key="lang.title" class="e_lang_btn " @click="changeLang(lang)"
          :class="{e_lang_btn_active : lang.active}">{{lang.title}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  /* eslint-disable */
  export default {
    name: 'HomeChild',
    props: {

    },
    data() {
      return {
        langs: [{
            title: 'IT',
            active: true
          },
          {
            title: 'EN',
            active: false
          },
          {
            title: 'RO',
            active: false
          },

        ],
      }
    },
    created: function () {

    },
    methods: {
      changeLang(lang) {
        lang.active = !lang.active
        for (let i = 0; i < this.langs.length; i++) {
          this.langs[i].prova = 'test'
          if (this.langs[i].title != lang.title) {
            this.langs[i].active = false
          }
        }
        console.log(this.langs);
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

  .e_hc_head {
    width: 90%;
    height: 100px;
    border-bottom: 1px solid lightgrey;
    margin: auto;
    display: flex;
  }

  .hc_head_sx {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .hc_head_dx {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .e_lang_btn {
    height: 40px;
    width: 40px;
    background: grey;
    margin: 10px;
    font-weight: 800;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .e_lang_btn_active {
    background: #00BCD4;
  }

  .fa-arrow-left {
    color: lightgray;
    font-size: 30px;
    cursor: pointer;
  }
  .e_hc_title {
    font-size: 30px;
    margin: 0!important;
    margin-left: 20px!important; 
  }
</style>