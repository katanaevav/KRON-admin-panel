import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import PageHeaderUserButton from "../page-header-user-button/page-header-user-button.jsx";
import withDropDownMenuButton from "../../hoc/with-drop-down-menu-button/with-drop-down-menu-button.js";


const PageHeaderUserButtonWrapper = withDropDownMenuButton(PageHeaderUserButton);


import {Screens} from "../../const.js"

class PageHeader extends PureComponent {
  constructor(props) {
    super(props);

    this._menuItemClickHandler = this._menuItemClickHandler.bind(this);
    this._logOutClickHandler = this._logOutClickHandler.bind(this);
  }

  _menuItemClickHandler(evt) {
    evt.preventDefault();
    this.props.onMenuItemClick(evt.currentTarget.parentElement.dataset.key);
  }

  _logOutClickHandler() {
    this.props.onLogOutButtonClick();
  }

  render() {
    const {selectedMenuItem} = this.props;

    return (
      <React.Fragment>
        <header className="user-page__header">
          <div className="page-header">
              <img className="page-header__logo" src="./img/logo.png" width="31" height="31" alt="Logo" />
              <nav className="page-header__nav nav">
                <ul className="nav__menu">
                  <li className={`page-header__item nav__item ${selectedMenuItem === Screens.MAIN_SCREEN ? `page-header__item--selected` : ``}`} data-key={Screens.MAIN_SCREEN}>
                    <a
                      href="#"
                      onClick={this._menuItemClickHandler}
                    >
                      <svg width="11" height="10" viewBox="0 0 11 10">
                        <g transform="translate(-0.001 -17.047)">
                          <g transform="translate(0.001 17.047)">
                            <g transform="translate(0 0)">
                              <path d="M10.588,21.578,8.956,19.946V18.061a.617.617,0,0,0-1.234,0v.651L6.506,17.5a1.624,1.624,0,0,0-2.245,0l-4.08,4.08a.617.617,0,0,0,.873.873l4.08-4.08a.364.364,0,0,1,.5,0l4.081,4.081a.617.617,0,1,0,.873-.873Z" transform="translate(-0.001 -17.047)" fill="#FFFFFF"/>
                              <path d="M72.734,127.837a.3.3,0,0,0-.429,0l-3.589,3.588a.3.3,0,0,0-.089.215v2.617a1.112,1.112,0,0,0,1.112,1.112h1.777v-2.752h2.006v2.752H75.3a1.112,1.112,0,0,0,1.112-1.112v-2.617a.3.3,0,0,0-.089-.215Z" transform="translate(-67.135 -125.342)" fill="#FFFFFF"/>
                            </g>
                          </g>
                        </g>
                      </svg>
                      Главная
                    </a>
                  </li>
                  <li className={`page-header__item nav__item ${selectedMenuItem === Screens.USERS_SCREEN ? `page-header__item--selected` : ``}`} data-key={Screens.USERS_SCREEN}>
                    <a
                      href="#"
                      onClick={this._menuItemClickHandler}
                    >
                      <svg width="8" height="10" viewBox="0 0 8 10">
                        <path d="M75.258,6.2H69.55a.9.9,0,0,0-.9.9v8.208a.9.9,0,0,0,.9.9h5.708a.9.9,0,0,0,.9-.9V7.1A.9.9,0,0,0,75.258,6.2Zm-.945,8.52a.481.481,0,0,1-.481.481H70.976a.481.481,0,0,1-.481-.481V13.474a1.4,1.4,0,0,1,.648-1.181,1.38,1.38,0,0,0,2.522,0,1.4,1.4,0,0,1,.648,1.182ZM72.4,10.384a1.01,1.01,0,0,1,1.01,1.01,1.027,1.027,0,1,1-2.02,0A1.01,1.01,0,0,1,72.4,10.384ZM73.71,9.33H71.1a.333.333,0,0,1,0-.667H73.71a.333.333,0,1,1,0,.667ZM74.544,8H70.264a.333.333,0,0,1,0-.667h4.279a.333.333,0,0,1,0,.667Z" transform="translate(-68.654 -6.205)" fill="#FFFFFF"/>
                      </svg>
                      Пользователи
                    </a>
                  </li>
                  <li className={`page-header__item nav__item ${selectedMenuItem === Screens.REQUESTS_SCREEN ? `page-header__item--selected` : ``}`} data-key={Screens.REQUESTS_SCREEN}>
                    <a
                      href="#"
                      onClick={this._menuItemClickHandler}
                    >
                      <svg width="9" height="10" viewBox="0 0 9 10">
                        <g transform="translate(-36.365 -9.569)">
                          <path d="M99.578,11.865V10.294a.725.725,0,0,0-.726-.725h-5.67a.725.725,0,0,0-.725.725v.227h4.7a1.325,1.325,0,0,1,1.322,1.287h.8A.834.834,0,0,1,99.578,11.865Z" transform="translate(-54.954)" fill="#FFFFFF"/>
                          <path d="M389.361,269.069v3.865h.371a.725.725,0,0,0,.726-.726v-3.2a.836.836,0,0,1-.3.057Z" transform="translate(-345.834 -254.179)" fill="#FFFFFF"/>
                          <path d="M391.055,153.386l-.788-.689a.168.168,0,0,0-.11-.041h-.8v1.754h.793a.167.167,0,0,0,.113-.044l.791-.731a.168.168,0,0,0,0-.248Z" transform="translate(-345.834 -140.184)" fill="#FFFFFF"/>
                          <path d="M42.2,89.232H37.027a.662.662,0,0,0-.662.662v7.06a.662.662,0,0,0,.662.662H42.2a.662.662,0,0,0,.662-.662v-7.06A.662.662,0,0,0,42.2,89.232Zm-1.3,5.074H38.31a.332.332,0,1,1,0-.664H40.9a.332.332,0,1,1,0,.664Zm.706-1.765h-4a.332.332,0,0,1,0-.664h4a.332.332,0,0,1,0,.664Z" transform="translate(0 -78.047)" fill="#FFFFFF"/>
                        </g>
                      </svg>
                      Заявки
                    </a>
                  </li>
                  <li className={`page-header__item nav__item ${selectedMenuItem === Screens.CITIES_SCREEN ? `page-header__item--selected` : ``}`} data-key={Screens.CITIES_SCREEN}>
                    <a
                      href="#"
                      onClick={this._menuItemClickHandler}
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10">
                        <g transform="translate(0 -0.275)">
                          <g transform="translate(0 0.275)">
                            <path d="M8.655,2.629H9.739a.273.273,0,0,0,.273-.273V1.273A.273.273,0,0,0,9.739,1H8.655a.273.273,0,0,0-.273.273v.208h-1.1a.812.812,0,0,0-.811.811v2.65H4.986V.753A.478.478,0,0,0,4.508.275H.478A.478.478,0,0,0,0,.753V9.8a.478.478,0,0,0,.478.478H1.793V8.295a.19.19,0,0,1,.19-.19H3a.19.19,0,0,1,.19.19v1.98H4.508A.478.478,0,0,0,4.986,9.8V5.608H6.474v2.65a.812.812,0,0,0,.811.811h1.1v.209a.273.273,0,0,0,.273.273H9.739a.273.273,0,0,0,.273-.273V8.195a.273.273,0,0,0-.273-.273H8.655a.273.273,0,0,0-.273.273V8.4h-1.1a.145.145,0,0,1-.145-.145V5.608H8.383v.209a.273.273,0,0,0,.273.273H9.739a.273.273,0,0,0,.273-.273V4.734a.273.273,0,0,0-.273-.273H8.655a.273.273,0,0,0-.273.273v.208H7.14V2.292a.145.145,0,0,1,.145-.145h1.1v.209A.273.273,0,0,0,8.655,2.629ZM2.077,7.2a.19.19,0,0,1-.19.19H1.132a.19.19,0,0,1-.19-.19V6.445a.19.19,0,0,1,.19-.19h.754a.19.19,0,0,1,.19.19V7.2Zm0-1.7a.19.19,0,0,1-.19.19H1.132a.19.19,0,0,1-.19-.19V4.748a.19.19,0,0,1,.19-.19h.754a.19.19,0,0,1,.19.19V5.5Zm0-1.7a.19.19,0,0,1-.19.19H1.132a.19.19,0,0,1-.19-.19V3.051a.19.19,0,0,1,.19-.19h.754a.19.19,0,0,1,.19.19V3.8Zm0-1.7a.19.19,0,0,1-.19.19H1.132a.19.19,0,0,1-.19-.19V1.354a.19.19,0,0,1,.19-.19h.754a.19.19,0,0,1,.19.19v.754ZM4.044,7.2a.19.19,0,0,1-.19.19H3.1a.19.19,0,0,1-.19-.19V6.445a.19.19,0,0,1,.19-.19h.754a.19.19,0,0,1,.19.19Zm0-1.7a.19.19,0,0,1-.19.19H3.1a.19.19,0,0,1-.19-.19V4.748a.19.19,0,0,1,.19-.19h.754a.19.19,0,0,1,.19.19Zm0-1.7a.19.19,0,0,1-.19.19H3.1a.19.19,0,0,1-.19-.19V3.051a.19.19,0,0,1,.19-.19h.754a.19.19,0,0,1,.19.19Zm0-1.7a.19.19,0,0,1-.19.19H3.1a.19.19,0,0,1-.19-.19V1.354a.19.19,0,0,1,.19-.19h.754a.19.19,0,0,1,.19.19Z" transform="translate(0 -0.275)" fill="#FFFFFF"/>
                          </g>
                        </g>
                      </svg>
                      Города
                    </a>
                  </li>
                </ul>
              </nav>

            <div className="page-header__with-drop-down">

              <PageHeaderUserButtonWrapper
                onLogOutButtonClick = {this._logOutClickHandler}
              />

            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}


PageHeader.propTypes = {
  selectedMenuItem: PropTypes.number,
  onMenuItemClick: PropTypes.func.isRequired,
  onLogOutButtonClick: PropTypes.func.isRequired,
};


export default PageHeader;
