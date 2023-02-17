<template>
    <!-- <h1>Comp B</h1> -->
    <div>
        <p>Talha</p>
        <p v-bind="$attrs">{{ data }}</p>
    </div>

</template>


<script>
export default {
    name: 'Comp_B',
    inheritAttrs: false,
    props: {
        data: String
    }

}

</script>