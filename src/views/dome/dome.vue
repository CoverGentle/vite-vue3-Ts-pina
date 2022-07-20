<template>
  
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, onMounted } from 'vue'
export default defineComponent({
  setup(){
    onBeforeMount(()=>{
      console.log("执行了onBeforeMount");
      
    })
    onMounted(()=>{
      console.log("执行了onMounted");
    })
  }
})
</script>

<style>

</style>