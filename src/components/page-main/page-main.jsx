import React from "react";

const PageMain = (props) => {

  return (
    <React.Fragment>
      <main className="user-page__main">
        <div className="page-main">
          <div className="dashboard dashboard-groups">
            <div className="dashboard__buttons">
              <ul className="buttons-group">

                <li className="buttons-group__item">
                  <div className="dashboard-groups__header buttons-group__header">
                    <svg width="11" height="14" viewBox="0 0 8 10">
                      <path d="M75.258,6.2H69.55a.9.9,0,0,0-.9.9v8.208a.9.9,0,0,0,.9.9h5.708a.9.9,0,0,0,.9-.9V7.1A.9.9,0,0,0,75.258,6.2Zm-.945,8.52a.481.481,0,0,1-.481.481H70.976a.481.481,0,0,1-.481-.481V13.474a1.4,1.4,0,0,1,.648-1.181,1.38,1.38,0,0,0,2.522,0,1.4,1.4,0,0,1,.648,1.182ZM72.4,10.384a1.01,1.01,0,0,1,1.01,1.01,1.027,1.027,0,1,1-2.02,0A1.01,1.01,0,0,1,72.4,10.384ZM73.71,9.33H71.1a.333.333,0,0,1,0-.667H73.71a.333.333,0,1,1,0,.667ZM74.544,8H70.264a.333.333,0,0,1,0-.667h4.279a.333.333,0,0,1,0,.667Z" transform="translate(-68.654 -6.205)"/>
                    </svg>
                    <h2 className="dashboard-groups__title">Пользователи</h2>
                    <a className="dashboard-groups__link-to-all" href="#">посмотреть все</a>
                  </div>
                  <ul className="buttons-group__buttons">
                    <li className="buttons-group__button">
                      <a href="#" className="main-button">
                        <div className="main-button__count">1</div>
                        <div className="main-button__text">
                          <div className="main-button__button-name">
                            <div className="main-button__icon state-icon state-icon--purple"></div>
                            <p>Неавторизованные</p>
                          </div>
                          <p className="buttons-group__button-name">Не подтвердили номер телефона</p>
                        </div>
                      </a>
                    </li>
                    <li className="buttons-group__button">
                      <a href="#" className="main-button">
                        <div className="main-button__count">1</div>
                        <div className="main-button__text">
                          <div className="main-button__button-name">
                            <div className="main-button__icon state-icon state-icon--blue"></div>
                            <p>Авторизованные</p>
                          </div>
                          <p className="buttons-group__button-name">Подтвердили номер<br />телефона</p>
                        </div>
                      </a>
                    </li>
                    <li className="buttons-group__button">
                      <a href="#" className="main-button">
                        <div className="main-button__count">1</div>
                        <div className="main-button__text">
                          <div className="main-button__button-name">
                            <div className="main-button__icon state-icon state-icon--black"></div>
                            <p>Водители</p>
                          </div>
                          <p className="buttons-group__button-name">Авторизованные<br />водители</p>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="buttons-group__item">
                  <div className="dashboard-groups__header buttons-group__header">
                    <svg width="13" height="14" viewBox="0 0 9 10">
                      <g id="document-sheets" transform="translate(-36.365 -9.569)">
                        <path d="M99.578,11.865V10.294a.725.725,0,0,0-.726-.725h-5.67a.725.725,0,0,0-.725.725v.227h4.7a1.325,1.325,0,0,1,1.322,1.287h.8A.834.834,0,0,1,99.578,11.865Z" transform="translate(-54.954)"/>
                        <path d="M389.361,269.069v3.865h.371a.725.725,0,0,0,.726-.726v-3.2a.836.836,0,0,1-.3.057Z" transform="translate(-345.834 -254.179)"/>
                        <path d="M391.055,153.386l-.788-.689a.168.168,0,0,0-.11-.041h-.8v1.754h.793a.167.167,0,0,0,.113-.044l.791-.731a.168.168,0,0,0,0-.248Z" transform="translate(-345.834 -140.184)"/>
                        <path d="M42.2,89.232H37.027a.662.662,0,0,0-.662.662v7.06a.662.662,0,0,0,.662.662H42.2a.662.662,0,0,0,.662-.662v-7.06A.662.662,0,0,0,42.2,89.232Zm-1.3,5.074H38.31a.332.332,0,1,1,0-.664H40.9a.332.332,0,1,1,0,.664Zm.706-1.765h-4a.332.332,0,0,1,0-.664h4a.332.332,0,0,1,0,.664Z" transform="translate(0 -78.047)"/>
                      </g>
                    </svg>
                    <h2 className="dashboard-groups__title">Заявки</h2>
                    <a className="dashboard-groups__link-to-all" href="#">посмотреть все</a>
                  </div>
                  <ul className="buttons-group__buttons">
                    <li className="buttons-group__button">
                      <a href="#" className="main-button">
                        <div className="main-button__count">1</div>
                        <div className="main-button__text">
                          <div className="main-button__button-name">
                            <div className="main-button__icon state-icon state-icon--yellow"></div>
                            <p>В ожиданнии</p>
                          </div>
                          <p className="buttons-group__button-name">Ожидают отклика<br />водителя</p>
                        </div>
                      </a>
                    </li>
                    <li className="buttons-group__button">
                      <a href="#" className="main-button">
                        <div className="main-button__count">1</div>
                        <div className="main-button__text">
                          <div className="main-button__button-name">
                            <div className="main-button__icon state-icon state-icon--blue"></div>
                            <p>Выполненные</p>
                          </div>
                          <p className="buttons-group__button-name">Пассажир сел в<br />автомобиль</p>
                        </div>
                      </a>
                    </li>
                    <li className="buttons-group__button">
                      <a href="#" className="main-button">
                        <div className="main-button__count">1</div>
                        <div className="main-button__text">
                          <div className="main-button__button-name">
                            <div className="main-button__icon state-icon state-icon--red"></div>
                            <p>Не выполненые</p>
                          </div>
                          <p className="buttons-group__button-name">Поездка была отменена или время поиска закончилось</p>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>

              </ul>
            </div>

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
                        <td className="dashboard-table__data"><a href="#">123</a></td>
                        <td className="dashboard-table__data"></td>
                        <td className="dashboard-table__data"></td>
                      </tr>
                      <tr className="dashboard-table__row">
                        <td className="dashboard-table__data"><div className="state-icon state-icon--size16 state-icon--black"></div></td>
                        <td className="dashboard-table__data">19.01.2021</td>
                        <td className="dashboard-table__data">08:34</td>
                        <td className="dashboard-table__data">Водитель</td>
                        <td className="dashboard-table__data"><a href="#">123</a></td>
                        <td className="dashboard-table__data"></td>
                        <td className="dashboard-table__data"></td>
                      </tr>
                      <tr className="dashboard-table__row">
                        <td className="dashboard-table__data"><div className="state-icon state-icon--size16 state-icon--blue"></div></td>
                        <td className="dashboard-table__data">19.01.2021</td>
                        <td className="dashboard-table__data">08:34</td>
                        <td className="dashboard-table__data">Авторизованный пользователь</td>
                        <td className="dashboard-table__data"><a href="#">123</a></td>
                        <td className="dashboard-table__data"></td>
                        <td className="dashboard-table__data"></td>
                      </tr>
                      <tr className="dashboard-table__row">
                        <td className="dashboard-table__data"><div className="state-icon state-icon--size16 state-icon--green"></div></td>
                        <td className="dashboard-table__data">19.01.2021</td>
                        <td className="dashboard-table__data">08:34</td>
                        <td className="dashboard-table__data">Выполненная заявка</td>
                        <td className="dashboard-table__data"><a href="#">123</a></td>
                        <td className="dashboard-table__data"></td>
                        <td className="dashboard-table__data"></td>
                      </tr>
                      <tr className="dashboard-table__row">
                        <td className="dashboard-table__data"><div className="state-icon state-icon--size16 state-icon--yellow"></div></td>
                        <td className="dashboard-table__data">19.01.2021</td>
                        <td className="dashboard-table__data">08:34</td>
                        <td className="dashboard-table__data">В ожиданни</td>
                        <td className="dashboard-table__data"><a href="#">123</a></td>
                        <td className="dashboard-table__data"></td>
                        <td className="dashboard-table__data"></td>
                      </tr>
                      <tr className="dashboard-table__row">
                        <td className="dashboard-table__data"><div className="state-icon state-icon--size16 state-icon--red"></div></td>
                        <td className="dashboard-table__data">19.01.2021</td>
                        <td className="dashboard-table__data">08:34</td>
                        <td className="dashboard-table__data">Заявка не выполнена</td>
                        <td className="dashboard-table__data"><a href="#">123</a></td>
                        <td className="dashboard-table__data"></td>
                        <td className="dashboard-table__data"></td>                    
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};


export default PageMain;