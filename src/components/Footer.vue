<template>
  <div class="e_footer">
    <div class="call_action">
      <h2>Call to Action</h2>
      <h3>Lorem ipsum</h3>
      <a class="e_btn_footer">CALL TO ACTION</a>
    </div>
    <div class="e_footer_links">

    </div>
    <div class="e_footer_bottom">

    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Footer',
  props: {
   
  },
  data() {
    return {
   
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
a {
  color: #42b983;
}
.active {
  color: red;
}
.e_footer {
  height: 200px;
}
.call_action {
  height: 500px;
  background-image: url('https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.call_action h2 {
  color: white;
  font-size: 40px!important;
}
.call_action h3 {
  color: white;
  font-size: 30px!important;
}
.e_btn_footer {
    background: #00BCD4;
    color: white!important;
    margin: 25px!important;
    font-size: 15px!important;
    padding: 5px 20px;
    border-radius: 50px;
    font-size: 20px;
    font-weight: 800;
    transition: .5s;
    cursor: pointer;
  }
  .e_btn_footer:hover {
    color: #00BCD4!important;
    background: transparent;
    transition: .5s;
    border: 1px solid #00BCD4;
  }
  .e_footer_links {
    height: 300px;
    background: #333333;
    width: 100%;
  }
  .e_footer_bottom {
    width: 100%;
    height: 60px;
    background: #666666;
  }
</style>
