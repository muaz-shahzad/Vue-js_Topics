<template>
    <h1>If Else Statement</h1>


    <h4 v-if="show">If condition</h4>
    <h4 v-else>Else condition</h4>
    <!-- Toogle -->
    <button v-on:click="show=!show" >Toogle</button>

</template>

<script>
export default{
    name: 'If_Else',
    data()
    {
        return{
            show:false
        }
    }
}
</script>