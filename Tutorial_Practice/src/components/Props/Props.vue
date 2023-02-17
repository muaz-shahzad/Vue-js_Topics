<template>
    <h1>Props</h1>
    <PropA :newmessage="get_Message"/>
    <PropB :name="name" />

    <h2>{{ childUser }}</h2>
</template>


<script>
import PropA from './PropA.vue';
import PropB from './PropB.vue';

export default {
    name: "Props-comp",
    components: { PropA, PropB },

    data()
    {
        return{
            name: "Student",
            childUser: ""
        }
    },
    methods:{
        // get_Message(a){
        //     alert(a)
        // }
        get_Message(a)
        {
            this.childUser = a
        }

    }
}

</script>