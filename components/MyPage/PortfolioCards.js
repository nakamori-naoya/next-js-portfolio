import React from 'react'
import PortfolioCard from './PortfolioCard';

const PortfolioCards = ({portfolios,  title, images}) => {
  return (
<>    
    <h2 className="text-2xl p-4 font-serif  text-center">{title}</h2>
    <div className="w-screen flex overflow-x-scroll p-4 ">
      {portfolios.length > 0 &&
        portfolios.map((portfolio) => (
            <div className="ml-5">
              <PortfolioCard
              id = {portfolio.id}
              title={portfolio.title}
              subheader={portfolio.updated_at}
              image={portfolio?.profile?.images}
              />
            </div> 
        ))}
    </div>
</>
  )
}

export default PortfolioCards
