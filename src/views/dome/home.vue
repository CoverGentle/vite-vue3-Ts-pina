<template>
  <div>
    <h1>ref全家桶</h1>
    <button @click="handleClickRef">点击ref</button>
    <p>{{masssage}}</p>
    <button @click="handleClickCustomRef">点击CustomRef</button>
    <p>{{msg}}</p>
    <button @click="handleClickIsRef">点击isRef</button>
    <br>
    <br>
    <button @click="handleClickShallowRef">点击ShallowRef</button>
    <p>{{shallMsg}}</p>
    <button @click.prevent="handleClickTriggerRef">点击handleClickTriggerRef</button>
    <p>{{triggerMsg}}</p>


    <!-- <p>{{person}}</p> -->
  </div>
</template>
<script setup lang="ts">
import { ref,Ref,isRef,shallowRef,customRef,triggerRef } from 'vue';
// ref
let masssage:Ref<String> = ref('ref全家桶之ref')
const handleClickRef = ()=>{
  masssage.value = 'ref'
}
// 自定义ref-----customRef
function Myref<T>(value:T){
  return customRef((track,trigger)=>{
    return{
      get(){
      console.log('get');
      track()  //追踪当前数据
      return value
    },
    set(newValue:T){
      console.log('set');
      value = newValue
      trigger() //触发响应,即更新界面
    }
    }

  })
}
let msg = Myref('电脑')
const handleClickCustomRef = ()=>{
  msg.value ='手机' 
}
// 判断是不是一个ref对象--isRef

let notRef:string = '你好'
const handleClickIsRef = () =>{
  console.log(isRef(notRef),'notRef的判断');
  console.log(isRef(msg),'msg的判断');
  
}

// shallowRef---
let shallMsg = shallowRef({
  name:'shallowRef--跟踪value的变化'
})
const handleClickShallowRef=()=>{
  shallMsg.value.name = 'shallowRef的变化'  //不可响应
  // shallMsg.value = {name:'shallowRef的变化'}  //可响应
}

// triggerRef 强制跟新页面DOM
let triggerMsg = shallowRef({
  name:'triggerRef--跟踪value的变化'
})
const handleClickTriggerRef=()=>{
  triggerMsg.value.name = 'triggerRef的变化'  //不可响应
  // shallMsg.value = {name:'shallowRef的变化'}  //可响应
  triggerRef(triggerMsg)
}

</script>
<style lang="scss" scoped>
  
</style>

