<template>
    <h1>Comp A</h1>
    <Comp_B  data="some_Data" id="cop"/>

</template>


<script>
import Comp_B from './Comp_B.vue';

export default {
    name: "Comp_A",
    components: { Comp_B }
}

</script>