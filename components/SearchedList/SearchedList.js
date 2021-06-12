import React from 'react'
import { useState } from 'react';
import PortfolioCards from '../PortfolioList/PortfolioCards';
import ProfileCards from '../Profile/ProfileCards';

const SearchedList = () => {
  //(カテゴリorポートフォリオ検索で引っかかった)ポートフォリオがくるのか
  //User検索で引っかかったUserがくるのかで条件分岐
  //どれでもない場合は検索結果がないので、検索結果0のコンポーネントを表示

  const portfolios =  ["aa", "aa","","","aa", "aa","","","aa", "aa","",""]
  const profiles = ["aa", "aa","","","aa", "aa","","","aa", "aa","",""]
  //const profiles = []
  return (
    <div className="pt-10">
      <h2 className="text-center">検索ワードを表示</h2>
      {profiles.length > 0 ? (
      <ProfileCards />
      ): 
      portfolios.length > 0 ? (
      <PortfolioCards portfolios={portfolios}/>
      ):
      (
      <></>
      )}
    </div>
  )
}

export default SearchedList
