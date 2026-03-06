<template>
  <section>
<h1>Projects</h1>
<p>A few things I've built</p>

<!---->
<ul> unordered list = bulleted list </ul>
<ol>: ordered list = numbered list </ol>
<li>: list item </li>

<ul>
<li>
  v-for=project in projects
  :key="project.id"

>
<div>{{ project.name }}</div>
<div>{{ project.desc }}</div>
<span>{{ project.tag }}</span>
</li>

</ul>

</section>
</template>

<script>
let projects =[
  { id: 1
name: "playerpree"
desc: "desc",
tag: "vue 3"
  }, 
  
  let projects =[
{ id: 2,
name: "Hart"
desc: "desc",
tag: "vue 3"

},

let projects =[
{ id: 3,
name: "Boss"
desc: "desc",
tag: "vue 3"

},

</script>

<style>
project-list {
  list-style: none ;
  display: flex;
  gap: 1rem;
  max-width: 60px;
}
project-item {
  background-color:mediumvioletred; 
  border: 1px; solid;
  border-radius: 8px;

}
  </style>