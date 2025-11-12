export async function generateStaticParams() {
    return [{id:"1"},{id:"2"},{id:"3"}]
}

export default async function ProductPage({params}) {

    const {id} = await params
    return <h1> product {id} details</h1>
}