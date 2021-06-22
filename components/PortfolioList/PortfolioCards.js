import React from 'react'
import PortfolioCard from './PortfolioCard';

const PortfolioCards = ({portfolios,  title}) => {
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
              // avatar={myProfile.image_data}
              // edit={() => getBlog(token, portfolio.id)}
              // delete={() => deleteBlog(token, portfolio.id)}
              />
            </div> 
        ))}
    </div>
</>
  )
}

export default PortfolioCards
