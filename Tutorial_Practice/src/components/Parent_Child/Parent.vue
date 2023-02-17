<template>
    <h1>Parent Component</h1>
    <Child name="This is child component" :details="User"  :get_Data="get_Data" />
</template>

<script>
import Child from './Child.vue';

export default {
    name: "Parent-comp",
    components: { Child },

    data() {
        return {
            User: {
                name: "Hassan",
                Department: "BSE"
            }
        }
    },
    methods:{
        get_Data()
        {
           return alert("Child Function Working")
        }
    }
}
</script>