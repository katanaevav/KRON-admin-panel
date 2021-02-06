import React from "react";
import PropTypes from "prop-types";

const BigButton = (props) => {

  const {buttonName, buttonCount, buttonDescription, buttonIconColor, buttonLink, onBigButtonClick} = props;

  // buttonName: `Неавторизованные`,
  // buttonCount: `1`,
  // buttonDescription: `Не подтвердили номер телефона`,
  // buttonIconColor: `state-icon--purple`,
  // buttonLink: `/users`,

  return (
    <React.Fragment>
      <li className="buttons-group__button">
        <a href={buttonLink} className="main-button" data-group={buttonLink} data-button={buttonIconColor} onClick={onBigButtonClick}>
          <div className="main-button__count" data-group={buttonLink} data-button={buttonIconColor}>{buttonCount}</div>
          <div className="main-button__text" data-group={buttonLink} data-button={buttonIconColor}>
            <div className="main-button__button-name" data-group={buttonLink} data-button={buttonIconColor}>
              <div className={`main-button__icon state-icon ${buttonIconColor}`} data-group={buttonLink} data-button={buttonIconColor}></div>
              <p data-group={buttonLink} data-button={buttonIconColor}>{buttonName}</p>
            </div>
            <p className="buttons-group__button-name" data-group={buttonLink} data-button={buttonIconColor}>{buttonDescription}</p>
          </div>
        </a>
      </li>
    </React.Fragment>
  );
};

BigButton.propTypes = {
  buttonName: PropTypes.string.isRequired,
  buttonCount: PropTypes.number.isRequired,
  buttonDescription: PropTypes.string.isRequired,
  buttonIconColor: PropTypes.string.isRequired,
  buttonLink: PropTypes.string.isRequired,
  onBigButtonClick: PropTypes.func.isRequired,
};

export default BigButton;
