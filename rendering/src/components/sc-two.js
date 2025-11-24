import fs from 'fs'

export default function ScTwo () {
    fs.readFileSync('src/components/sc-two.js','utf8')

    return (<h1>Server components two</h1>)
}