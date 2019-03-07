<template>
  <div id="app" class="container">
    <!-- 组件导航展示 -->
    <Header></Header>
    <!-- 路由显示区 -->
    <router-view/>
    <!-- <Home/> -->
    <!-- <Admin/> -->
    <!-- <h1 id="in1">{{info1}}</h1> -->
  </div>
</template>

<script>
  
  import Header from '@/components/Header'
export default {
  name: 'App',
  data(){
    return{
      info1:'这是跟组件1122'
    }
  },
  components:{
    
    Header
  }
}
</script>

<style >
#in1{
  background:yellow;
  color:red
}
</style>
