import React, { useEffect, useState } from 'react'
import SqlEditor from './SqlEditor'
import PredefinedQueries from './PredefinedQueries'

const PageLayout = () => {
  const [query, setQuery] = useState("")

  const usePredefinedQuery = (value) => {
    setQuery(value)
  }

  

  return (
    <>
      <div className="p-8 bg-[#EFFAFA] min-h-screen">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <SqlEditor query={query} />
          </div>
          <div>
            <PredefinedQueries usePredefinedQuery={usePredefinedQuery} />
          </div>
          <div className="col-span-2">Results</div>
        </div>
      </div>
    </>
  )
}

export default PageLayout