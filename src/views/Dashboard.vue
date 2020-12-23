<template>
    <Navbar />
    <bill-table />
    <section id="main"></section>
</template>

<script>
import Navbar from "@/components/nav/Navbar.vue";
import BillTable from "../components/dashboard/BillTable.vue";

export default {
    components: {
        Navbar,
        BillTable,
    },
};
</script>

<style></style>
