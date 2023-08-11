import React, { useEffect, useState } from 'react'
import SqlEditor from './inputSection/SqlEditor'
import PredefinedQueries from './inputSection/PredefinedQueries'
import Output from './outputSection/Output'

import user_data from "../assets/data/users.json"
import movies_data from "../assets/data/movies.json"
import orders_data from "../assets/data/orders.json"

const PageLayout = () => {
  const queryMap = [
    {
      query: "select * from USERS",
      data: user_data
    },
    {
      query: "select * from MOVIES",
      data: movies_data
    }
  ]

  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])

  const usePredefinedQuery = (value) => {
    setQuery(value)
  }

  const runQuery = () => {
    if (query === "") {
      setResults([])
      return
    }
    const queryIndex = queryMap.findIndex(o => o.query === query)
    if (queryIndex === -1) {
      setResults(orders_data)
    } else {
      setResults(queryMap[queryIndex].data)
    }
  }

  return (
    <>
      <div className="p-8 bg-[#EFFAFA] min-h-screen">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <SqlEditor query={query} setQuery={setQuery} runQuery={runQuery} />
          </div>
          <div>
            <PredefinedQueries usePredefinedQuery={usePredefinedQuery} />
          </div>
          <div className="col-span-2">
            <Output data={results} />
          </div>
        </div>
      </div>
    </>
  )
}

export default PageLayout