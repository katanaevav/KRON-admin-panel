import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

class UserMenuButton extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      showMenu: false
    };

    this.dropdownMenu = createRef();

    this._autorizeUserClick = this._autorizeUserClick.bind(this);
    this._hystoryClick = this._hystoryClick.bind(this);
    this._deleteUserClick = this._deleteUserClick.bind(this);
    this._showMenu = this._showMenu.bind(this);
    this._closeMenu = this._closeMenu.bind(this);
  }

  _autorizeUserClick(evt) {
    evt.preventDefault();
    const userId = evt.target.dataset.userid;
    console.log(`Авторизовать пользователя ${userId}`);
    this._hideMenu();
  }

  _hystoryClick(evt) {
    evt.preventDefault();
    const userId = evt.target.dataset.userid;
    console.log(`История поездок пользователя ${userId}`);
    this._hideMenu();
  }

  _deleteUserClick(evt) {
    evt.preventDefault();
    const userId = evt.target.dataset.userid;
    console.log(`Удалить пользователя ${userId}`);
    this._hideMenu();
  }

  _showMenu(evt) {
    evt.preventDefault();
    this.setState({showMenu: true});
    document.addEventListener("click", this._closeMenu);
  }

  _closeMenu(evt) {
    if (!this.dropdownMenu.current.parentNode.contains(evt.target)) {
      this._hideMenu();
    }
  }

  _hideMenu() {
    this.setState({showMenu: false});
    document.removeEventListener('click', this._closeMenu);
  }

  render() {

    const {userId, showMenu, onOpenMenu, onCloseMenu, hideMenu} = this.props;


    return (
      <React.Fragment>
        <button onClick={this._showMenu} className="dashboard-table__row-button dashboard-table__row-button--active">
          <svg width="3" height="17" viewBox="0 0 3 17">
            <g transform="translate(310 -1341) rotate(90)">
              <circle cx="1.5" cy="1.5" r="1.5" transform="translate(1341 307)" fill="#212226"/>
              <circle cx="1.5" cy="1.5" r="1.5" transform="translate(1348 307)" fill="#212226"/>
              <circle cx="1.5" cy="1.5" r="1.5" transform="translate(1355 307)" fill="#212226"/>
            </g>
          </svg>
        </button>

        {/* Drop down menu */}
        {
          this.state.showMenu ? (
            <ul
              className="dashboard-table__row-menu table-row-menu "
              ref={this.dropdownMenu}
            >
              <li className="table-row-menu__item">
                  <a className="table-row-menu__button" href="#" data-userid={userId} onClick={this._autorizeUserClick}>
                    <svg width="7" height="7" viewBox="0 0 7 7">
                      <path d="M3.5,0A3.5,3.5,0,1,0,7,3.5,3.5,3.5,0,0,0,3.5,0ZM5.51,2.909l-2.2,2.2a.495.495,0,0,1-.7,0L1.49,3.987a.495.495,0,1,1,.7-.7l.771.771L4.81,2.209a.495.495,0,0,1,.7.7Z" fill="#212226"/>
                    </svg>
                    Авторизовать
                  </a>
                </li>
              <li className="table-row-menu__item">
                  <a className="table-row-menu__button" href="#" data-userid={userId} onClick={this._hystoryClick}>
                    <svg width="6" height="7" viewBox="0 0 6 7">
                      <g transform="translate(-36.365 -9.569)">
                        <path d="M97.441,11.177v-1.1a.508.508,0,0,0-.508-.508H92.965a.508.508,0,0,0-.508.508v.159h3.289a.928.928,0,0,1,.925.9h.56A.584.584,0,0,1,97.441,11.177Z" transform="translate(-55.295)" fill="#212226"/>
                        <path d="M389.361,269.052v2.705h.26a.508.508,0,0,0,.508-.508v-2.238a.584.584,0,0,1-.212.04Z" transform="translate(-347.982 -255.758)" fill="#212226"/>
                        <path d="M390.547,153.167l-.551-.482a.118.118,0,0,0-.077-.029h-.557v1.228h.555a.117.117,0,0,0,.079-.031l.553-.512a.117.117,0,0,0,0-.174Z" transform="translate(-347.982 -141.055)" fill="#212226"/>
                        <path d="M40.45,89.232H36.828a.464.464,0,0,0-.463.463v4.942a.463.463,0,0,0,.463.463H40.45a.464.464,0,0,0,.463-.463V89.7A.464.464,0,0,0,40.45,89.232Zm-.911,3.552H37.727a.232.232,0,1,1,0-.465H39.54a.232.232,0,1,1,0,.465Zm.494-1.235h-2.8a.232.232,0,0,1,0-.465h2.8a.232.232,0,0,1,0,.465Z" transform="translate(0 -78.532)" fill="#212226"/>
                      </g>
                    </svg>
                    История поездок
                  </a>
                </li>
              <li className="table-row-menu__item">
                  <a className="table-row-menu__button" href="#" data-userid={userId} onClick={this._deleteUserClick}>
                    <svg width="5" height="7" viewBox="0 0 5 7">
                      <path d="M73.474.636a.359.359,0,0,1,.372-.361h1.527a.359.359,0,0,1,.371.361v.4h.275v-.4A.634.634,0,0,0,75.373,0H73.846A.634.634,0,0,0,73.2.636v.4h.275Zm0,0" transform="translate(-71.94)" fill="#e35a5a"/>
                      <path d="M28.756,128.867H32.01a.586.586,0,0,0,.557-.619V124H28.2v4.248a.586.586,0,0,0,.557.619Zm2.5-4.21a.138.138,0,1,1,.275,0v3.251a.138.138,0,0,1-.275,0Zm-1.015,0a.138.138,0,1,1,.275,0v3.251a.138.138,0,0,1-.275,0Zm-1.015,0a.138.138,0,1,1,.275,0v3.251a.138.138,0,0,1-.275,0Zm0,0" transform="translate(-27.714 -121.867)" fill="#e35a5a"/>
                      <path d="M.344,68.688H4.995a.344.344,0,1,0,0-.688H.344a.344.344,0,1,0,0,.688Zm0,0" transform="translate(0 -66.83)" fill="#e35a5a"/>
                    </svg>
                    Удалить пользователя
                  </a>
                </li>
            </ul>
          ) : (null)
        }
      </React.Fragment>
    );
  }
};


UserMenuButton.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default UserMenuButton;

