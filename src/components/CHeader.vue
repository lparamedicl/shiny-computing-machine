<script setup>
import { ref } from 'vue';

const isDarkMode = ref(false);

</script>

<template>
    <header>
        <button class="bg-slate-500" v-if="isDarkMode" v-on:click="isDarkMode = false">light mode</button>
        <button class="bg-green-500" v-else v-on:click="isDarkMode = true"> dark mode</button>
    </header>
</template>