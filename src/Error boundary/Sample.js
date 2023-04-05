import React from 'react'
import Home from './Home';
import About from './About';
import ErrorFallback from './Error';
import {ErrorBoundary} from 'react-error-boundary'

const Sample = () => {
    const name="Sunny";
  return (
    <div>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Home name={name} />
      <About name={name} />
    </ErrorBoundary>
    </div>
  )
}

export default Sample
