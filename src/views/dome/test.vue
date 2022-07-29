<template>
  <div>
    {{num}}
    <br>
    <button @click="btnClick">btnClick</button>
    <br>
    {{numCom}}
  </div>
</template>

<script setup lang='ts'>
import { computed, reactive, toRefs, watch, watchEffect } from 'vue';
  let str = {
    num:1
  }
  let {num} = toRefs(reactive(str))
  const btnClick = ()=>{
    num.value++
    console.log(num.value);
  }
  // 计算属性
  let numCom = computed(()=>{
    return num.value*2
  })
  // computed({
  //   get(){
  //     console.log(num,'get');
  //   },
  //   set(){
  //     num.value = 20
  //   },
  // })
  // 监听
  watch(num,(newVal,oldVal)=>{
    console.log(newVal,oldVal);
    
  })
  // 在页面一刷新就立即监听
  
  watchEffect(()=>{
    // 凡是写在这里的数据，只要发生变化，就会触发这里的代码 
    console.log(num.value,'watchEffect');
    
  })
  console.log(globalVar);
  console.log(globalObj);
  
  
</script>

<style lang='less' scoped>
</style>