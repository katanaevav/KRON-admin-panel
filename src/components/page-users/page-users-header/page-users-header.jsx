import React, {PureComponent}  from "react";
import PropTypes from "prop-types";
import UserStatusFilter from "../users-status-filter/users-status-filter.jsx";
import withDropDownMenuButton from "../../../hoc/with-drop-down-menu-button/with-drop-down-menu-button.js"

const UserStatusFilterWrapper = withDropDownMenuButton(UserStatusFilter);


class PageUsersHeader extends PureComponent {
  constructor(props) {
    super(props);

    this._onFilterStatusItemButtonClick = this._onFilterStatusItemButtonClick.bind(this);
  }

  _onFilterStatusItemButtonClick(statusFilter) {
    this.props.onFilterStatusItemButtonClick(statusFilter);
  }

  render() {
    return (
      <React.Fragment>
        <div className="table-data__header">

          <UserStatusFilterWrapper
            onFilterStatusItemButtonClick = {this._onFilterStatusItemButtonClick}
          />

          <div className="table-data__counters counters">
            <ul className="counters__list">
              <li className="counters__item counters__item--passangers">
                <p className="counters__name">Пассажиров</p>
                <p className="counters__value">1</p>
              </li>
              <li className="counters__item counters__item--drivers">
                <p className="counters__name">Водителей</p>
                <p className="counters__value">1</p>
              </li>
              <li className="counters__item counters__item--summary">
                <p className="counters__name">Всего пользователей</p>
                <p className="counters__value">4</p>
              </li>
            </ul>

          </div>
        </div>
      </React.Fragment>
    );
  }
};


UserStatusFilter.propTypes = {
  onFilterStatusItemButtonClick: PropTypes.func.isRequired,
};


export default PageUsersHeader;
