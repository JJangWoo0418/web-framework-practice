import { resolve } from "styled-jsx/css"

export const generateMetadata =async({
    params
}) =>{
    const productId = (await params).productId

    const title = await new Promise((resolve) =>{ //굳이 예외처리 하는 이유 : 
        setTimeout(()=> {
            resolve(`${productId} with Promise`)
        },100)                     
    })
    return{
        title: productId? `Product - ${productId}`: `Product -${title}`
    }
}



const ProductDetail = async ({params}) =>{
    const productId = await params.productId
    return (<h1>Details about Product {productId} </h1>)
}
export default ProductDetail