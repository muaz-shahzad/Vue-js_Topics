<template><Comp_B /></template>


<script>
import Comp_B from './Comp_B.vue';

export default {
    name: "Comp_A",
    props: {
        data: String
    },
    components: { Comp_B }
}

</script>