import React, { Suspense, lazy } from 'react'
import './App.css'

const PageLayout = lazy(() => import('./components/PageLayout'))

function App() {

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <PageLayout />
      </Suspense>
    </>
  )
}

export default App
