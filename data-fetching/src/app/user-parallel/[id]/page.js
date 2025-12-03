async function getUserPosts(userId) {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    const res = await fetch(`http://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    return res.json()
}

async function getUserAlbums(userId) {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    const res = await fetch(`http://jsonplaceholder.typicode.com/albums?userId=${userId}`)
    return res.json()
}

export default async function Page({params}) {
    const {id} = await params;
    const postsData = getUserPosts(id)
    const albumsData = getUserAlbums(id)

    const [posts, albums] = await Promise.all([postsData, albumsData])
    return (
        <div> user {id} Profile
            <h1>Posts</h1>
            {posts.map((post)=>(
                <div key = {post.id}>
                    <h3>title: {post.title}</h3>
                </div>
            ))}
            <h2>albums</h2>
            {albums.map((albums)=>(<p key={albums.id}>Title: {albums.title}</p>))}
        </div>
    )
}