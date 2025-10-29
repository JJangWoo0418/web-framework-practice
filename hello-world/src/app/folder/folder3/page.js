import Link from 'next/link'
export default async function Folder(){
    return(
        <div>
            <h1>
                Folder3
            </h1>

            <div>
                <Link href = "/folder/folder2">Go to folder2</Link>
            </div>
        </div>
    )
}
