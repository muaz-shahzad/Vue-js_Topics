<template>
<!-- <slot></slot> -->


<!-- Multiple Slots -->

<slot name="S1"><h4>Default Data</h4></slot>
<slot name="S2"><h4>Default Data</h4></slot>
<slot name="S3"><h4>Default Data</h4></slot>
<slot name="S4"><h4>Default Data</h4></slot>
</template>


<script>
export default {
    name: 'Child_Slot',
    props: {
        name: String
    }
}
</script>