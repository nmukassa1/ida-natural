async function page({params}) {
    const name = (await params).name
    return ( 
        <h1>{name}</h1>
     );
}

export default page;