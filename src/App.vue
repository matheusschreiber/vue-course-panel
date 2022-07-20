<template>
  <NavBar @go-to="(n)=>atual=n"/>
  <div class="main-container">
    <h1>{{title[atual]}}</h1>

    <!-- <MainPage v-show="atual==0" @go-to="(n)=>atual=n"/> -->
    <MainPage v-show="atual==0"/>
    <CoursesPage v-show="atual==1"/>
    <TeachersPage v-show="atual==2"/>
    <StudentsPage v-show="atual==3"/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import MainPage from './components/pages/MainPage.vue'
import CoursesPage from './components/pages/CoursesPage.vue'
import TeachersPage from './components/pages/TeachersPage.vue'
import StudentsPage from './components/pages/StudentsPage.vue'

export default {
  data() {
    return {
      atual: 0,
      title: ['PÁGINA INICIAL', 'CURSOS DA GRADUAÇÃO', 'DOCENTES', 'DISCENTES'],     
    }
  },
  name: 'App',
  components: {
    NavBar,
    MainPage,
    CoursesPage,
    TeachersPage,
    StudentsPage
  },
}
</script>


