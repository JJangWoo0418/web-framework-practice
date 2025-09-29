const blog = async () => {
    await new Promise((resolve)=>{
        setTimeout(()=>{resolve("delay")},2000)
    })
    return (<h1>My Blog</h1>)
}
export default blog