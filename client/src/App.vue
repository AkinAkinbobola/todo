<template>
  <div class="container">
    <Header :length="length"/>
    <AddItem @add-todo="addItem"/>
    <Items :todo="todo.data" @update-todo="updateTodo" @delete="deleteTodo"/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import AddItem from "@/components/AddItem";
import Items from "@/components/Items";

import axios from "axios"

export default {
  name: 'App',
  components: {
    Header,
    AddItem,
    Items
  },
  data(){
    return{
      todo: [],
      length: ""
    }
  },
  methods:{
    async addItem(todo){
      await axios.post("api/todo/", todo);
      const fetched = await axios.get("api/todo/");
      this.todo = fetched.data;
      this.length = this.todo.data.length
    },
    async updateTodo(updated, id){
      await axios.patch("api/todo/" + id, updated);
      const fetched = await axios.get("api/todo/");
      this.todo = fetched.data;
      this.length = this.todo.data.length
    },
    async deleteTodo(id, i) {
      await axios.delete("api/todo/" + id);
      const fetched = await axios.get("api/todo/");
      this.todo = fetched.data;
      this.length = this.todo.data.length
    },
  },

  async created() {
    const response = await axios.get("api/todo/");
    this.todo = response.data;
    this.length = this.todo.data.length
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Poppins', sans-serif;
}
.container{
  background: #252829;
  width: 100vw;
  height: 100vh;
  /*max-width: 700px;*/
  /*margin: 30px auto;*/
  overflow: auto;
  min-height: 500px;
  /*border: 1px solid steelblue;*/
  padding: 30px;
  /*border-radius: 5px;*/
}
button {
  all: unset;
  cursor: pointer;
}

</style>
