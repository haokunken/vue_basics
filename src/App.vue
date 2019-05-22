<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* 样式清零
---------------------------------------- */
body{ margin: 0; padding: 0;}
div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, form, fieldset, input, textarea, p, blockquote, th, td, address { margin: 0; padding: 0; font-size: 100%; outline:0;}
pre{ vertical-align:top; margin: 0; padding: 0;}
button{ border:none; outline:0;}
ol, ul { list-style: none;}
a { text-decoration: none; cursor: pointer; outline:0; overflow:hidden;}
a:hover{ text-decoration:none;}
input, textarea{ background:none; border:none; font:normal 100% "微软雅黑",sans-serif; resize:none}
input::-webkit-input-placeholder{ color:#FFF;}
*{ margin:0; padding:0}
html,body{ height:100%}
img{ cursor:pointer; border:0;}

/* 页面框架
---------------------------------------- */
html{ font:normal 100% "微软雅黑",sans-serif;}
body{ background-color:#FFF; text-align:center; position:relative;}
*:not(input){
  user-select:none;
}
</style>
