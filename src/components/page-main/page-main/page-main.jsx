import React from "react";
import PropTypes from "prop-types";
import BigButtonsGroups from "../big-buttons-groups/big-buttons-groups.jsx";
import MainEvents from "../main-events/main-events.jsx";

// import {MainButtonsGroups} from "../../../const.js";


const PageMain = (props) => {

  const {MainButtonsGroups, EventsList, onBigButtonClick} = props;

  return (
    <React.Fragment>
      <main className="user-page__main">
        <div className="page-main">
          <div className="dashboard dashboard-groups">

            <BigButtonsGroups
              buttonsGroups = {MainButtonsGroups}
              onBigButtonClick = {onBigButtonClick}
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


PageMain.propTypes = {
  EventsList: PropTypes.array.isRequired,
  onBigButtonClick: PropTypes.func.isRequired,
  MainButtonsGroups: PropTypes.array.isRequired,
};


export default PageMain;
