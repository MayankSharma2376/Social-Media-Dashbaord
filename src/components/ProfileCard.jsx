import React from 'react'

function ProfileCard({user}) {
  return (
    <div className='bg-gray-100 p-4 rounded'>
        <h3 className='font-bold'>{user.name}</h3>
        <p>@{user.username}</p>
        <p>Email: {user.email}</p>
    </div>
  )
}

export default ProfileCard