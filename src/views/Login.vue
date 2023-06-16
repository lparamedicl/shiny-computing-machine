<script setup>
</script>
<template>
    <form action="" @submit.prevent="onLogin">
    <div>
        <label for="" >
            email
        <input type="email" v-model="email">
        </label>
    </div>
<div>
    <label for="">password
        <input type="password" v-model="password">
    </label>
</div>
<button>login xz</button>
</form>

</template>