<template>
    <h1>Slot in Vue js</h1>
    <!-- <Child_Slot name="Passing prop1"/>
                <Child_Slot name="Passing prop2"/>
                <Child_Slot name="Passing prop3"/> -->


    <!-- <Child_Slot>
                <p>Passing Heading </p>
            </Child_Slot>
            <Child_Slot>
                <a href="">Passing Link Href</a>
            </Child_Slot>
            <Child_Slot>
                <img src="https://i.stack.imgur.com/GsDIl.jpg" alt="">
            </Child_Slot> -->

    <!-- Multiple SLots -->


    <Child_Slot>
        <template v-slot:S1>
            <p>Passing Heading </p>
        </template>
        <template v-slot:S2>
            <a href="">Passing Link Href</a>

        </template>
</Child_Slot>
</template>


<script>
import Child_Slot from './Child_Slot.vue';

export default {
    name: "Slots_Vue",
    components: { Child_Slot }
}
</script>