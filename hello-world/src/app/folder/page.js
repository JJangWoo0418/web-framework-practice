import Link from 'next/link'
export default async function Folder(){
    return(
        <div>
            <h1>
                Folder
            </h1>

            <div>
                <Link href = "/folder/folder2">Folder2</Link>
            </div>
            
            <div>
                <Link href = "/folder/folder2">Folder2</Link>
            </div>
        </div>        
    )
}
