"use client"
import Link from "next/link"
import {use} from "react"

export default function NewsArticle({
    params,
    searchParams
}){
    const {id} = use(params);
    const {lang} = use(searchParams);

    console.log("id",id)
    console.log("lang",lang)
    return(
        <div>
            <h1>News Article #{id}</h1>
            <p>Reading in {lang.toUpperCase()}</p>
        </div>
    )
}