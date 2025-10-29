import {NextResponse, nextResponse} from "next/server";

export function middleware(request){

    // if(request.nextUrl.pathname ==='/profile')
    //     return NextResponse.redirect(new URL("/",request.url))

    const Response = NextResponse.next()
    const themePreference = request.cookies.get('theme')
    if(!themePreference)
        Response.cookies.set('theme','dark')

    Response.headers.set('custom-header','custom-value')
    return Response
}

// export const config = {
//     matcher:"/profile"
// }