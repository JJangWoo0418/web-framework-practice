import {redirect} from "next/navigation"

export function GET(){
    redirect("/api/v2")
}