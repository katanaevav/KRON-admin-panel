import React from "react";
import PropTypes from "prop-types";

const BigButton = (props) => {

  const {buttonName, buttonCount, buttonDescription, buttonIconColor, buttonLink} = props;

  // buttonName: `Неавторизованные`,
  // buttonCount: `1`,
  // buttonDescription: `Не подтвердили номер телефона`,
  // buttonIconColor: `state-icon--purple`,
  // buttonLink: `/users`,

  return (
    <React.Fragment>
      <li className="buttons-group__button">
        <a href={buttonLink} className="main-button">
          <div className="main-button__count">{buttonCount}</div>
          <div className="main-button__text">
            <div className="main-button__button-name">
              <div className={`main-button__icon state-icon ${buttonIconColor}`}></div>
              <p>{buttonName}</p>
            </div>
            <p className="buttons-group__button-name">{buttonDescription}</p>
          </div>
        </a>
      </li>
    </React.Fragment>
  );
};

BigButton.propTypes = {
  buttonName: PropTypes.string.isRequired,
  buttonCount: PropTypes.string.isRequired,
  buttonDescription: PropTypes.string.isRequired,
  buttonIconColor: PropTypes.string.isRequired,
  buttonLink: PropTypes.string.isRequired,
};

export default BigButton;
