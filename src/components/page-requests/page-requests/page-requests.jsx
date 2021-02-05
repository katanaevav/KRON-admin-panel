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
    const {RequestsList} = this.props;

    return (
      <React.Fragment>
        <main className="user-page__main">
          <div className="page-main">

            <div className="table-data">

              <PageRequestsHeader
                onFilterStatusItemButtonClick = {this._onFilterStatusItemButtonClick}
              />
              <PageRequestsData
                RequestsList = {RequestsList}
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
  onFilterStatusItemButtonClick: PropTypes.func.isRequired,
};


export default PageRequests;
