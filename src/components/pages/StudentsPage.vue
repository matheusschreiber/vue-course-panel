<template>
  <div class="list-container">
    <ul class="list-item student-list">
      <ListItem :item="'Matheus Schreiber'" :icon="'🚴🏻‍♂️'" />
      <ListItem :item="'Afonso Salvador'" :icon="'🕺🏻'" />
      <ListItem :item="'Caio Fiorotti'" :icon="'👴🏻'" />
      <ListItem :item="'Lara Tagarro'" :icon="'🥝'" />
      <ListItem :item="'Milla Pereira'" :icon="'👑'" />
      <ListItem :item="'Kevin Jesus'" :icon="'👨🏽‍🦲'" />
      <ListItem :item="'João Paulo'" :icon="'🤹🏻‍♂️'" />
      <ListItem :item="'Thamya Donadia'" :icon="'🐿️'" />
    </ul>        
  </div>
</template>

<script>
import ListItem from '../ListItem.vue'

export default {
  name: 'StudentsPage',
  components:{
    ListItem
  }
}
</script>

<style>@import '../../styles/styles.css';</style>
