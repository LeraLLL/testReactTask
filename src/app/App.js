import React, { useEffect, useState } from 'react'
import css from './App.module.scss';
import Navigation from '../components/Navigation/Navigation'
import Routes from '../pages/Routes'
import cn from 'classnames'
import { Context } from '../context/UseContext'

function App() {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const start = new Date()
    setInterval(() => {
      const now = new Date()
      setTimer(now - start)
    }, 1000)
  }, [])

  return (
    <Context.Provider value={{ timer, setTimer }}>
      <div className={cn(css.App)}>
        <header>
          <Navigation/>
        </header>
        <div className={cn(css.container)}>
          <Routes/>
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
