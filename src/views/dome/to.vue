<template>
  <div>
    <h1>to系列</h1>
    <p v-for="item in areaTreeInfo[0]" :key="item.name">
      {{item.name}}-{{item.date}}--{{item.adcode}}
    </p>
  </div>
</template>
<script setup lang="ts">
import { onMounted, reactive,toRefs,toRaw } from 'vue';
import {getInfo} from '../../api/index'
import {CovidData } from '../../modal/index'
  let areaTreeInfo:any[] = reactive([])
  onMounted(() => {
    getCovidInfo()
  })

  const getCovidInfo = async () => {
    const {data}  = await getInfo()
    const {diseaseh5Shelf} = data
    const {areaTree} = diseaseh5Shelf
    areaTreeInfo.push(areaTree[0].children)
    console.log(areaTreeInfo);
    
    
    

    // const{ areaTree } = res.data.diseaseh5Shelf
    // data.world.areaTree = JSON.parse(JSON.stringify(areaTree[0]))
    // const {children} = areaTree[0]
    // areaTreeInfo = children 
    // console.log(areaTreeInfo);
  }
</script>