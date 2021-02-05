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

    const {UsersList} = this.props;

    return (
      <React.Fragment>
        <main className="user-page__main">
          <div className="page-main">

            <div className="table-data">

              <PageUsersHeader
                onFilterStatusItemButtonClick = {this._onFilterStatusItemButtonClick}
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
};


export default PageUsers;

