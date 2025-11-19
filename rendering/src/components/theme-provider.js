"use client"
import {createContext, useContext} from "react"
const defaultTheme = {
    colors: {
        primary:"#007bff",
        secondary:"#6c757d",
    }
}

const ThemeContext = createContext = createContext(defaultTheme)

export const ThemeProvider = ({children}) => {
    return (
        <ThemeContext value = {defaultTheme}>
            {children}
        </ThemeContext>
    )
}

export const useTheme = () => useContext(ThemeContext)