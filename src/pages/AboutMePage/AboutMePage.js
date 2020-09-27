import React from 'react'
import { TextField } from '@material-ui/core'
import { Grid, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
}));

function AboutMePage () {
  const css = useStyles();

  return(
    <form noValidate autoComplete="off">
      <Grid container direction={'row'} spacing={3}>
        <Grid item xs={12} sm={4}>
          <Grid
            container
            justify={'center'}
            alignItems={'center'}
          >
            <Grid item>
              <Avatar
                alt='avatar'
                src={'https://i.pinimg.com/736x/b7/3d/38/b73d386baa38b6ab19071594d4a16e45.jpg'}
                className={css.large}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Grid container direction={'column'} spacing={3}>
            <Grid item xs={12}>
              <TextField id="name" label="Имя" defaultValue={'Валерия'} readOnly/>
            </Grid>

            <Grid item xs={12}>
              <TextField id="age" label="Возраст"  defaultValue={'24'} readOnly/>
            </Grid>
          </Grid>
        </Grid>

          <Grid item xs={12} sm={4}>
            <Grid container direction={'column'} spacing={3}>
              <Grid item xs={12}>
                <TextField id="surname" label="Фамилия"  defaultValue={'Ларина'} readOnly/>
              </Grid>

              <Grid item xs={12}>
                <TextField id="education" label="Образование"  defaultValue={'Высшее'} readOnly/>
              </Grid>
            </Grid>
          </Grid>

        <Grid item xs={12} sm={12}>
          <TextField
            fullWidth
            id="free-description"
            label="Вольное описание"
            multiline
            rows={6}
            readOnly
            defaultValue={'Не имею вредных привычек, мать двух котов. В свободное время люблю смотреть сериалы, играть в Albion, готовить, учиться новому.'}
          />
        </Grid>
      </Grid>
    </form>

  )
}

export default AboutMePage