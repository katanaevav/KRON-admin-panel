import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import PageRequestsHeader from "../page-requests-header/page-requests-header.jsx";
import PageRequestsData from "../page-requests-data/page-requests-data.jsx";


class PageRequests extends PureComponent {
  constructor(props) {
    super(props);

    this._onFilterStatusItemButtonClick = this._onFilterStatusItemButtonClick.bind(this);
  }

  _onFilterStatusItemButtonClick(statusFilter) {
    this.props.onFilterStatusItemButtonClick(statusFilter);
  }

  render() {
    const {RequestsList, UsersList, requestsCount, requestsAvgMark} = this.props;

    return (
      <React.Fragment>
        <main className="user-page__main">
          <div className="page-main">

            <div className="table-data">

              <PageRequestsHeader
                onFilterStatusItemButtonClick = {this._onFilterStatusItemButtonClick}
                requestsCount = {requestsCount}
                requestsAvgMark = {requestsAvgMark}
              />
              <PageRequestsData
                RequestsList = {RequestsList}
                UsersList = {UsersList}
              />

            </div>

          </div>
        </main>
      </React.Fragment>
    );
  }
};


PageRequests.propTypes = {
  RequestsList: PropTypes.array.isRequired,
  UsersList: PropTypes.array.isRequired,
  onFilterStatusItemButtonClick: PropTypes.func.isRequired,
  requestsCount: PropTypes.number,
  requestsAvgMark: PropTypes.number,
};


export default PageRequests;
