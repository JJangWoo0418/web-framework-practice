export function GET(){
    
    const users = [
        {
            // v1 fields
            id : "123",
            email: "test@test.com",
            fullname:"John Smith",
            createdAt:"2025-10-19",

            //v2
            name:{
                first:"John",
                last:"Smith",
            },
            status:"active",
            lastLoginAt:"2025-10-29",
        },{

             // v1 fields
            id : "245",
            email: "test@test.com",
            fullname:"Shim ChangWoo",
            createdAt:"2025-10-19",

            //v2
            name:{
                first:"Shim",
                last:"ChangWoo",
            },
            status:"active",
            lastLoginAt:"2025-10-29"
        }
        
    ]
    return Response.json(users)
}