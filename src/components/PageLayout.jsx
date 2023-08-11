import React, { useState } from 'react'
import SqlEditor from './inputSection/SqlEditor'
import PredefinedQueries from './inputSection/PredefinedQueries'
import Output from './outputSection/Output'

const PageLayout = ({ queryMap, defaultData }) => {

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
      setResults(defaultData)
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