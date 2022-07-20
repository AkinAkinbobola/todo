<template>
  <header>
    <h1>Todo List App</h1>
    <h3 v-if="length">{{length}} items remaining</h3>
  </header>
</template>

<script>
export default {
  name: "Header",
  props:["length"]
}
</script>

<style scoped>
h1, h3{
  color: #efefef;
}
header{
  text-align: center;
}
</style>
