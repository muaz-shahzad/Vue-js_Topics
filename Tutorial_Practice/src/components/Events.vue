<template>
<h2>Event Component </h2>


<button v-on:click="test()">Click Me</button>

<!-- Passing Data -->
<br>
<br>
<button v-on:click="data('Button 1 Clicked')">Click Me</button>
<button v-on:click="data('Button 2 Clicked')">Click Me</button>
<br>
<br>
<br>
<!-- Double click event -->
<button v-on:dblclick="double_Click()">Click Me</button>
<br>
<br>
<br>
<!-- On Mouse Move event -->
<!-- <h3 v-on:mousemove="Mouse_Move()">ON MOUSE MOVE</h3 > -->
<!-- Count Function and value   -->
<p >Count : {{count}}</p>
<button v-on:click="count_num()">Increment</button>
<button v-on:click="count_numdec()">Decrement</button>
<br>
<br>
<br>
<!-- Two Way Binding -->
<input type="text" v-model="name">
<p>Name: {{ name }}</p>
</template>

<script>
export default {
    name: 'Events-comp',
    data()
    {
        return{
           count: 0,
           name: ''
        }
    },
    methods:{
        test()
        {
            alert("Function Work")
        },
        data(a)
        {
            alert(a)
        },
        double_Click()
        {
            alert('double click working')
        },
        Mouse_Move()
        {
            alert("Funciton Working")
        },
        count_num()
        {
          return this.count = this.count+1
        },
        count_numdec()
        {
          return this.count = this.count-1

        }
    }
}
</script>

