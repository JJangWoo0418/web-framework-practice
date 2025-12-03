import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient();
const seedProducts = async () =>{
    const count = await prisma.product.count()
    if(count === 0){
        await prisma.product.createMany({
            data:[
                {title: "Product 1", price: 500, description:"Description 1"},
                {title: "Product 2", price: 1500, description:"Description 2"},
                {title: "Product 3", price: 2500, description:"Description 3"},
            ]
        })
    }
}
seedProducts();

export async function getProducts() {
    return prisma.product.findMany();
}