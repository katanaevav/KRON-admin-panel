import React, {PureComponent}  from "react";
import PropTypes from "prop-types";
import UsersStatusFilter from "../users-status-filter/users-status-filter.jsx";
import withDropDownMenuButton from "../../../hoc/with-drop-down-menu-button/with-drop-down-menu-button.js"

const UsersStatusFilterWrapper = withDropDownMenuButton(UsersStatusFilter);


class PageUsersHeader extends PureComponent {
  constructor(props) {
    super(props);

    this._onFilterStatusItemButtonClick = this._onFilterStatusItemButtonClick.bind(this);
  }

  _onFilterStatusItemButtonClick(statusFilter) {
    this.props.onFilterStatusItemButtonClick(statusFilter);
  }

  render() {
    const {passangersCount, driversCount, usersCount} = this.props;

    return (
      <React.Fragment>
        <div className="table-data__header">

          <UsersStatusFilterWrapper
            onFilterStatusItemButtonClick = {this._onFilterStatusItemButtonClick}
          />

          <div className="table-data__counters counters">
            <ul className="counters__list">
              <li className="counters__item counters__item--passangers">
                <p className="counters__name">Пассажиров</p>
                <p className="counters__value">{passangersCount}</p>
              </li>
              <li className="counters__item counters__item--drivers">
                <p className="counters__name">Водителей</p>
                <p className="counters__value">{driversCount}</p>
              </li>
              <li className="counters__item counters__item--summary">
                <p className="counters__name">Всего пользователей</p>
                <p className="counters__value">{usersCount}</p>
              </li>
            </ul>

          </div>
        </div>
      </React.Fragment>
    );
  }
};


PageUsersHeader.propTypes = {
  onFilterStatusItemButtonClick: PropTypes.func.isRequired,
  passangersCount: PropTypes.number,
  driversCount: PropTypes.number,
  usersCount: PropTypes.number,
};


export default PageUsersHeader;
