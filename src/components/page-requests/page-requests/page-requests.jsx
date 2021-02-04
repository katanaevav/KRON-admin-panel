import React from "react";
import PropTypes from "prop-types";
import PageRequestsHeader from "../page-requests-header/page-requests-header.jsx";
import PageRequestsData from "../page-requests-data/page-requests-data.jsx";

const PageRequests = (props) => {

  const {RequestsList} = props;

  return (
    <React.Fragment>
      <main className="user-page__main">
        <div className="page-main">

          <div className="table-data">

            <PageRequestsHeader />
            <PageRequestsData
              RequestsList = {RequestsList}
            />

          </div>

        </div>
      </main>
    </React.Fragment>
  );
};


PageRequests.propTypes = {
  RequestsList: PropTypes.array.isRequired,
};


export default PageRequests;
