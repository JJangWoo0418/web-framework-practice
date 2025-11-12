import {cookies} from 'next/headers';

export default async function AboutPage() {
    const cookieStore = await cookies();
    const theme = cookieStore.get('theme') || 'light';

    console.log("about page")
    console.log('Cookies', theme)
    return (
        <div>
            <h1>About page</h1>
            <h1>{new Date().toLocaleTimeString()}</h1>
        </div>
    )
}