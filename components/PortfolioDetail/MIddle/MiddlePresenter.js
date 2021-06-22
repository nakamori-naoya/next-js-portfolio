import React from 'react'
import Middle from './Middle';

const MiddlePresenter = React.memo(({
  setAvgEval,  selectUsability, 
  selectBusinessOriented, selectSociality, 
  selectCreativity,  selectSkill, portfolioId,enteredUsability,
  enteredBusinessOriented, enteredSociality, 
  enteredCreativity,enteredSkill
}) => {
  return (
    <Middle {...{setAvgEval,  selectUsability, 
      selectBusinessOriented,  selectSociality, 
      selectCreativity,  selectSkill, portfolioId,
      enteredUsability,enteredBusinessOriented, enteredSociality, 
      enteredCreativity,enteredSkill}}/>
  )
})

export default MiddlePresenter
