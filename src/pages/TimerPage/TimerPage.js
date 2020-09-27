import React, { useContext } from 'react'
import { Context } from '../../context/UseContext'
import moment from 'moment'
import { Grid } from '@material-ui/core';

function TimerPage () {
  const { timer } = useContext(Context)
  return (
    <Grid container direction={'column'} justify={'center'} alignItems={'center'}>
      <h2>Со времени открытия сайта прошло</h2>
      <p>{moment(timer).format('mm:ss')}</p>
    </Grid>
  )
}

export default TimerPage