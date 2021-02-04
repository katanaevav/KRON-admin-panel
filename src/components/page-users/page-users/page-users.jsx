import React from "react";
import PropTypes from "prop-types";
import PageUsersHeader from "../page-users-header/page-users-header.jsx"
import PageUsersData from "../page-users-data/page-users-data.jsx"

const PageUsers = (props) => {

  const {UsersList} = props;

  return (
    <React.Fragment>
      <main className="user-page__main">
        <div className="page-main">

          <div className="table-data">

            <PageUsersHeader />
            <PageUsersData
              UsersList = {UsersList}
            />

          </div>

        </div>
      </main>
    </React.Fragment>
  );
};


PageUsers.propTypes = {
  UsersList: PropTypes.array.isRequired,
};


export default PageUsers;

