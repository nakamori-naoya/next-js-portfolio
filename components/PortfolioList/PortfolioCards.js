import React from 'react'
import PortfolioCard from './PortfolioCard';

const PortfolioCards = ({portfolios,  title}) => {
  return (
<>    
    <h2>{title}</h2>
    <div className="w-screen flex overflow-x-scroll p-10 ">
      {portfolios.length > 0 &&
        portfolios.map((portfolio) => (
            <div className="ml-5">
              <PortfolioCard
              id = {portfolio.id}
              title={portfolio.name}
              subheader={portfolio.updated_at}
              // avatar={myProfile.image_data}
              // edit={() => getBlog(token, portfolio.id)}
              // delete={() => deleteBlog(token, portfolio.id)}
              HeadClass="h-96 w-80 whitespace-nowrap ml-5"
              />
            </div> 
        ))}
    </div>
</>
  )
}

export default PortfolioCards
