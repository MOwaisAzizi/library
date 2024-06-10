import { useEffect, useState } from "react";

const UseDarkMode = () => {
    const [theme, settheme] = useState('light')

    const toggleTheme = () => {
        if (theme === 'light') {
            window.localStorage.setItem('theme', 'dark')
            settheme('dark')
        } else if (theme === 'dark') {
            window.localStorage.setItem('theme', 'light')
            settheme('light')
        }
    }
    useEffect(() => {
        const localtheme = window.localStorage.getItem('theme')
        if (localtheme) {
            settheme(localtheme)
        }
    }, [])
    return [theme, toggleTheme]
}
export default UseDarkMode