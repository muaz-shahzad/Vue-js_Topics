<template>

    <h1>Ref In Vue</h1>


    <input type="text" ref="input">
    <button v-on:click="get_Data">Click Me </button>
</template>


<script>
export default {
    name: 'Ref-comp',
    methods:{
        get_Data()
        {
          this.$refs.input.focus()
          let val = this.$refs.input.value;
          alert(val)
        }
    }


}
</script>