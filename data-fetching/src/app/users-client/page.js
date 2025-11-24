"use client"
import { useState, useEffect } from "react"

export default function UsersClient() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await fetch(
                    "http://jsonplaceholder.typicode.com/users"
                )
                const data = await response.json()
                setUsers(data)
            } catch (error) { setError(error.message) }
            finally { setLoading(false) }
        }
        fetchUsers()
    }, [])
    if(loading) return <div>Loading</div>
    if(error) return <div>{error}</div>

    return (
        <>
            <h1>Users client</h1>
            <h1>
                {users.map((user)=>{return(
                    <li key= {user.id}>
                        <div>{user.name}</div>
                        <div>
                            <div>Name: {user.username}</div>
                            <div>Email: {user.email}</div>
                            <div>Phone: {user.phone}</div>
                        </div>
                    </li>
                )})}
            </h1>
        </>
    )
}