<template>
  <slot name="link" title="哈哈"></slot>
  <p>{{str}}</p>
  <slot name="btn" :text="text"></slot>
  <br>
  <br>
  <br>
  <br>
  <br>
  <div>
    <table>
    <tr>
      <th>姓名</th>
      <th>年龄</th>
      <th>操作</th>
    </tr>
    <tr v-for="item,index in arr2" :key="index">
      <td>{{item.name}}</td>
      <td>{{item.age}}</td>
      <td>
        <slot name="btns" :index="index"></slot>
      </td>
    </tr>
  </table>
  </div>
</template>

<script setup lang='ts'>
import { reactive, ref } from 'vue';
let str = ref('匿名插槽和具名插槽和插槽作用域')
let text = ref('插槽作用域')
let props = defineProps({
  arrList:{
    type:Array,
    default:[]
  }
})
let arr2 = props.arrList as UserType[]
</script>

<style scoped> 
  table{border-collapse: collapse; margin: 0 auto;}
  table,th,td{border: 1px solid #000;}
  th,td{padding: 10px;}
</style>