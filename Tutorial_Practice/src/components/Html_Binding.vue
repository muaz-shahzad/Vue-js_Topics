<template>
    <h1>Html_Binding</h1>
    <p>{{ text }}</p>
    <p v-html="tag"></p>

    <!-- Class Binding -->
    <h1 :class="applyStyle">Class Binding</h1>

    <button v-on:click="colorfull = !colorfull, err = !err">Change Color</button>

</template>

<script>
export default {
    name: 'If_Else',
    data() {
        return {
            colorfull: true,
            err: true,
            text: "Muaz",
            tag: "<h3>This is html tag</h3>"
        }
    },
    computed: {
        applyStyle() {
            return {
                green: this.colorfull,
                red: this.err
            }
        }
    }
}
</script>

<style scoped>
.green {
    color: green !important;
}

.red {
    background-color: cyan;
}
</style>