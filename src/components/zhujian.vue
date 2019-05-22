<template>
  <div class="hello">
    <slot v-bind:aaaa="ccc">
        
    </slot>
    <slot name="aaa" v-bind:user="user"></slot>
    <button @click="close">关闭组件</button>
  </div>
</template>

<script>

export default {
  name: 'zhujian',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      aaa:'22222',
      user:{
        firstName:111,
        lastName:"222"
      },
      ccc:"kkjkjkjkj"
    }
  },
  components:{
    
  },
  props: {

  },
  model: {
    // prop: 'checked',
    event: 'change'
  },
  mounted(){
    //   console.log(this.$slots.)
  },
  methods: {
    close(){
      this.$emit('change', false)
    }
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
