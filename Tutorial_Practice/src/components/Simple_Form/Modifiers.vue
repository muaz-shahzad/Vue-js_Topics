<template>
    <h1>Modifiers</h1>
    <!-- Lazy modifier example -->
    <label for="Name">Name </label>
    <input type="text" name="Name" v-model.lazy.trim="name">

    <p>Data is {{ name }}</p>

    <label for="Department">Department </label>
    <input type="text" name="Department" v-model.trim="depar">

    <p>Data is: {{ depar }}</p>


    <!-- Number -->
    <label for="Department">Department </label>
    <input type="number" name="Department" v-model="num">

    <p>Data is: {{ typeof(num) }}</p>

</template>


<script>
export default {
    name: 'Modifiers-comp',
    data() {
        return {
            name: '',
            depar: '',
            num :''
        }
    },
}
</script>