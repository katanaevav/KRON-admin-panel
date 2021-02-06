import React from "react";
import PropTypes from "prop-types";
import BigButtonsGroup from "../big-buttons-group/big-buttons-group.jsx";


const BigButtonsGroups = (props) => {

  const {buttonsGroups, onBigButtonClick} = props;

  const groups = buttonsGroups.map((group) => (
    <BigButtonsGroup
      key = {group.buttonsGroupName}
      groupIcon = {group.buttonsGroupIco}
      groupName = {group.buttonsGroupName}
      groupHrefLinkToAll = {group.buttonsGroupLinkToAll}
      groupButtons = {group.buttonsGroupButtons}
      onBigButtonClick = {onBigButtonClick}
    />
  ));

  return (
    <React.Fragment>
      <div className="dashboard__buttons">
        <ul className="buttons-group">
          {groups}
        </ul>
      </div>
    </React.Fragment>
  );
};


BigButtonsGroups.propTypes = {
  buttonsGroups: PropTypes.array,
  onBigButtonClick: PropTypes.func.isRequired,
};


export default BigButtonsGroups;
