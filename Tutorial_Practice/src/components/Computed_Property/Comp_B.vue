<template><!-- <h1>Comp B</h1> -->
    <!-- <div>
            <p>Talha</p>
            <p v-bind="$attrs">{{ data }}</p>
        </div> -->

<p>Result: {{getResult}}</p>
</template>


<script>
export default {
    name: 'Comp_B',
    inheritAttrs: false,
    props: {
        data: String
    },
    data() {
        return {
            dollar: 100,
            rupees: 272
        }
    },
    computed:{
        getResult()
        {
           return (this.rupees*this.dollar)
        }
    }

}

</script>