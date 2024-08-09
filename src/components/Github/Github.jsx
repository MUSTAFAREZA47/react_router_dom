import React from 'react'
import { useEffect, useState } from 'react'

const Github = () => {

    const [data, setData] = useState("")

    useEffect(() => {
        fetch(`https://api.github.com/users/Gautamnke1999`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setData(data)
        })
    }, [])
    
  return (
    <div className='space-y-5 flex justify-center flex-col items-center'>
        <h1 className='bg-slate-700 text-white text-3xl px-10 py-5'>Follower: {data.followers}</h1>
        <h1>Username: {data.name}</h1>
        <img src={data.avatar_url} alt="github_profile" width={300}/>
    </div>
  )
}

export default Github