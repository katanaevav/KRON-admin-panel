import React from "react";
import PropTypes from "prop-types";
import BigButton from "../big-button/big-button.jsx"

const BigButtonsGroup = (props) => {

  const {groupIcon, groupName, groupHrefLinkToAll, groupButtons, onBigButtonClick} = props;

  // buttonsGroupName: `Пользователи`,
  // buttonsGroupIco: `/sprite.svg#users-ico`,
  // buttonsGroupLinkToAll: `/users`,
  // buttonsGroupButtons: []

  const buttons = groupButtons.map((button) => (
    <BigButton
      key={button.buttonName}
      buttonName={button.buttonName}
      buttonCount={button.buttonCount}
      buttonDescription={button.buttonDescription}
      buttonIconColor={button.buttonIconColor}
      buttonLink={button.buttonLink}
      onBigButtonClick = {onBigButtonClick}
    />
  ));

  return (
    <React.Fragment>
      <li className="buttons-group__item">
        <div className="dashboard-groups__header buttons-group__header">
          <svg width="11" height="14" viewBox="0 0 8 10">
            <use xlinkHref={groupIcon}></use>
          </svg>
          <h2 className="dashboard-groups__title">{groupName}</h2>
          <a className="dashboard-groups__link-to-all" href={groupHrefLinkToAll} data-group={groupHrefLinkToAll} data-button={``} onClick={onBigButtonClick}>посмотреть все</a>
        </div>
        <ul className="buttons-group__buttons">
          {buttons}
        </ul>
      </li>
    </React.Fragment>
  );
};


BigButtonsGroup.propTypes = {
  groupIcon: PropTypes.string.isRequired,
  groupName: PropTypes.string.isRequired,
  groupHrefLinkToAll: PropTypes.string.isRequired,
  groupButtons: PropTypes.array.isRequired,
  onBigButtonClick: PropTypes.func.isRequired,
};


export default BigButtonsGroup;
