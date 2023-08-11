import React from 'react'
import { getTableHeadersFromData, getTableRowsFromData } from './TableFormatter'

const ResultTable = ({ data }) => {
  return (
    <>
      {
        (data.length > 0 ? (
          <div className="block max-h-[50vh] overflow-y-auto border border-gray-300">
            <table className="w-full">
              <thead classname="sticky top-0">
                {getTableHeadersFromData(data)}
              </thead>
              <tbody class="h-[50vh] overflow-y-auto">
                {getTableRowsFromData(data)}
              </tbody>
            </table>
          </div>
        ) : <p>Execute a query to see results</p>)
      }
    </>
  )
}

export default ResultTable