<script setup>

</script>

<template>
    <form @:submit.prevent="addUser">{{ newUser }}</form>
<input type="text" name="username" v-model="newUser" >
<button class="p-2 px-5 bg-green-500 disabled:bg-slate-400" :disabled="newUser.length == 0">add</button>
</template>
