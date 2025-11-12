import { Suspense } from "react";
import { Product } from "@/components/product"
import { Reviews } from "@/components/reviews"

export default function ReviewPage(){
    return(
        <div>
            <h1>review page</h1>
            <Suspanse fallback = {<p>Loading</p>}>
                <Product/>
            </Suspanse>

            <Suspanse fallback = {<p>Loading</p>}>
                <Reviews/>
            </Suspanse>
        </div>
    )
}