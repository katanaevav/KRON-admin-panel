import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import PageUsersHeader from "../page-users-header/page-users-header.jsx"
import PageUsersData from "../page-users-data/page-users-data.jsx"


class PageUsers extends PureComponent {
  constructor(props) {
    super(props);

    this._onFilterStatusItemButtonClick = this._onFilterStatusItemButtonClick.bind(this);
  }

  _onFilterStatusItemButtonClick(statusFilter) {
    this.props.onFilterStatusItemButtonClick(statusFilter);
  }

  render() {

    const {UsersList, passangersCount, driversCount, usersCount} = this.props;

    return (
      <React.Fragment>
        <main className="user-page__main">
          <div className="page-main">

            <div className="table-data">

              <PageUsersHeader
                onFilterStatusItemButtonClick = {this._onFilterStatusItemButtonClick}
                passangersCount = {passangersCount}
                driversCount = {driversCount}
                usersCount = {usersCount}
              />
              <PageUsersData
                UsersList = {UsersList}
              />

            </div>

          </div>
        </main>
      </React.Fragment>
    );
  }
};


PageUsers.propTypes = {
  UsersList: PropTypes.array.isRequired,
  onFilterStatusItemButtonClick: PropTypes.func.isRequired,
  passangersCount: PropTypes.number,
  driversCount: PropTypes.number,
  usersCount: PropTypes.number,
};


export default PageUsers;

