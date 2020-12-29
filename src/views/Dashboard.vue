<template>
    <TheNavbar />
    <BillTable />
</template>

<script>
import TheNavbar from "../components/layout/TheNavbar.vue";
import BillTable from "../components/dashboard/BillTable.vue";

export default {
    components: {
        TheNavbar,
        BillTable,
    },
};
</script>
