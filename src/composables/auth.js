const user = ref(null)

const users = [
    {
        name: 'Romashka',
        email: 'romashka@main.com',
        password: 'qwerty',
    },
    
    {
        name: 'timoha',
        email: 'rofls@mac.com',
        password: 'qwerty'
    },
]

const isAuthed = computed(() => {
    return !!user.value
})

const onLogin = (email, password) => {
    const u = user.find((val) => {
    return val.email == email && val.password == password})

    if (!u) {
        alert("scam")
        return;
    }

    user.value = u;
    
}
