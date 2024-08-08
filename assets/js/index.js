const themeSelect = document.getElementById('theme-select')

const initTheme = localStorage.getItem('theme') ?? 'system'

themeSelect.value = initTheme

const changeTheme = (t) => {
    if (t === 'system') {
        const media = window.matchMedia('(prefers-color-scheme: light)')
    
        t = media.matches ? 'light' : 'dark'

        if (localStorage.getItem('theme'))
            localStorage.removeItem('theme')
    } else {
        localStorage.setItem('theme', t)
    }
    
    document.documentElement.className = t
}

changeTheme(initTheme)

themeSelect.addEventListener('change', (event) => {
    changeTheme(event.target.value)
})
