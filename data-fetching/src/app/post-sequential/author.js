export async function Athor({userId}) {
    await new Promise ((resolve)=> setTimeout(resolve,2000))

    const response = await fetch(
        "http://jsonplaceholder.typicode.com/users"+userId
    )

    const user = await response.json()
    return (
        <div>
            Written by : {""}
            <span>
                {user.name}
            </span>
        </div>
    )
}