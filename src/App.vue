<script setup>
import { ref } from 'vue';
import listinvite from './components/listinvite.vue'


const users = ref(['cancer'])

const newUser = ref('');
</script>

<template>
<listinvite v-bind:users="users"></listinvite>
<form action="" @:submit.prevent="addUser">
{{ newUser }}
<input type="text" name="user_name" v-model="newUser">
<button class="py-5 px-5 bg-green-600 disabled:bg-slate-400" :disabled="newUser.length == 0">add User</button>


</form>
</template>



<form @:submit.prevent="addUser">{{ newUser }}</form>
<input type="text" name="username" v-model="newUser" >
<button class="p-2 px-5 bg-green-500 disabled:bg-slate-400" :disabled="newUser.length == 0">add</button>
