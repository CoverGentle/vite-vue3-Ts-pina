
<template>
  <p>{{num}}</p>
  <button @click="handleClick">num</button>
</template>

<script setup lang='ts'>
  let props = defineProps({
    num:{
      type:Number,
      default:90
    }
  })
  const emit = defineEmits<{
  //  (event: 'change'): void
  // update:固定写法，后面的变量是父子组件中v-model:后面的这个变量
   (event: 'update:num', n: number): void
  }>()
  let n = props.num
  const handleClick= () =>{
    n++
    emit('update:num',n)
  }

</script>

<style lang='less' scoped> 
  
</style>