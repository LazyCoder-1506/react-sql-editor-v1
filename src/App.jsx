import React, { useEffect, useState } from 'react'
import './App.css'

import PageLayout from './components/PageLayout'

function App() {
  const [queryMap, setQueryMap] = useState([])
  const [defaultData, setDefaultData] = useState([])

  useEffect(() => {

    import('./assets/data/movies').then(movies_module => {
      const movies_data = movies_module.default
      if (queryMap.length === 0) setQueryMap([{ query: "select * from MOVIES", data: movies_data }])
      else setQueryMap([...queryMap, { query: "select * from MOVIES", data: movies_data }])
    })

    import('./assets/data/orders').then(orders_module => {
      const orders_data = orders_module.default
      setDefaultData(orders_data)
    })
  }, []);

  return (
    <>
      <PageLayout queryMap={queryMap} defaultData={defaultData} />
    </>
  )
}

export default App
