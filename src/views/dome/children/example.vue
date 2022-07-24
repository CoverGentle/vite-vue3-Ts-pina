<template>
  <div>
    <p>这是子组件</p>
    <p>{{num}}</p>
    <button @click="handleClick">按钮</button>
  </div>
</template>

<script setup lang='ts'>
import {defineProps,defineEmits} from 'vue'
defineProps({
  num:{
    type:Number,
    default:20
  }
})

// 子传父需要先定义好emit这个方法 
const emit = defineEmits<{
  // (event: 'fn'): void
  (event: 'fn', id: string): void
}>()

const handleClick =()=>{
  emit("fn",'你好')
}

  
</script>

<style lang='less' scoped> 
  
</style>