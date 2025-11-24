"use client"

import { useState } from "react"
import  CcTwo from "./cc-two"

export default function CcOne({children}){
    const [search, setSearch] = useState()
    return(
        <>
            <h1>Client components one</h1>
            <CcTwo/>
            {children}
        </>
    )
}