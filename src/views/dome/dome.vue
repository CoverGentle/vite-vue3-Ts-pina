<template>
  <div ref="divStr" class="dome">
    <p>{{ str }}</p>
    <p>-----------</p>
    <p>{{man.name}}</p>
    <button @click="HandleClick">botton</button>

  </div>
</template>

<script setup lang="ts">
import {onUpdated,onBeforeMount, onBeforeUpdate, onMounted,onBeforeUnmount,onUnmounted,ref,Ref,reactive } from 'vue'
  const str:Ref<string> = ref('小明')
  let divStr = ref()
  interface Person{
    name:string,
    age:number,
    hobby:Hobby
  }
  
  interface Hobby{
    [idx:number]: string
  }
  const man:Person = reactive({
    name:"小明",
    age:11,
    hobby:['篮球','羽毛球']
  })
  
  onBeforeMount(()=>{
    console.log(str.value,"执行了onBeforeMount");
  })
  onMounted(()=>{
    setTimeout(() => {
      str.value = "小瘪三"
    }, 2000);
    console.log(divStr.value,"执行了onMounted---divstr");
    
    console.log(str.value,"执行了onMounted");
  })
  onBeforeUpdate(()=>{
    console.log(str.value,"执行了onBeforeUpdate");
  })
  onUpdated(()=>{
    console.log(str.value,"执行了onUpdated");
  })
  onBeforeUnmount(()=>{
    console.log("执行了onBeforeUnmount");
  })
  onUnmounted(()=>{
    console.log("执行了onUnmounted");
    
  })
  // button
  const HandleClick=()=>{
    man.name = "小红"
    console.log(man.name);
  }
  
</script>

<style>

</style>