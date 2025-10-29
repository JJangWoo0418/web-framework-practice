import { comments } from "./comments"

export async function GET() {
    return Response.json(comments)
}

export async function POST(request){
    const comment = await request.json()
    console.log(comment)
    const newComment = {id:comments.length+1, text:comment.text}
    comments.push(newComment)

    return new Response(JSON.stringify(comments),{
        header:{"Content-Type":"application/json"},
        status:201
    })
}