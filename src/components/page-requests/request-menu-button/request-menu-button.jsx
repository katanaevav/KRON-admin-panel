import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

class RequestMenuButton extends PureComponent {

  constructor(props) {
    super(props);

    this.dropdownMenu = createRef();

    this._execRequestClick = this._execRequestClick.bind(this);
    this._deleteRequestClick = this._deleteRequestClick.bind(this);

    this._showMenu = this._showMenu.bind(this);
  }

  _execRequestClick(evt) {
    evt.preventDefault();
    const requestId = evt.target.dataset.requestid;
    alert(`Выполнить заявку ${requestId}`);
    this.props.onHideMenu();
  }

  _deleteRequestClick(evt) {
    evt.preventDefault();
    const requestId = evt.target.dataset.requestid;
    alert(`Удалить заявку ${requestId}`);
    this.props.onHideMenu();
  }

  _showMenu(evt) {
    evt.preventDefault();
    this.props.onOpenMenu(evt, this.dropdownMenu);
  }

  render() {

    const {requestId, showMenu} = this.props;


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
          <ul
            className={`dashboard-table__row-menu table-row-menu ${!showMenu ? `table-row-menu--hide` : ``}`}
            ref={this.dropdownMenu}
          >
            <li className="table-row-menu__item">
              <a className="table-row-menu__button" href="#" data-requestid={requestId} onClick={this._execRequestClick}>
                <svg width="7" height="7" viewBox="0 0 7 7">
                  <path d="M3.5,0A3.5,3.5,0,1,0,7,3.5,3.5,3.5,0,0,0,3.5,0ZM5.51,2.909l-2.2,2.2a.495.495,0,0,1-.7,0L1.49,3.987a.495.495,0,1,1,.7-.7l.771.771L4.81,2.209a.495.495,0,0,1,.7.7Z" fill="#212226"/>
                </svg>
                Выполнить заявку
              </a>
            </li>
            <li className="table-row-menu__item">
              <a className="table-row-menu__button" href="#" data-requestid={requestId} onClick={this._deleteRequestClick}>
                <svg width="5" height="7" viewBox="0 0 5 7">
                  <path d="M73.474.636a.359.359,0,0,1,.372-.361h1.527a.359.359,0,0,1,.371.361v.4h.275v-.4A.634.634,0,0,0,75.373,0H73.846A.634.634,0,0,0,73.2.636v.4h.275Zm0,0" transform="translate(-71.94)" fill="#e35a5a"/>
                  <path d="M28.756,128.867H32.01a.586.586,0,0,0,.557-.619V124H28.2v4.248a.586.586,0,0,0,.557.619Zm2.5-4.21a.138.138,0,1,1,.275,0v3.251a.138.138,0,0,1-.275,0Zm-1.015,0a.138.138,0,1,1,.275,0v3.251a.138.138,0,0,1-.275,0Zm-1.015,0a.138.138,0,1,1,.275,0v3.251a.138.138,0,0,1-.275,0Zm0,0" transform="translate(-27.714 -121.867)" fill="#e35a5a"/>
                  <path d="M.344,68.688H4.995a.344.344,0,1,0,0-.688H.344a.344.344,0,1,0,0,.688Zm0,0" transform="translate(0 -66.83)" fill="#e35a5a"/>
                </svg>
                Удалить заявку
              </a>
            </li>
          </ul>
      </React.Fragment>
    );
  }
};


RequestMenuButton.propTypes = {
  requestId: PropTypes.string.isRequired,
  showMenu: PropTypes.bool.isRequired,
  onOpenMenu: PropTypes.func.isRequired,
  onHideMenu: PropTypes.func.isRequired,
};

export default RequestMenuButton;

