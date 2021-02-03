import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import RequestMenuButton from "../request-menu-button/request-menu-button.jsx";
import withDropDownMenuButton from "../../../hoc/with-drop-down-menu-button/with-drop-down-menu-button.js"

const RequestMenuButtonWrapper = withDropDownMenuButton(RequestMenuButton);

class RequestsTable extends PureComponent {
  constructor(props) {
    super(props);

    this._passangerIdClickHandle = this._passangerIdClickHandle.bind(this);
    this._driverIdClickHandle = this._driverIdClickHandle.bind(this);
  }

  _passangerIdClickHandle(evt) {
    evt.preventDefault();

    const {requestIdPassanger, onUserIdClick} = this.props;
    onUserIdClick(requestIdPassanger);
  }

  _driverIdClickHandle(evt) {
    evt.preventDefault();

    const {requestIdDriver, onUserIdClick} = this.props;
    onUserIdClick(requestIdDriver);
  }

    // requestStatus: `state-icon--red`,
    // requestId: `1`,
    // requestIdPassanger: `5`,
    // requestStart: `ост. Ленина`,
    // requestDate: `01.02.2021`,
    // requestTime: `07:50`,
    // requestCost: `40`,
    // requestPassangersCount: `1`,
    // requestIdDriver: `1`,
    // requestCity: `Курск`,
    // requestGood: ``,
    // requestBad: ``,
    // requestClientComment: `Грязный салон`,
    // requestMark: `5`,

  render() {
    const {requestStatus, requestId, requestIdPassanger, requestStart, requestDate, requestTime, requestCost, requestPassangersCount,
          requestIdDriver, requestCity, requestGood, requestBad, requestClientComment, requestMark} = this.props;

    return (
      <React.Fragment>
        <tr className="dashboard-table__row">
          <td className="dashboard-table__data"><div className={`state-icon state-icon--size16 ${requestStatus}`}></div></td>
          <td className="dashboard-table__data">{requestId}</td>
          <td className="dashboard-table__data"><a href="#" onClick={this._passangerIdClickHandle}>{requestIdPassanger}</a></td>
          <td className="dashboard-table__data">{requestStart}</td>
          <td className="dashboard-table__data">{requestDate}</td>
          <td className="dashboard-table__data">{requestTime}</td>
          <td className="dashboard-table__data">{requestCost}</td>
          <td className="dashboard-table__data">{requestPassangersCount}</td>
          <td className="dashboard-table__data"><a href="#" onClick={this._driverIdClickHandle}>{requestIdDriver}</a></td>
          <td className="dashboard-table__data">{requestCity}</td>
          <td className="dashboard-table__data">{requestGood}</td>
          <td className="dashboard-table__data">{requestBad}</td>
          <td className="dashboard-table__data">{requestClientComment}</td>
          <td className="dashboard-table__data">{requestMark}</td>
          <td className="dashboard-table__data dashboard-table__data--with-button">
            <RequestMenuButtonWrapper
              requestId = {requestId}
            />
          </td>
        </tr>
      </React.Fragment>
    );
  }
};


RequestsTable.propTypes = {

  requestStatus: PropTypes.string.isRequired,
  requestId: PropTypes.string.isRequired,
  requestIdPassanger: PropTypes.string.isRequired,
  requestStart: PropTypes.string.isRequired,
  requestDate: PropTypes.string.isRequired,
  requestTime: PropTypes.string.isRequired,
  requestCost: PropTypes.string.isRequired,
  requestPassangersCount: PropTypes.string.isRequired,
  requestIdDriver: PropTypes.string,
  requestCity: PropTypes.string.isRequired,
  requestGood: PropTypes.string,
  requestBad: PropTypes.string,
  requestClientComment: PropTypes.string,
  requestMark: PropTypes.string,
  onUserIdClick: PropTypes.func,
};


export default RequestsTable;
