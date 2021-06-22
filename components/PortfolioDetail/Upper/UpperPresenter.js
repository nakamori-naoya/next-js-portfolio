import React from 'react'
import UpperLeftPresenter from './UpperLeft/UpperLeftPresenter'
import UpperMiddlePresenter from './UpperMiddle/UpperMiddlePresenter'
import { Grid } from '@material-ui/core';
import UpperRightPresenter from './UpperRight/UpperRightPresenter';

const UpperPresenter = React.memo(({avgEval, siteUrl, description, githubUrl, images, profileImage, userId, title }) => {
  console.log(images)
  return (
    <Grid container spacing={5}  > 
      <Grid item xs={4} >
        <UpperLeftPresenter
          {...{avgEval, siteUrl, githubUrl, profileImage, userId, title }}
        />
      </Grid>
      <Grid item xs={4}>
        <UpperMiddlePresenter 
        {...{images}}
        />
      </Grid>
      <Grid item xs={4}  >
        <UpperRightPresenter  
        {...{description}}
        />
      </Grid>
    </Grid>
  )
})

export default UpperPresenter
