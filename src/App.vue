<script setup>
import { ref } from 'vue';
import CHeader from './components/CHeader.vue';
import CList from "./components/CList.vue"

const users = ref(['Tima', 'Zafar', 'Nigina', 'Roma']);

const newUser = ref('');

const addUser = () => {
  if (newUser.value == '') {
    alert("vvedite imya");
    return;
  }
  users.value.push(newUser.value);
  newUser.value = "";
}
</script>

<template>
  <CHeader></CHeader>
  <div class="text-center">
    app
  </div>

  <CList v-bind:users="users"></CList>
  <form @:submit.prevent="addUser">
    {{ newUser }}
    <input type="text" name="user_name" v-model="newUser" >
    <button class="p-2 px-5 bg-green-500 disabled:bg-slate-400" :disabled="newUser.length == 0">
      add user
    </button>
  </form>
</template>
