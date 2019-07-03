<template>
  <div class="e_jb_container">
    <div class="e_jb_sx">
      <div class="container_border">
        <h1 class="e_num_foll">280</h1>
        <h2 class="e_num_foll e_title_followers">followers</h2>
        <div v-for="pic in pics" :key="pic.title" class="e_event_logo">
          <img v-bind:src="pic.path" alt="">
        </div>
        <div class="e_event_logo e_numeri">
          <h1 class="e_numb">+112</h1>
        </div>
      </div>
      <div class="container_border">
        <h1 class="e_num_foll">115</h1>
        <h2 class="e_num_foll e_title_followers">recensioni</h2>
        <div class="e_event_logo ">
        </div>
      </div>
      <div class="container_border">
        <h1 class="e_num_foll">4</h1>
        <h2 class="e_num_foll e_title_followers">edizioni</h2>
      </div>
    </div>
    <div class="e_jb_dx">
      <a class="e_btn">ISCRIVITI</a>
      <a class="e_btn">SEGUI GIA'</a>
      <div class="e_round_btn "><i class="fas fa-reply"></i></div>
      <div class="e_round_btn "><i class="fas fa-ellipsis-h"></i></div>
    </div>
  </div>
</template>

<script>
  /* eslint-disable */
  export default {
    name: 'JumboBottom',
    props: {

    },
    data() {
      return {
        pics: [{
            title: 'uno',
            path: 'https://via.placeholder.com/300.png/09f/fff'
          },
          {
            title: 'due',
            path: 'https://via.placeholder.com/300.png/09f/fff'
          },

        ]
      }
    },
    created: function () {

    },
    methods: {

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

 

  .e_jb_container {
    height: 70px;
    width: 85%;
    margin: auto;
    display: flex;
    background: white;
  }

  .e_jb_sx {
    height: 100%;
    width: 60%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .e_num_foll {
    font-weight: 800;
    font-size: 35px;
    margin: 0 !important;
  }

  .e_title_followers {
    font-size: 15px;
    font-weight: 400;
    margin-top: 10px !important;
    margin-left: 10px !important;

  }

  .e_event_logo {
    height: 30px;
    width: 30px;
    background: black;
    margin: 10px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .e_numeri {
    background: lightgrey;
  }

  .e_numb {
    font-size: 10px;
    margin: 0 !important;
  }

  .container_border {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid lightgrey;
    padding: 10px;
  }
  .e_jb_dx {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 50%;
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
</style>