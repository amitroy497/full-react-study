import React, { lazy, Suspense } from 'react'

const Home = lazy(() => import('./Components/Home'))
const About = lazy(() => import('./Components/About'))
const Main = () => {
  return (
    <div>
      <Suspense fallback={<h1>Please wait home is loading...</h1>}>
        <Home />
        <About />
      </Suspense>
      <Suspense fallback={<h1>Please wait about is loading...</h1>}>
        <About />
      </Suspense>
    </div>
  )
}

export default Main
