import React from 'react'
import { useState } from 'react'
import { useAuth } from '../contexts/AuthProvider'
import { useNavigate } from 'react-router-dom'

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const {login} = useAuth()
    const navigate = useNavigate()
    const handleLogin = (e)=>{
        e.preventDefault();
        login(username,  password)
        navigate("/feed")

    }
    return (
    <div className='p-4 max-w-md mx-auto'>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
            <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='Username' className='border p-2 mb-2 w-full text-black' />
            <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' className='border p-2 mb-2 w-full text-black' />
            <button type='submit' className='bg-blue-500 text-white p-2'>Login</button>
        </form>
    </div>
  )
}

export default Login