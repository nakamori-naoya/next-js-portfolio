import React from 'react'
import PortfolioListPresenter from './PortfolioListPresenter';

const PortfolioListContainer = ({staticfilteredPortfolios}) => {
  return (
    <PortfolioListPresenter
    {...{staticfilteredPortfolios}}
    />
  )
}

export default PortfolioListContainer
