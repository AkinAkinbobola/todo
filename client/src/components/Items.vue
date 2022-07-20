<template>
  <div v-for="(item, i) in todo" :key="item.id">
    <Item :item="item" :i="i" :todo="todo" @update-todo="updateTodo" @delete="deleteItem"/>
  </div>
</template>

<script>
import Datepicker from "@vuepic/vue-datepicker";
import Item from "@/components/Item";

export default {
  name: "Items",
  components:{
    Datepicker,
    Item
  },
  props:["todo"],
  data(){
    return{
      date: null,
      isChecked: true
    }
  },
  methods:{
    updateTodo(updated, id){
      this.$emit("update-todo", updated, id)
    },
    deleteItem(id, i){
      this.$emit("delete", id, i);
    }
  }


}
</script>

<style scoped>


</style>
