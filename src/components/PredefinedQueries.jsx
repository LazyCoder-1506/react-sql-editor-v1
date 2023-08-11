import React from 'react'

const PredefinedQueries = ({ usePredefinedQuery }) => {
  return (
    <>
      <h1 className="text-lg font-bold mb-4">Predefined Queries</h1>
      <div onClick={() => { usePredefinedQuery("select * from USERS") }} className="cursor-pointer px-3 py-2 rounded bg-blue-500/5 hover:bg-blue-500/10 mb-1">select * from USERS</div>
      <div onClick={() => { usePredefinedQuery("select * from POSTS") }} className="cursor-pointer px-3 py-2 rounded bg-blue-500/5 hover:bg-blue-500/10 mb-1">select * from POSTS</div>
      <div onClick={() => { usePredefinedQuery("select * from PRODUCTS") }} className="cursor-pointer px-3 py-2 rounded bg-blue-500/5 hover:bg-blue-500/10 mb-1">select * from PRODUCTS</div>
      <div onClick={() => { usePredefinedQuery("select * from ORDERS") }} className="cursor-pointer px-3 py-2 rounded bg-blue-500/5 hover:bg-blue-500/10 mb-1">select * from ORDERS</div>
    </>
  )
}

export default PredefinedQueries