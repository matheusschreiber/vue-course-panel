<template>
  <div class="list-container">
    <ul class="list-item">
      <ListItem :item="'José Buiz Lorba'" :icon="'⚡'" />
      <ListItem :item="'Fanselmo Anzzera'" :icon="'⚡'"/>
      <ListItem :item="'Paulo Sortolon'" :icon="'🖥️'"/>
    </ul>        
  </div>
</template>

<script>
import ListItem from '../ListItem.vue'

export default {
  name: 'TeachersPage',
  components:{
    ListItem
  }
}
</script>

<style>@import '../../styles/styles.css';</style>
