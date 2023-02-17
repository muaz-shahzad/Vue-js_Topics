<template><!-- <h1>Before_Mount&Mounted</h1> -->


    <h4>Update And Before Update</h4>
    <p ref="count">{{ count }}</p>
    <button v-on:click="count = count + 1">Update count</button>
</template>
    
<script>

export default {
    name: 'Before_Mount&Mounted',
    data() {
        return {
            count: 0
        }
    },

    // beforeMount() {
    //     console.log("Before_Mounted", this.$el)
    // },
    // mounted() {
    //     console.log("Mounted", this.$el)
    // }

    beforeUpdate()
    {
        console.log("Beofre_Update ",this.$refs['count'].textContent)
    },
    updated()
    {
        console.log("Updated ",this.$refs['count'].textContent)
     
    }
}

</script>