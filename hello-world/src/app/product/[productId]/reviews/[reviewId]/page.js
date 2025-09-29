import {notFound} from "next/navigation"

function getRandomInt(count){
    return Math.floor(Math.random()*count);
}

const Review = async ({params}) => {
    const random = getRandomInt(2)
    if(random ===1){
        throw new Error("Error Loading in Review page")
    }

    const temp_params = await params
    const productId = temp_params.productId
    const reviewId = temp_params.reviewId
    if(parseInt(reviewId)>1000){
        notFound();
    }
    return (<h1>{reviewId} for product {productId} </h1>)
}

export default Review

