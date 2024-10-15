"use client"

import { createContext, useContext, useState } from "react";
import { PAGES } from '@/utils/constantes'

const Control = createContext(null);

const ControlProvider = ({children}) => {
    const [current, setCurrent] = useState(1)
    // const [next, setNext] = useState(null)

    // la logique d'incremebtation

    const goToNext = () => {
        if(current === Object.keys(PAGES).length) return
        setCurrent(prev => prev + 1)
    }
    const goToPrev = () => {
        if(current === 1) return
        setCurrent(prev => prev - 1)
    }

    const values = {
        currentComponent: PAGES[current](),
        current,
        goToNext,
        goToPrev
    }

    return (
        <Control.Provider value={values}>
            {children}
        </Control.Provider>
    )
}

const useControl = () => {
    const context = useContext(Control)
    if(!context) throw new Error("Le context n'est pas disponible")
    return context
}

export {ControlProvider, useControl}
