import { Switch, Route } from 'react-router-dom'
import React, { Suspense, lazy } from 'react';

const AboutMePage = lazy(() => import('./AboutMePage/AboutMePage'))
const MapPage = lazy(() => import('./MapPage/MapPage'))
const TimerPage = lazy(() => import('./TimerPage/TimerPage'))

function Routes () {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path='/' exact component={AboutMePage} />
        <Route path='/map' exact component={MapPage} />
        <Route path='/timer' exact component={TimerPage} />
      </Switch>
    </Suspense>
  )
}

export default Routes
