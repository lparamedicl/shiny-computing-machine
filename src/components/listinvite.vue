<script setup>
defineProps ({
    users: {
        type: Array,
        default: [],
    }
});
</script>

<template>
<ul>
    <li v-for="(user, index) in users">
        {{ index + 1 }}. {{ user }}
    </li>
</ul>
</template>