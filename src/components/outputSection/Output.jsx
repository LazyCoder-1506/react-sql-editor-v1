import React from 'react'
import ResultTable from './ResultTable'
import { CSVLink } from 'react-csv'

const Output = ({ data }) => {
  return (
    <>
      {
        (data.length > 0 ? (
          <div className="flex flex-col gap-2">
            <div className='w-full flex flex-row justify-between'>
              <span>{data.length} results fetched</span>
              <CSVLink data={data} filename={"output.csv"}>
                <button type="button" className='bg-blue-500 text-white font-medium text-sm px-3 py-2 rounded'>Export to CSV</button>
              </CSVLink>
            </div>
            <ResultTable data={data} />
          </div>
        ) : <p>Execute a query to see results</p>)
      }
    </>
  )
}

export default Output