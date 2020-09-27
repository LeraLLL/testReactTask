import React, { useState } from 'react'
import {Tabs, Tab} from '@material-ui/core'
import css from './Navigation.module.scss'
import cn from 'classnames'
import { Link } from 'react-router-dom'

function Navigation () {
  const [ value, setValue ] = useState(0)

  const navList = [
    {
      label: 'О себе',
      path: '/'
    },
    {
      label: 'Карта',
      path: '/map'
    },
    {
      label: 'Таймер',
      path: '/timer'
    }
  ]

  return(
    <div className={css.container}>
      <Tabs
        value={value}
        onChange={(event, value) => { setValue(value)}}
      >
        {
          navList.map(
            ({label, path})=>
              <Tab
                key={label}
                fullWidth
                label={label}
                className={cn(css.tabLink)}
                component={Link}
                to={path}
            />
          )
        }
      </Tabs>
    </div>
  )
}

export default Navigation