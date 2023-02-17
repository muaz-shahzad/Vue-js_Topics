<template>
    <h1>Reuse Component</h1>
    <ul style="list-style: none;">
        <li v-for="st in User" :key="st.id">
            <User :data="st" :get_Data="get_Data"/>
        </li>
    </ul>
</template>

<script>
import User from './User.vue';

export default {
    name: "Parent_Resuse",
    components: { User },


    data() {
        return {
            User: [
                {
                    id: 0,
                    name: "M Muaz Shahzad",
                    Depar: "BSE"
                },
                {
                    id: 1,
                    name: "TALHA",
                    Depar: "CSS"
                }, {
                    id: 2,
                    name: "HASSAN",
                    Depar: "IT"
                },
                {
                    id: 3,
                    name: "Shahab",
                    Depar: "IT"
                },
            ],
        }
    },

    methods:{
        get_Data(id)
        {
            return alert(id)
        }
    }
}
</script>