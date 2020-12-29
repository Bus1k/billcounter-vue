<template>
    <base-button classes="btn-lg btn-success btn-block">
        Add Bill
    </base-button>
    <table class="table table-bordered">
        <thead>
            <tr>
                <th scope="col" v-for="header in headers" :key="header">
                    {{ header }}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-if="items.length === 0">
                <td :colspan="headers.length" scope="row" class="text-center">
                    No data
                </td>
            </tr>
            <tr v-else v-for="item in items" :key="item.id">
                <!-- <td v-for="data in item" :key="data.id">{{ data }}</td> -->
                <td>{{ item.id }}</td>
                <td>{{ item.user_id }}</td>
                <td>{{ item.description }}</td>
                <td>{{ item.amount }}</td>
                <td>{{ item.photo_name }}</td>
                <td>{{ item.created_at }}</td>
                <td>{{ item.updated_at }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import bills from "../../api/bills.js";

export default {
    data() {
        return {
            headers: [
                "ID",
                "User",
                "Description",
                "Amount",
                "Photo",
                "Created Date",
                "Updated Date",
                "Action",
            ],
            items: [],
        };
    },
    methods: {
        getAll() {
            bills.getAll().then((response) => {
                console.log(response);
                this.items = response.data;
            });
        },
    },
    beforeMount() {
        this.getAll();
    },
};
</script>

<style></style>
