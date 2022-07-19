<template>
  <div class="list-container">
    <ul class="list-item" >
      <ListItem v-for="(course, pos) in courses" :key="pos" :item="course.item" :icon="course.icon"/>
      <ListItem :key="pos+1" :item="'ADICIONAR CURSO'" :icon="'✨'" @click="addcourse"/>
    </ul>        
  </div>
</template>

<script>
import ListItem from '../ListItem.vue'

export default {
  name: 'CoursesPage',
  components:{
    ListItem
  },
  data() {
    return {
      courses: [
        {'item':'Engenharia da Computação', 'icon':'🖥️' },
        {'item':'Engenharia Elétrica', 'icon':'⚡' },
        {'item':'Engenharia Mecânica', 'icon':'🔧' },
      ],
    }
  },
  methods: {
    addcourse(){
      // courses.push({'item':'Teste', 'icon':'🧪'})
    }
  },
}
</script>

<style>@import '../../styles/styles.css';</style>
