<template>
    <!-- <h5>Name  {{name}}</h5>
    <h5>Email {{email}}</h5>
    <h5>Phone {{number}}</h5>
    <h5>Phone {{number=1234}}</h5>
    <h5>Department {{getInfo()}}</h5> -->
    
    <!-- Methods -->
    <h5>Info 1 {{getdata("Hassan")}}</h5>
    <h5>Info 2 {{getdata("Awais Asad")}}</h5>
    <!-- Mulitlpte Function -->
    <h5>#######Students Data#######</h5>
    <!-- Static pass info -->
    <h5>Student 1: {{getAll()}}</h5>
    <!-- Dynamically pass infot -->
    <h5>Student 2: {{getAllInfo("Talha","BSE")}}</h5>
    <!-- Using This word  -->
    <h5>Student 3: {{Infodata()}}</h5>

</template>


<script>

export default {
    name: 'Practice-comp',

    data()
    {
        return{
            email: 'muazshahzad667@gamil.com',
            name: 'Muaz shahzad',
            number: "030302195673",
            getInfo:function()
            {
                   return "Software Engineering"
            }
        }
    },
    methods:{
        getdata(a)
        {
            return a;
        },
        // Dyanically Method for data
        getAllInfo(a,b)
        {
            return {
                name: a,
                department: b
            }
            
        },
        // Static Method for data
        getAll()
        {
            return {
                name: "Awais",
                department: "BSE"
            }
            
        },
        // Using this keyword
        Infodata()
        {
            return {
                name: this.name,
                email: this.email
            }
            
        }

    }
}

</script>