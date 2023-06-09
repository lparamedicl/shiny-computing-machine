<script setup>
defineProps({
    users: {
        type: Array,
        default: [],
    }
});
</script>

<template>
    <ul v-if="users.length > 0">

        <li v-for="(user, index) in users">
            {{ index + 1 }}. {{ user }}
        </li>
    </ul>
    <p v-else>
        no users found !
    </p>
</template>