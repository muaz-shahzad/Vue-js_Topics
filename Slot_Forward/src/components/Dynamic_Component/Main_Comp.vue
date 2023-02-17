<template>

<h4>Main Comp</h4>

<button @click="tab='Dynamic_Comp_A'">Load A</button>
<button @click="tab='Dynamic_Comp_B'">Load B</button>
<button @click="tab='Dynamic_Comp_C'">Load C</button>

<!-- <Dynamic_Comp_A/>
<Dynamic_Comp_B/>
<Dynamic_Comp_C/> -->

<component :is="tab" />

</template>


<script>
import Dynamic_Comp_A from './Dynamic_Comp_A.vue';
import Dynamic_Comp_B from './Dynamic_Comp_B.vue';
import Dynamic_Comp_C from './Dynamic_Comp_C.vue';

export default {
    name: 'Main_Comp',
    components: { Dynamic_Comp_A,Dynamic_Comp_B,Dynamic_Comp_C },

    data()
    {
        return{
            tab: ''
        }
    }
}
</script>