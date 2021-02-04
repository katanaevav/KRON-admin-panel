import React from "react";
import BigButtonsGroups from "../big-buttons-groups/big-buttons-groups.jsx";
import MainEvents from "../main-events/main-events.jsx";

import {MainButtonsGroups} from "../../../const.js";


const PageMain = (props) => {

  const {EventsList} = props;

  return (
    <React.Fragment>
      <main className="user-page__main">
        <div className="page-main">
          <div className="dashboard dashboard-groups">

            <BigButtonsGroups
              buttonsGroups = {MainButtonsGroups}
            />

            <MainEvents
              EventsList = {EventsList}
            />

          </div>
        </div>
      </main>
    </React.Fragment>
  );
};


export default PageMain;
