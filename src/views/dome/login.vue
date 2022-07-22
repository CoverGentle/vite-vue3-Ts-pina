<template>
  <div>
    <h1>reactive全家桶</h1>
    <h2>reactive用来绑定复杂的数据类型例如 对象 数组</h2>
      <p>{{person.name}}</p>
  </div>

</template>
<script setup lang="ts">
import { reactive } from 'vue';
let person = reactive({
  name:'小明'
})
setTimeout(() => {
  person.name = '小花'
}, 2000);

</script>
<style lang="scss" scoped>
  
</style>

