import React, { useEffect, useState } from 'react'
import ResultTable from './ResultTable'
import { CSVLink } from 'react-csv'
import { users } from '../../assets/data/users'
import { movies } from '../../assets/data/movies'
import { orders } from '../../assets/data/orders'

const Output = ({ submittedQuery }) => {
  const queryMap = [
    {
      query: "select * from MOVIES",
      data: movies
    },
    {
      query: "select * from USERS",
      data: users
    }
  ]
  
  const [results, setResults] = useState([])

  useEffect(() => {
    selectResults()
  })

  const selectResults = () => {
    if (submittedQuery === "") {
      setResults([])
      return
    }
    const queryIndex = queryMap.findIndex(o => o.query === submittedQuery)
    if (queryIndex === -1) {
      setResults(orders)
    } else {
      setResults(queryMap[queryIndex].data)
    }
  }


  return (
    <>
      {
        (results.length > 0 ? (
          <div className="flex flex-col gap-2">
            <div className='w-full flex flex-row justify-between'>
              <span>{results.length} results fetched</span>
              <CSVLink data={results} filename={"output.csv"}>
                <button type="button" className='bg-blue-500 text-white font-medium text-sm px-3 py-2 rounded'>Export to CSV</button>
              </CSVLink>
            </div>
            <ResultTable data={results} />
          </div>
        ) : <p>Execute a query to see results</p>)
      }
    </>
  )
}

export default Output