export default async function Doc({params}) {
    
    const {slug} = await params;

    return (
        <h1>
            Viewing docs for feature {slug[0]} and {slug[3]}
        </h1>
    )
}