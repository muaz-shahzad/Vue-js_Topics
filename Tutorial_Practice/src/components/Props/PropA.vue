<template>
    <h1>Props A</h1>

    <h3>{{ name }}</h3>

    <button v-on:click="newmessage(message)" >Child Component Button</button>
  
  </template>
  
  
  <script>
  export default{
      name: 'PropA-comp',
      data()
      {
         return{
            message: "Child to Parent transfer"
         }
      },
      props:{
        name: String,
        newmessage: Function
      }
  }
  
  </script>