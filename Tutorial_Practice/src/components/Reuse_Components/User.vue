<template>
    <!-- <h4>User Component</h4> -->

    <ul style="list-style: none;">
        <li>
            <br>
            Name: {{ data.name }}
            <br>
            Deparment: {{ data.Depar }}
        </li>
    </ul>

    <button v-on:click="get_Data(data.id)">Alert </button>
</template>

<script>
export default {
    name: 'User-comp',
    props:{
        data:Object,
        get_Data: Function
    }

}
</script>