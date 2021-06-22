import React from 'react'
import { RaderPlot } from './RaderPlot';
import IconZone from './IconZone';
import TitleZone from './TitleZone';

const UpperLeftPresenter = React.memo(({avgEval, siteUrl, githubUrl, profileImage, userId, title }) => {
  return (
        <div >
          <TitleZone {...{title}}/>
          <IconZone {...{siteUrl, githubUrl, profileImage, userId}} />
          <RaderPlot  {...{avgEval}}/>
        </div>
  )
})

export default UpperLeftPresenter
