<script setup></script>
<template>
    <div class="flex items-center justify-center min-h-[100vh] bg-slate-500 dark:bg-white">
        <div class="py-[30px] px-[30px] border-8 rounded-3xl">
            <form action="" class="flex flex-col gap-3">
                <div class="flex flex-col"><label for="" class="text-white">Ваша Почта</label>
                <input type="text" placeholder="email" class="w-[200px] bg-transparent outline-none" ></div>
                <div class="flex flex-col">
                <label for="" class="text-white">Ваш Пароль</label>
                <input type="text" placeholder="password" class="w-[200px] bg-transparent outline-none"></div>
                <button class="py-2 px-2 bg-purple-500 rounded-3xl">login</button>
                <button class="py-2 px-2 bg-purple-500 rounded-3xl">Theme switch</button>
            </form>
        </div>
    </div>
</template>