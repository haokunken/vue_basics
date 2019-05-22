<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <zhujian v-model="showFlag" v-if="showFlag">
      <template ref="" v-slot:default="ccc">
        <h1>{{ccc.aaaa}}</h1>
      </template>
      <template v-slot:aaa="slotProps">
        {{ slotProps.user.firstName }}
        <div>{{slotProps}}</div>
      </template>
    </zhujian>

    <button @click="showFlag=true">打开组件</button>
  </div>
</template>

<script>
import zhujian from './zhujian.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      ceshi:"111111",
      showFlag:false
    }
  },
  components:{
    zhujian
  },
  mounted(){
    console.log(this.slotProps)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
</style>
