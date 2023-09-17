import React from 'react'

export default function Disp({users}) {
    const putUsers = users.map(user=><tr key={user.name}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        </tr>)
  return (
    <div className='container'>
        <h3 className='text-primary'> LIST </h3>
        <table className='table table-primary table-striped table-bordered '>
            <tr>
                <thead class="thead-dark">
                <th>NAME</th>
                <th>EMAIL</th>
                </thead>
                <tbody>
                  {putUsers}
                </tbody>
            </tr>
        </table>
    </div>
  )
}
