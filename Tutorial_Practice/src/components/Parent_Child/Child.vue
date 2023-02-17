<template>
    <h1>{{name}}</h1>
    <p>{{ details.name }}</p>
    <p>{{ details.Department }}</p>


    <br>
    <button v-on:click="get_Data()">Click Child Button</button>

 </template>
 
 <script>
     export default{
         name: 'Child-comp',
         props:{
            name: String,
            details:Object,
            get_Data: Function
         }
     }
 </script>