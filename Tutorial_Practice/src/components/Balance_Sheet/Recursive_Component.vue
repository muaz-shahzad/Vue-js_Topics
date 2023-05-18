<template>
    <template>
        <tr>
            <td>{{ item.Financial_Account }}</td>
            <td>{{ item.Level }}</td>
            <td>{{ item.Link }}</td>
        </tr>
        <template v-if="item.children > 0">
            <tr>
                <td colspan="3">
                    <table class="nested-table">
                        <tbody>
                            <recursive-component v-for="child in item.children" :key="child.id"
                                :item="child"></recursive-component>
                        </tbody>
                    </table>
                </td>
            </tr>
        </template>
    </template>
</template>
  
<script>
export default {
    name: "RecursiveComponent",
    props: {
        item: {
            type: Object,
            required: true,
        },
    },
};
</script>
  
<style scoped>
.nested-table {
    width: 100%;
    border-collapse: collapse;
    margin-left: 20px;
    /* Adjust the margin as needed for nested levels */
}
</style>
  