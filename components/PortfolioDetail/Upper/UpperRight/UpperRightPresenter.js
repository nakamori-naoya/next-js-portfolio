import React from 'react'
import ControlledAccordions from '../../../../UIkit/ControlledAccordion';
import DisplayText from './DisplayText';

const UpperRightPresenter = React.memo(({description}) => {
  return (
    <div >
      {description ?
      (<DisplayText
        {...{description}}
      />): 
      (<DisplayText
        description="ユーザー未記入"
      />)} 
    </div>
  )
})

export default UpperRightPresenter
