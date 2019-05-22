<template>
  <div class="hello">
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
import zhujian from '../components/zhujian.vue'
import { getBannerList } from '../api/api.js'
import { tools } from '../utils/toolClass.js'

export default {
  name: 'index',
  data () {
    return {
      ceshi:"111111",
      showFlag:false
    }
  },
  components:{
    zhujian
  },
  computed: {},
  created(){},
  mounted(){
    getBannerList({
        abolish: 1,
    }).then((res)=>{
        console.log(res)
    })
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
