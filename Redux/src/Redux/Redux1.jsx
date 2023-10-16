import React from 'react'

const Redux1 = (porps) => {
    const {data} = porps;
  return (
    <div>
        <h1>User Component</h1>
        <h4>{data.name}</h4>
        <h4>{data.age}</h4>
    </div>
  )
}

export default Redux1
