import React, { Suspense, useState, lazy } from 'react'
import SqlEditor from './inputSection/SqlEditor'
import PredefinedQueries from './inputSection/PredefinedQueries'
// import Output from './outputSection/Output'

const Output = lazy(() => import("./outputSection/Output"))

const PageLayout = () => {
  const [query, setQuery] = useState("")
  const [submittedQuery, setSubmittedQuery] = useState("")


  const usePredefinedQuery = (value) => {
    setQuery(value)
  }

  const runQuery = () => {
    setSubmittedQuery(query)
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
            <Suspense fallback={<div>Loading...</div>}>
              <Output submittedQuery={submittedQuery} />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  )
}

export default PageLayout