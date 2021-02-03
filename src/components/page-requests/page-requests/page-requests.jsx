import React from "react";
import PageRequestsHeader from "../page-requests-header/page-requests-header.jsx";
import PageRequestsData from "../page-requests-data/page-requests-data.jsx";

const PageRequests = (props) => {

  return (
    <React.Fragment>
      <main className="user-page__main">
        <div className="page-main">

          <div className="table-data">

            <PageRequestsHeader />
            <PageRequestsData />

          </div>

        </div>
      </main>
    </React.Fragment>
  );
};


export default PageRequests;
