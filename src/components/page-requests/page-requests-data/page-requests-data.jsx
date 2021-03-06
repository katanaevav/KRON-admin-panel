import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import RequestsTable from "../requests-table/requests-table.jsx";
import InfoModal from "../../info-modal/info-modal/info-modal.jsx";
import {getUserKeyMapById} from "../../../reducer/selectors.js";


class PageRequestsData extends PureComponent {
  constructor(props) {
    super(props);

    this.selectedRequest = [];

    this.state = {
      showModalInfo: false
    };

    this._userIdClickHandle = this._userIdClickHandle.bind(this);
    this._closeModalWindowHandle = this._closeModalWindowHandle.bind(this);
  }

  _userIdClickHandle(userId) {
    this.selectedRequest = getUserKeyMapById(this.props.UsersList, userId);
    this.setState({ showModalInfo: true });
  }

  _closeModalWindowHandle() {
    this.selectedRequest = [];
    this.setState({ showModalInfo: false });
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
    const {RequestsList} = this.props;

    const requests = RequestsList.map((request) => (
      <RequestsTable
        key={request.requestId}
        requestStatus={request.requestStatus}
        requestId={request.requestId}
        requestIdPassanger={request.requestIdPassanger}
        requestStart={request.requestStart}
        requestDate={request.requestDate}
        requestTime={request.requestTime}
        requestCost={request.requestCost}
        requestPassangersCount={request.requestPassangersCount}
        requestIdDriver={request.requestIdDriver}
        requestCity={request.requestCity}
        requestGood={request.requestGood}
        requestBad={request.requestBad}
        requestClientComment={request.requestClientComment}
        requestMark={request.requestMark}
        onUserIdClick={this._userIdClickHandle}
      />
    ));


    return (
      <React.Fragment>

        <div className="table-data__table">
          <table className="dashboard-table dashboard-table--dark-row">
            <thead>
              <tr className="dashboard-table__header events-table">
                <th className="dashboard-table__head-data dashboard-table__head-data--no-scroll">Статус</th>
                <th className="dashboard-table__head-data dashboard-table__head-data--no-scroll">ID заявки</th>
                <th className="dashboard-table__head-data dashboard-table__head-data--no-scroll">ID пассажира</th>
                <th className="dashboard-table__head-data dashboard-table__head-data--no-scroll">Начало</th>
                <th className="dashboard-table__head-data dashboard-table__head-data--no-scroll">Дата</th>
                <th className="dashboard-table__head-data dashboard-table__head-data--no-scroll">Время</th>
                <th className="dashboard-table__head-data dashboard-table__head-data--no-scroll">Сумма</th>
                <th className="dashboard-table__head-data dashboard-table__head-data--no-scroll">Попутчиков</th>
                <th className="dashboard-table__head-data dashboard-table__head-data--no-scroll">ID водителя</th>
                <th className="dashboard-table__head-data dashboard-table__head-data--no-scroll">Город</th>
                <th className="dashboard-table__head-data dashboard-table__head-data--no-scroll">Хорошо выдачи</th>
                <th className="dashboard-table__head-data dashboard-table__head-data--no-scroll">Плохо</th>
                <th className="dashboard-table__head-data dashboard-table__head-data--no-scroll">Комментарий клиента</th>
                <th className="dashboard-table__head-data dashboard-table__head-data--no-scroll">Оценка</th>
                <th className="dashboard-table__head-data dashboard-table__head-data--no-scroll"></th>
              </tr>
            </thead>
            <tbody>

              {requests}

            </tbody>
          </table>
        </div>

        <InfoModal
          openState = {this.state.showModalInfo}
          title = {`Информация о пользователе`}
          onCloweModalWindow = {this._closeModalWindowHandle}
          dataList = {this.selectedRequest}
        />
      </React.Fragment>
    );
  }
};


PageRequestsData.propTypes = {
  RequestsList: PropTypes.array.isRequired,
  UsersList: PropTypes.array.isRequired,
};


export default PageRequestsData;
