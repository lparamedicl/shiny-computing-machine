const user = ref(null)

const users = [
    {
        name: 'Romashka',
        email: 'romashka@main.com',
        password: 'qwerty',
    }
    {
        name: 'timoha',
        email: 'rofls@mac.com',
        password: 'qwerty'
    }
]

const isAuthed = computed(() => {
    return !!user.value
})

const onLogin (email, password) => {
    
}