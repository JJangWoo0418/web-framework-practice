import {headers} from "next/headers"

export async function GET(request) {
    console.log("Profilepage")

    const headersList = await headers()
    console.log(headersList.get("Authorization"))

    return new Response("<h1>Profile data</h1>",{
        headers:{
            "Content-Type":"text/html",
            "Set-Cookie":"theme=dark"
        }
    })
}