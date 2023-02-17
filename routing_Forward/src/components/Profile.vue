<template>
    <h2>{{ profile }} page</h2>
</template>
  
<script>
import { useRoute } from 'vue-router';
export default {
    name: 'Profile-comp',
    data() {
        return {
            profile: ''
        }
    },
    mounted() {
        const route = useRoute();
        console.log("route", route.params.name)
        this.profile = route.params.name
    }
}
</script>