import React, { useEffect, useState } from 'react'
import SqlEditor from './inputSection/SqlEditor'
import PredefinedQueries from './inputSection/PredefinedQueries'
import Output from './outputSection/Output'

const PageLayout = () => {
  let queryMap = []

  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])
  const [orderData, setOrderData] = useState(null)

  useEffect(() => {
    import('../assets/data/users.json').then(data => {
      queryMap.push({ query: "select * from USERS", data: data })
    });
    import('../assets/data/movies.json').then(data => {
      queryMap.push({ query: "select * from MOVIES", data: data })
    });
    import('../assets/data/orders.json').then(data => {
      setOrderData(data);
    });
  }, []);

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
      setResults(orderData)
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