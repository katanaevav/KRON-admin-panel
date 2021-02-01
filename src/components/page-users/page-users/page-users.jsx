import React from "react";
import PageUsersHeader from "../page-users-header/page-users-header.jsx"
import PageUsersData from "../page-users-data/page-users-data.jsx"

const PageUsers = (props) => {

  return (
    <React.Fragment>
      <main className="user-page__main">
        <div className="page-main">

          <div className="table-data">

            <PageUsersHeader />
            <PageUsersData />

          </div>

        </div>
      </main>
    </React.Fragment>
  );
};


export default PageUsers;

