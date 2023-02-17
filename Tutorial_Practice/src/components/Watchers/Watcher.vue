<template>
    <h1>Watcher</h1>

    <p>{{ count }}</p>
    <button v-on:click="count=count+1"> + </button>
    <button v-on:click="count=count-1"> - </button>
</template>


<script>

export default {
    name: "Watcher-comp",

    data()
    {
        return{
            count: 0
        }
    },
    watch:{
        count(val)
        {
            if(val>5)
            {
                alert("Stop Counting")
                this.count = 0
            }
            if(val<0)
            {
                alert("Stop Decreasing")
                this.count = 0;
            }
        }
    }
}

</script>