<template>
  <h5>全选/全不选</h5>
  <div>
      <input type="checkbox" v-model="checkAll" /> 全选/全不选

      <ul>
        <li v-for="item,index in list" :key="index">
          <input type="checkbox" v-model="checked[index]"> {{item}}
        </li>
      </ul>
  </div>
</template>

<script setup lang='ts'>
import { computed } from '@vue/reactivity';
import { reactive, toRefs } from 'vue';

let listCheckBox = reactive({
  list:[20,30,40,50],
  checked:[false,false,false,false]
})
let {list,checked} = toRefs(listCheckBox)

let checkAll = computed({
  get(){
    // checkAll受checked这个数组影响
    // checked包含有一个fasle,就应该返回false
    return !listCheckBox.checked.includes(false)
  },
  set(newVal){
    console.log("checkAll发生改变的时候触发",newVal);
    console.log(listCheckBox.checked.map(()=>newVal));
    // 把checked所有值都变成newVal
    listCheckBox.checked = listCheckBox.checked.map(()=>newVal)
    
    
    console.log(listCheckBox.checked);
  }
})
</script>

<style lang='less' scoped> 
  
</style>