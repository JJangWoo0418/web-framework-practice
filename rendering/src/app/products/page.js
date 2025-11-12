import Link from "next/link"

export default function productspage() {
    return (
        <>
            <h1>ProductPage</h1>

            <Link href="/products/1"> Product 1</Link>
            <Link href="/products/2"> Product 2</Link>
            <Link href="/products/3"> Product 3</Link>
        </>
    )
}