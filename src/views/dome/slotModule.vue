<template>
  <div>
    <slot-child-vue :arrList="list.arr">
      <!-- <template v-slot:btn></template> -->
      <template #btn="scope">
        <button>按钮事件、{{scope.text}}</button>
      </template>
      <template #link="scope">
      <!-- scope这个对象自定义的，但是一般都叫scope
        scope专门收集所对应的子组件内部slot标签上的标签属性，
        作为自己的属性
      -->
        <a href="http://">a标签,{{scope.title}}</a>
      </template>
      <!-- 插槽作用域：在父组件中的子组件标签内部，获取子组件的数据 -->\
      <template #btns="scope">
        <button @click="handleClick(scope.index)">编辑</button>
      </template>
    </slot-child-vue>
    <slot-child-vue :arrList="list.arr">
      <template #btns="scope">
        <button @click="handleChange(scope.index)">编辑</button>
        <button @click="handleDelete(scope.index)">删除</button>
      </template>
    </slot-child-vue>
  </div>
</template>

<script setup lang='ts'>
// import slotChildVue from './children/slotChild.vue';
import { reactive, ref } from 'vue';
let list = reactive({
  arr:[{
    name:'小明',
    age:11
  },{
    name:'小红',
    age:12
  },{
    name:'小白',
    age:14
  },{
    name:'小蓝',
    age:15
  },{
    name:'小绿',
    age:16
  }]
})
const handleClick = (index:number) =>{
  console.log("点击编辑",index);
  console.log(list.arr[index]);
}

const handleChange= (index:number) =>{
  console.log("点击chenge",index);
  console.log(list.arr[index].name);
  // person = list.arr[index].value
}

const handleDelete = (index:number) =>{
  console.log("删除",index);
  list.arr.splice(index,1)
}


</script>

<style lang='less' scoped> 
  
</style>