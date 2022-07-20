<template>
  <div class="items">
    <form @submit="addTodo">
      <input type="text" placeholder="Add a new item" required v-model="title">
      <Datepicker v-model="date" style="width: 20vw"></Datepicker>
      <button><font-awesome-icon icon="fa-solid fa-plus" style="margin: 10px; color:#efefef" class="fa-3x"/></button>

    </form>


  </div>


</template>

<script>
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import axios from "axios";

export default {
  name: "AddItem",
  components:{
    Datepicker
  },
  data(){
    return{
      date: new Date(),
      title : ""
    }
  },
  props:{
  }

  ,
  methods:{
    addTodo(e){
      e.preventDefault();

      const newTodo = {
        title: this.title,
        deadline: this.date
      }

      this.$emit("add-todo", newTodo)
      this.title = ""
      this.date = new Date()
    }

  }
}
</script>

<style scoped>


input{
  width: 50vw;
  background-color: #363a3c;
  border: none;
  font-size: 1.125rem;
  font-weight: 200;
  padding: .9375rem 1.875rem;
  color: #efefef;
  -webkit-transition: all .4s ease;
  transition: all .4s ease;
  -webkit-box-shadow: 0 0 0 0.125rem #227f8f;
  box-shadow: 0 0 0 0.125rem #227f8f;
}
form{
  text-align: center;
}

.items{
  margin: 20px;
}
form{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
}
Datepicker{
  width: 10px;
}

</style>
