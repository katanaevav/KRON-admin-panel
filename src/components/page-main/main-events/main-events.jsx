import React, {PureComponent} from "react";
// import ReactModal from 'react-modal';
import MainEvent from "../main-event/main-event.jsx";
import InfoModal from "../../info-modal/info-modal/info-modal.jsx";
// import DataInfoList from "../data-info-list/data-info-list.jsx"
import {Events} from "../../../mocks/events.js"


// ReactModal.setAppElement('.user-page');

class MainEvents extends PureComponent {
  constructor(props) {
    super(props);

    this.selectedEvent = [];

    this.state = {
      showModalInfo: false
    };

    this._eventIdClickHandle = this._eventIdClickHandle.bind(this);
    this._closeModalWindowHandle = this._closeModalWindowHandle.bind(this);
  }

  _eventIdClickHandle(eventData) {
    this.selectedEvent = eventData;
    this.setState({ showModalInfo: true });
  }

  _closeModalWindowHandle() {
    this.selectedEvent = [];
    this.setState({ showModalInfo: false });
  }

  // eventStatus: PropTypes.string.isRequired,
  // eventDate: PropTypes.string.isRequired,
  // eventTime: PropTypes.string.isRequired,
  // eventType: PropTypes.string.isRequired,
  // eventId: PropTypes.string.isRequired,
  // onEventIdClick: PropTypes.func,


  render() {

    const eventsList = Events.map((eventItem) => (
      <MainEvent
        key={eventItem.eventId}
        eventStatus={eventItem.eventStatus}
        eventDate={eventItem.eventDate}
        eventTime={eventItem.eventTime}
        eventType={eventItem.eventType}
        eventId={eventItem.eventId}
        onEventIdClick={this._eventIdClickHandle}
      />
    ));

    return (
      <React.Fragment>
        <div className="dashboard__events">
          <div className="dashboard-groups__header">
            <h2 className="dashboard-groups__title">События</h2>
          </div>
          <div className="events-group">
            <div className="events-group__table-wrapper">
              <table className="dashboard-table">
                <thead>
                  <tr className="dashboard-table__header events-table">
                    <th className="dashboard-table__head-data dashboard-table__head-data--no-scroll dashboard-table__head-data--dark">Статус</th>
                    <th className="dashboard-table__head-data dashboard-table__head-data--no-scroll dashboard-table__head-data--dark">Дата</th>
                    <th className="dashboard-table__head-data dashboard-table__head-data--no-scroll dashboard-table__head-data--dark">Время</th>
                    <th className="dashboard-table__head-data dashboard-table__head-data--no-scroll dashboard-table__head-data--dark">Тип события</th>
                    <th className="dashboard-table__head-data dashboard-table__head-data--no-scroll dashboard-table__head-data--dark">ID</th>
                    <th className="dashboard-table__head-data dashboard-table__head-data--no-scroll dashboard-table__head-data--dark"></th>
                    <th className="dashboard-table__head-data dashboard-table__head-data--no-scroll dashboard-table__head-data--dark"></th>
                  </tr>
                </thead>
                <tbody>
                  {eventsList}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <InfoModal
          openState = {this.state.showModalInfo}
          title = {`Информация о событии`}
          onCloweModalWindow = {this._closeModalWindowHandle}
          dataList = {this.selectedEvent}
        />

      </React.Fragment>
    );
  }
};


export default MainEvents;
