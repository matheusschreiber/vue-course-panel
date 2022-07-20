<template>
  <div class="list-container">
    <ul class="list-item" >
      <ListItem 
        v-for="(course, pos) in courses"
        :key="pos"
        :item="course.item"
        :icon="course.icon"
        @click="edit(pos)"/>

      <div class="edit-item" >
        <input type="text" placeholder="Nome do curso" :value="this.name" @input="event => name = event.target.value"/>
        <p v-if="this.emoji!=''">{{this.emoji}}</p>
        <button @click="save()">{{this.editing?"SAVE":"ADD"}}</button> 
  
        <button @click="deleteCourse(this.id)" v-if="this.editing">DEL</button>
      </div>
      <div class="emoji-picker">
        <VuemojiPicker :style="[this.editing || this.name!=''?{}:{marginTop: '-30rem'}]" @emojiClick="handleEmojiClick" /> 
      </div>

    </ul>        
  </div>
</template>

<script>
import ListItem from '../ListItem.vue'
import { VuemojiPicker } from 'vuemoji-picker'

export default {
  name: 'CoursesPage',
  components:{
    ListItem,
    VuemojiPicker
  },
  data(){
    return{
      courses: [
        {'id': 0,'item':'Engenharia da Computação', 'icon':'🖥️' },
        {'id': 1,'item':'Engenharia Elétrica', 'icon':'⚡' },
        {'id': 2,'item':'Engenharia Mecânica', 'icon':'🔧' },
      ],
      id: Number,
      name: '',
      emoji: '',
      editing: false     
    }
  },
  methods: {
    handleEmojiClick(e) {
      this.emoji = e.unicode
    },
    clear(){
      this.editing = false
      this.name = ''
      this.emoji = ''
      this.id = 0
    },
    isEmpty(){
      if (this.name=='' || this.emoji=='') return 1
      else return 0
    },
    save(){
      if (this.editing) this.courses[this.id] = {'id':this.id, 'item':this.name, 'icon':this.emoji}
      else if (!this.isEmpty()) this.courses.push({'id':this.id+1, 'item':this.name, 'icon':this.emoji})
      this.clear()
    },
    edit(id){
      if (this.editing && this.id==id) this.clear()
      else {
        this.editing = true  
        this.name = this.courses[id].item
        this.emoji = this.courses[id].icon
        this.id = id
      }
    },
    deleteCourse(id){
      this.courses.splice(id, 1)
      this.clear()
    }
  }
}
</script>

<style>@import '../../styles/styles.css';</style>
