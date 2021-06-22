import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import SearchZone from './SearchZone';
import LeftZone from './LeftZone';
import RightZone from './RightZone';


const SimpleNavBarPresenter = React.memo(() => {

  return (
    <div className="mb-16">
      <AppBar position="fixed">
        <Toolbar className="bg-gray-800">
          <LeftZone/>
          <div className="mr-auto"/>
          <SearchZone/>
          <div className="ml-auto"/>
          <RightZone/>
        </Toolbar>
      </AppBar>
    </div>
  );
})

export default SimpleNavBarPresenter
