import React from 'react'
import StateContextProvider from '../ApiContext/StateContext';
import MyPageContainer from '../components/MyPage/MyPageContainer';
import SimpleNavBarContainer from '../components/Navbar/SimpleNavBarContainer';

const MyPage = () => {

  return (
    <StateContextProvider>
      <SimpleNavBarContainer/>
      <div className="pt-5" />
      <MyPageContainer />
    </StateContextProvider>

  )
}

export default MyPage
