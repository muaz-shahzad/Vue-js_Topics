<template>

<h1>Befor_Created_&_Created</h1>
<Before_Mount&Mounted/>
</template>

<script>
export default {
    name: 'Befor_Created_&_Created',
    beforeCreate()
    {
        alert("Befor_Created")
    },
    created()
    {
        alert("Created")

    }
}

</script>