<template>
    <li>{{icon}}  <span>{{item}}</span>  {{icon}}</li>
</template>

<script>
export default {
	name: 'ListItem',
	props:[
		'item',
		'icon'
	]
}
</script>

<style>@import '../styles/styles.css'</style>
