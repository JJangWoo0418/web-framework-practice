import {getProducts} from "@/prisma-db"

export default async function ProductPrismaDBPage() {
    const products = await getProducts();

    return(
        <ul>
            {products.map((product) =>(
                <li key = {product.id}>
                    <h2>{product.title}</h2>
                    <p>{product.price}</p>
                    <p>{product.description}</p>
                </li>
            ))}
        </ul>
    )
}