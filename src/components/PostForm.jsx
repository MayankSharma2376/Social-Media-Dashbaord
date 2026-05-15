import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useAuth } from '../contexts/AuthProvider'
import { addPost } from '../store'

function PostForm() {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const dispatch = useDispatch()
    const {user} = useAuth()
    const isValid = title.length > 5 && body.length > 10
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(isValid){
            dispatch(addPost({id: Date.now(), title, body, userId: user.username}))
            setTitle("")
            setBody("")
        }
    }
    return (
   <form onSubmit={handleSubmit} className='mb-4'>
    <input type="text" className='border p-2 mb-2 w-full text-black' value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='Title' />
    <textarea value={body} onChange={(e)=>setBody(e.target.value)} placeholder="What's on your mind?"></textarea>
    <button type='submit' disabled={!isValid} className='bg-blue-500 text-white p-2 disabled:opacity-50'>Post</button>

   </form>
  )
}

export default PostForm