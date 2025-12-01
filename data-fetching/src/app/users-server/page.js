import { resolve } from "styled-jsx/css"

export default async function UsersServer() {
    await new Promise((resolve)=> setTimeout(resolve,2000))
    const response = await fetch(
        "http://jsonplaceholder.typicode.com/users"
    )

    const users = await response.json()
    console.log(users)

    return (
        <>
            <h1>Users server</h1>
            <h1>
                {users.map((user) => {
                    return (
                        <li key={user.id}>
                            <div>{user.name}</div>
                            <div>
                                <div>Name: {user.username}</div>
                                <div>Email: {user.email}</div>
                                <div>Phone: {user.phone}</div>
                            </div>
                        </li>
                    )
                })}
            </h1>
        </>
    )
}