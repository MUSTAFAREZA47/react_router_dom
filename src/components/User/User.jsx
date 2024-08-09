import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {userid} = useParams()
  return (
    <div className='bg-slate-700 text-white py-5 text-3xl'> Username: {userid}</div>
  )
}

export default User