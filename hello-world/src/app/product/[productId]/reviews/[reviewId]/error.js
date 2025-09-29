"use client"

import {useRouter} from "next/navigation"
import {startTransition} from "react"

export default function ErrorBoundary({error,reset}){
    const router = useRouter();
    const reload = () => {
        startTransition(()=>{
            router.refresh()
            reset()
        })
    }
    return(
        <div>
            {error.message} <button>Try again</button>
        </div>
    )
}