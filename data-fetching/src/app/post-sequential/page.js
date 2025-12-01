import { Suspense } from "react";
import { Athor } from "./author";


export default async function PostsPage() {
    
    const response = await fetch("http://jsonplaceholder.typicode.com/posts")

    const posts = await response.json()
    const filteredPosts = posts.filter((post)=>post.id % 10===1)

    return (
        <div>
            {filteredPosts.map((post) =>(
                <div key = {post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <Suspense fallback = {<div>Loading...</div>}>
                        <Athor userId={post.userId}/>
                    </Suspense>
                    <p>===================================================</p>
                </div>
            ))}
        </div>
    )
}