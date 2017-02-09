<template>
  <div id="app">
    <img src="./assets/logo.png">
   <ul class="nav">
       <li><router-link  to="/home">首页</router-link></li>
       <li><router-link to="/list01">列表页01</router-link></li>
       <li><router-link to="/list02">列表页02</router-link></li>
       <li><router-link to="/list03">列表页03</router-link></li>
   </ul>
   <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
ul,li{
    list-style: none;
}
.nav{
  height: 42px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.nav li{
  width: 200px;
  float: left;
}
.nav li a{
  color: #444;
  text-decoration: none;
}
.nav li a:hover{
  color: #e6501e;
}
.nav li a.router-link-active,
.nav li.arouter-link-active a{
  color: #e6501e;
}
#app {
  font-family:NotoSansHans-Regular,AvenirNext-Regular,arial,Hiragino Sans GB,"Microsoft Yahei","Hiragino Sans GB","WenQuanYi Micro Hei",sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
