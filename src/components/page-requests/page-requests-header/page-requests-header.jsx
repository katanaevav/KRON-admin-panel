import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import RequestsStatusFilter from "../requests-status-filter/requests-status-filter.jsx";
import withDropDownMenuButton from "../../../hoc/with-drop-down-menu-button/with-drop-down-menu-button.js"

const RequestsStatusFilterWrapper = withDropDownMenuButton(RequestsStatusFilter);


class PageRequestsHeader extends PureComponent {
  constructor(props) {
    super(props);
    this._onFilterStatusItemButtonClick = this._onFilterStatusItemButtonClick.bind(this);
  }

  _onFilterStatusItemButtonClick(statusFilter) {
    this.props.onFilterStatusItemButtonClick(statusFilter);
  }

  render() {
    const {requestsCount, requestsAvgMark} = this.props;

    return (
      <React.Fragment>

        <div className="table-data__header">

        <RequestsStatusFilterWrapper
          onFilterStatusItemButtonClick = {this._onFilterStatusItemButtonClick}
        />

          <div className="table-data__counters counters">
            <ul className="counters__list">
              <li className="counters__item counters__item--drivers">
                <p className="counters__name">Всего заявок</p>
                <p className="counters__value">{requestsCount}</p>
              </li>
              <li className="counters__item counters__item--summary">
                <p className="counters__name">Средняя оценка</p>
                <p className="counters__value">{requestsAvgMark}</p>
              </li>
            </ul>

          </div>
        </div>

      </React.Fragment>
    );
  }
};


PageRequestsHeader.propTypes = {
  onFilterStatusItemButtonClick: PropTypes.func.isRequired,
  requestsCount: PropTypes.number,
  requestsAvgMark: PropTypes.number,
};


export default PageRequestsHeader;
