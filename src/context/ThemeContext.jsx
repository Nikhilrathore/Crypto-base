import React,{useState, useEffect, createContext} from "react";

// if user come on our site and select a theme the site will remember that.

const getInitialTheme =() => {
    if (typeof window !== 'undefined' && window.localStorage){    //here just we created variable storeprefs storage.
        const storedPrefs = window.localStorage.getItem('color-theme')
        if (typeof storedPrefs === 'string'){
            return storedPrefs;
        }

        const userMedia = window.matchMedia('(prefers-color-scheme: dark)')
        if (userMedia.matches){
            return 'dark';
        }
    }
    return 'light';
}
export const ThemeContext = createContext()
export const ThemeProvider = ({initialTheme, children}) =>{
    const [theme,setTheme] = useState(getInitialTheme);

    const rawSetTheme = (theme) => {
        const root = window.document.documentElement;
        const isDark = theme === 'dark';

        root.classList.remove(isDark ? 'light' : 'dark');
        root.classList.add(theme);

        localStorage.setItem('color-theme',theme)
    }

    if(initialTheme){
        rawSetTheme(initialTheme)
    }

    useEffect(() =>{
        rawSetTheme(theme)
    },[theme])

    return(
        <ThemeContext.Provider value={{theme,setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}