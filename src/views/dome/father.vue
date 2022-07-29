<template>
  <div>
    <p>这是父组件</p>
    <example-vue :num="num" @fn="changeNum"></example-vue>
    <task1-vue>
      <p>这是一份学习dome</p>
    </task1-vue>
  </div>
</template>

<script setup lang='ts'>
import exampleVue from './children/example.vue';
import task1Vue from './task/task1.vue';
import { ref } from 'vue';

  let num = ref(10)
  const changeNum = (val: string)=>{
    console.log(val);
    num.value++
  }
</script>

<style lang='less' scoped> 
  
</style>