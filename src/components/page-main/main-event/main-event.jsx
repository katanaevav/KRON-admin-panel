import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class MainEvent extends PureComponent {

  constructor(props) {
    super(props);

    this._eventIdClickHandle = this._eventIdClickHandle.bind(this);
  }

  _eventIdClickHandle(evt) {
    evt.preventDefault();

    const {eventId, onEventIdClick} = this.props;
    onEventIdClick(eventId);
  }

  // eventStatus: `state-icon--purple`,
  // eventDate: `19.01.2021`,
  // eventTime: `08:34`,
  // eventType: `Неавторизованный пользователь`,
  // eventId: 123,

  render() {
    const {eventStatus, eventDate, eventTime, eventType, eventId} = this.props;

    return (
      <React.Fragment>
        <tr className="dashboard-table__row">
          <td className="dashboard-table__data"><div className={`state-icon state-icon--size16 ${eventStatus}`}></div></td>
          <td className="dashboard-table__data">{eventDate}</td>
          <td className="dashboard-table__data">{eventTime}</td>
          <td className="dashboard-table__data">{eventType}</td>
          <td className="dashboard-table__data"><a href="#" onClick={this._eventIdClickHandle}>{eventId}</a></td>
          <td className="dashboard-table__data"></td>
          <td className="dashboard-table__data"></td>
        </tr>
      </React.Fragment>
    );
  }
};

MainEvent.propTypes = {
  eventStatus: PropTypes.string.isRequired,
  eventDate: PropTypes.string.isRequired,
  eventTime: PropTypes.string.isRequired,
  eventType: PropTypes.string.isRequired,
  eventId: PropTypes.string.isRequired,
  onEventIdClick: PropTypes.func,
};

export default MainEvent;
