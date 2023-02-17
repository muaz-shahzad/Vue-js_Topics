<template>
    <h1>{{ msg }}</h1>
    <A_Comp msg="A Compoenent Display via helloworld component"/>
    <Practice/>
</template>

<script>
import A_Comp from './A_Comp.vue';
import Practice from './Practice.vue';
export default {
    name: "HelloWorld",
    props: {
        msg: String
    },
    components: {
    A_Comp,
    Practice,
}
}
</script>
