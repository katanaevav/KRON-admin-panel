import React, {PureComponent} from "react";
import ReactModal from 'react-modal';
// import BigButtonsGroup from "../big-buttons-group/big-buttons-group.jsx";


ReactModal.setAppElement('.user-page');

class MainEvents extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      showModalInfo: false
    };

    this._eventIdClickHandle = this._eventIdClickHandle.bind(this);
    this._closeModalWindowHandle = this._closeModalWindowHandle.bind(this);
  }

  _eventIdClickHandle(evt) {
    evt.preventDefault();
    console.log(`click`);
    this.setState({ showModalInfo: true });
  }

  _closeModalWindowHandle() {
    this.setState({ showModalInfo: false });
  }

  // const {buttonsGroups} = props;

  // const groups = buttonsGroups.map((group) => (
  //   <BigButtonsGroup
  //     key={group.buttonsGroupName}
  //     groupIcon={group.buttonsGroupIco}
  //     groupName={group.buttonsGroupName}
  //     groupHrefLinkToAll={group.buttonsGroupLinkToAll}
  //     groupButtons={group.buttonsGroupButtons}
  //   />
  // ));

  render() {

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
                  <tr className="dashboard-table__row">
                    <td className="dashboard-table__data"><div className="state-icon state-icon--size16 state-icon--purple"></div></td>
                    <td className="dashboard-table__data">19.01.2021</td>
                    <td className="dashboard-table__data">08:34</td>
                    <td className="dashboard-table__data">Неавторизованный пользователь</td>
                    <td className="dashboard-table__data"><a href="#" onClick={this._eventIdClickHandle}>123</a></td>
                    <td className="dashboard-table__data"></td>
                    <td className="dashboard-table__data"></td>
                  </tr>
                  <tr className="dashboard-table__row">
                    <td className="dashboard-table__data"><div className="state-icon state-icon--size16 state-icon--black"></div></td>
                    <td className="dashboard-table__data">19.01.2021</td>
                    <td className="dashboard-table__data">08:34</td>
                    <td className="dashboard-table__data">Водитель</td>
                    <td className="dashboard-table__data"><a href="#" onClick={this._eventIdClickHandle}>123</a></td>
                    <td className="dashboard-table__data"></td>
                    <td className="dashboard-table__data"></td>
                  </tr>
                  <tr className="dashboard-table__row">
                    <td className="dashboard-table__data"><div className="state-icon state-icon--size16 state-icon--blue"></div></td>
                    <td className="dashboard-table__data">19.01.2021</td>
                    <td className="dashboard-table__data">08:34</td>
                    <td className="dashboard-table__data">Авторизованный пользователь</td>
                    <td className="dashboard-table__data"><a href="#" onClick={this._eventIdClickHandle}>123</a></td>
                    <td className="dashboard-table__data"></td>
                    <td className="dashboard-table__data"></td>
                  </tr>
                  <tr className="dashboard-table__row">
                    <td className="dashboard-table__data"><div className="state-icon state-icon--size16 state-icon--green"></div></td>
                    <td className="dashboard-table__data">19.01.2021</td>
                    <td className="dashboard-table__data">08:34</td>
                    <td className="dashboard-table__data">Выполненная заявка</td>
                    <td className="dashboard-table__data"><a href="#" onClick={this._eventIdClickHandle}>123</a></td>
                    <td className="dashboard-table__data"></td>
                    <td className="dashboard-table__data"></td>
                  </tr>
                  <tr className="dashboard-table__row">
                    <td className="dashboard-table__data"><div className="state-icon state-icon--size16 state-icon--yellow"></div></td>
                    <td className="dashboard-table__data">19.01.2021</td>
                    <td className="dashboard-table__data">08:34</td>
                    <td className="dashboard-table__data">В ожиданни</td>
                    <td className="dashboard-table__data"><a href="#" onClick={this._eventIdClickHandle}>123</a></td>
                    <td className="dashboard-table__data"></td>
                    <td className="dashboard-table__data"></td>
                  </tr>
                  <tr className="dashboard-table__row">
                    <td className="dashboard-table__data"><div className="state-icon state-icon--size16 state-icon--red"></div></td>
                    <td className="dashboard-table__data">19.01.2021</td>
                    <td className="dashboard-table__data">08:34</td>
                    <td className="dashboard-table__data">Заявка не выполнена</td>
                    <td className="dashboard-table__data"><a href="#" onClick={this._eventIdClickHandle}>123</a></td>
                    <td className="dashboard-table__data"></td>
                    <td className="dashboard-table__data"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <ReactModal
           isOpen={this.state.showModalInfo}
           contentLabel="Информация о событии"
           onRequestClose={this._closeModalWindowHandle}
           className="modal-window"
           overlayClassName="modal-overlay"
        >
          <p>Modal text!</p>
          <button onClick={this._closeModalWindowHandle}>Close Modal</button>
        </ReactModal>
      </React.Fragment>
    );
  }
};


export default MainEvents;
