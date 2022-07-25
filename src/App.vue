<template>
<div id="app">
  <router-link to='/home'>ref</router-link> |
  <router-link to='/login'>reactive</router-link> |
  <router-link to='/to'>to</router-link> |
  <router-link to='/dome'>dome</router-link> |
  <router-link to='/test'>test</router-link> |
  <router-link to='/father'>father</router-link> |
  <router-link to='/slot'>slot插槽</router-link> |
  <br>
  <br>
  <br>
  <router-view />
</div>
</template>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center; 
  color: #2c3e50; 
  margin-top: 60px; 
}

</style>
