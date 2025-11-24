import fs from 'fs'
import ScTwo from './sc-two'
import CcOne from './cc-one'

export default function ScOne () {
    fs.readFileSync('src/components/sc-one.js','utf8')
    return(
        <>
            <h1>Server components one</h1>
            <ScTwo/>
            <CcOne/>
        </>
    )
}