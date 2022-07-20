<template>
  <div class="list-item">
    <div class="left">
      <input type="checkbox" class="checkbox" :checked="checked" v-model="checked">
      <div class="content"><input type="text" v-model="title"    :class="[checked ? 'crossed': '' , 'todo-text']">
      </div>
    </div>
    <Datepicker v-model="date" style="width: 15vw"></Datepicker>


    <div class="icons">
<!--      <button @click="update" v-if="toggleEdit"><font-awesome-icon icon="fa-solid fa-pen-to-square" class="fa-2x" style="color: white; margin: 5px"/></button>-->
      <button @click="update"><font-awesome-icon icon="fa-solid fa-floppy-disk" class="fa-2x" style="color: white; margin: 5px"/></button>
      <button @click="this.$emit('delete', this.item.id, this.i)"><font-awesome-icon icon="fa-solid fa-xmark" class="fa-2x" style="color: red; margin: 5px"/></button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

export default {
  name: "Item",
  components:{
    Datepicker
  },
  props:{
    item: Object,
    i: Number,
  },
  data(){
    return{
      checked: false,
      date : null,
      title : "",
      // toggleEdit: false
    }
  }
  ,
  methods:{
    update(){
      const updated = {
        ...this.item,
        title: this.title,
        deadline: this.date,
        completed: this.checked
      }
      this.$emit("update-todo", updated, this.item.id)
    }
  },
  mounted() {
    this.checked = this.item.completed
    this.date = this.item.deadline
    this.title = this.item.title
  }
}
</script>

<style scoped>
.left{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
.checkbox{
  width: 30px;
  height:30px;
}

.todo-text{
  all: unset;
}

.todo-text{
  color: #efefef;
  font-weight: 800;
}
.crossed{
  color: #efefef;
  font-weight: 800;
  text-decoration: line-through;
}
.list-item{
  display: flex;
  align-items: center;
  background-color: #363a3c;
  padding: .625rem 1.25rem;
  margin: 20px;
  border-radius: 5px;
  justify-content: space-between;
}
.icons{
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.content{
  font-size: 24px;
  color: #efefef;
}


</style>
