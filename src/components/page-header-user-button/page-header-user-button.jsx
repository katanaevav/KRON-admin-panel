import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";


class PageHeaderUserButton extends PureComponent {

  constructor(props) {
    super(props);

    this.dropdownMenu = createRef();

    this._logOutClickHandler = this._logOutClickHandler.bind(this);
    this._showMenu = this._showMenu.bind(this);
  }

  _logOutClickHandler(evt) {
    evt.preventDefault();
    this.props.onLogOutButtonClick();
    this.props.onHideMenu();
  }

  _showMenu(evt) {
    evt.preventDefault();
    this.props.onOpenMenu(evt, this.dropdownMenu);
  }

  render() {

    const {showMenu} = this.props;


    return (
      <React.Fragment>

        <div className="page-header__item page-header__user" data-key={`Администратор`}>
          <a
            href="#"
            onClick={this._showMenu}
            className="page-header__drop-down-button"
          >
            <svg width="7" height="10" viewBox="0 0 7 10">
              <g transform="translate(-82.022 -8.666)">
                <path d="M88.62,11.1a3.168,3.168,0,0,0-6.161,0,.566.566,0,0,0-.437.55v.745a.567.567,0,0,0,.566.567h.371a.158.158,0,0,0,.158-.158V11.2a2.5,2.5,0,0,1,4.843,0v1.6a.158.158,0,0,0,.158.158h.371a.567.567,0,0,0,.566-.567v-.745A.566.566,0,0,0,88.62,11.1Z" fill="#FFFFFF"/>
                <path d="M95.993,241.176a1.275,1.275,0,0,1,.081.392,1.942,1.942,0,0,1-3.816,0,1.279,1.279,0,0,1,.081-.392,2.46,2.46,0,0,0-1.512,2.27v2.188a.842.842,0,0,0,.841.842h5a.841.841,0,0,0,.841-.842v-2.188A2.46,2.46,0,0,0,95.993,241.176Z" transform="translate(-8.627 -227.81)" fill="#FFFFFF"/>
                <path d="M150.972,71.047a2.171,2.171,0,0,0,1.805-1.219,2.972,2.972,0,0,0,.153-.321,2.62,2.62,0,0,0,.209-.989,2.167,2.167,0,1,0-4.334,0,2.634,2.634,0,0,0,.208.989,3.121,3.121,0,0,0,.153.321A2.172,2.172,0,0,0,150.972,71.047Zm0-3.895a1.367,1.367,0,0,1,1.365,1.366c0,.778-.63,1.727-1.365,1.727s-1.366-.95-1.366-1.727A1.367,1.367,0,0,1,150.972,67.153Z" transform="translate(-65.433 -56.519)" fill="#FFFFFF"/>
              </g>
            </svg>
            Администратор
            <svg width="6" height="9" viewBox="0 0 6 9">
              <g transform="translate(0 8.942) rotate(-90)">
                <g>
                  <path d="M1.054,0,4.471,3.506,7.888,0,8.942,1.082,4.471,5.671,0,1.082Z" fill="#fff"/>
                </g>
              </g>
            </svg>
          </a>
        </div>

        <ul
          className={`page-header__item page-header__drop-down ${showMenu ? `` : `page-header__drop-down--hide`}`}
          ref={this.dropdownMenu}
        >
          <li className="page-header__item page-header__drop-down-item">
            <a
              href="#"
              onClick={this._logOutClickHandler}
            >
            <svg width="6" height="5" viewBox="0 0 6 5">
              <g transform="translate(0 -41.115)">
                <g transform="translate(0 41.115)">
                  <path d="M2.5,45.74a.1.1,0,0,1-.008-.053c0-.014-.006-.026-.027-.035s-.031-.016-.031-.021-.015-.009-.045-.012l-.045,0H1.125a.6.6,0,0,1-.441-.184A.6.6,0,0,1,.5,44.99V42.24A.6.6,0,0,1,.684,41.8a.6.6,0,0,1,.441-.184h1.25a.118.118,0,0,0,.08-.025.13.13,0,0,0,.039-.076.657.657,0,0,0,.012-.092.972.972,0,0,0,0-.1q0-.062,0-.078a.127.127,0,0,0-.125-.125H1.125a1.084,1.084,0,0,0-.795.33A1.084,1.084,0,0,0,0,42.24v2.75a1.083,1.083,0,0,0,.33.795,1.083,1.083,0,0,0,.795.33h1.25a.119.119,0,0,0,.08-.025.13.13,0,0,0,.039-.076.659.659,0,0,0,.012-.092.971.971,0,0,0,0-.1Q2.5,45.756,2.5,45.74Z" transform="translate(0 -41.115)" fill="#fefefe"/>
                  <path d="M114.184,52.445l-2.125-2.125a.25.25,0,0,0-.426.176v1.125h-1.75a.253.253,0,0,0-.25.25v1.5a.254.254,0,0,0,.25.25h1.75v1.125a.249.249,0,0,0,.426.176l2.125-2.125a.245.245,0,0,0,0-.352Z" transform="translate(-108.133 -50.121)" fill="#fefefe"/>
                </g>
              </g>
            </svg>

              Выйти</a>
          </li>
        </ul>

      </React.Fragment>
    );
  }
};


PageHeaderUserButton.propTypes = {
  showMenu: PropTypes.bool.isRequired,
  onOpenMenu: PropTypes.func.isRequired,
  onHideMenu: PropTypes.func.isRequired,
  onLogOutButtonClick: PropTypes.func.isRequired,
};

export default PageHeaderUserButton;

