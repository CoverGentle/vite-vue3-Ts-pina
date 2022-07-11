<template>
  <div>
    <h1>to系列</h1>
    <p v-for="item in areaInfo">
      {{item.name}}-{{item.date}}
    </p>
  </div>
</template>
<script setup lang="ts">
import { onMounted, reactive,toRefs } from 'vue';
import {getInfo} from '../../api/index'
  let areaInfo:any[] = []
  
  onMounted(() => {
    getCovidInfo()
  })
  const getCovidInfo = async () => {
    const res  = await getInfo()
    const{areaTree} = res.data.diseaseh5Shelf
    areaInfo = areaTree[0]
    console.log(areaInfo);
  }
</script>