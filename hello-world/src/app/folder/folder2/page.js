import Link from 'next/link'
export default async function Folder2(){
    return(
        <div>
            <h1>
                Folder2
            </h1>

            <div>
                <Link href = "/folder">
                Go to Folder</Link>
            </div>
        </div>
    )
}
