import React from 'react';
import { useParams } from 'react-router-dom';

export default function User() {
  const {username} = useParams();
  const {email} = useParams()
  
  return (
    <div>
      <h1>Hello {username}</h1>
      <h1>Email {email}</h1>
    </div>
  )
}
