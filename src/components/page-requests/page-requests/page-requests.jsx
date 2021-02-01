import React from "react";
import PageRequestsHeader from "../page-requests-header/page-requests-header.jsx";
import PageRequestsData from "../page-requests-data/page-requests-data.jsx";

const PageRequests = (props) => {

  return (
    <React.Fragment>
      <main className="user-page__main">
        <div className="page-main">

          <div className="table-data">

            <div className="table-data__header">

              <form className="filter" action="#" method="post">
                <div className="filter__wrapper">
                  <label className="filter__button table-data__filter" htmlFor="filter-toggle">
                    <svg width="8" height="9" viewBox="0 0 8 9">
                      <g transform="translate(-24.927)">
                        <path d="M73.473,97.772c.141.2.1.034.1,4.113a.444.444,0,0,0,.71.356c1.254-.946,1.5-1.028,1.5-1.47,0-2.973-.035-2.805.1-3L77.923,95H71.436Z" transform="translate(-45.691 -93.329)" fill="#212226"/>
                        <path d="M33,.226A.419.419,0,0,0,32.628,0h-7.28A.42.42,0,0,0,25,.661l.354.482h7.262c.32-.436.534-.624.382-.917Z" transform="translate(0)" fill="#212226"/>
                      </g>
                    </svg>
                    Фильтр
                  </label>
                  <input className="filter__toggle visually-hidden" id="filter-toggle" type="checkbox" />

                  <div className="filter__list">
                    <div className="filter__item">
                      <input id="filter-1" className="filter__input visually-hidden" type="radio" name="filter-status" value="1" />
                      <label className="filter__label filter__label--yellow" htmlFor="filter-1">В ожидании</label>
                    </div>

                    <div className="filter__item">
                      <input id="filter-2" className="filter__input visually-hidden" type="radio" name="filter-status" value="2" />
                      <label className="filter__label filter__label--red" htmlFor="filter-2">Авторизованные</label>
                    </div>

                    <div className="filter__item">
                      <input id="filter-3" className="filter__input visually-hidden" type="radio" name="filter-status" value="3" />
                      <label className="filter__label filter__label--green" htmlFor="filter-3">Водители</label>
                    </div>
                  </div>

                </div>
              </form>

              <div className="table-data__counters counters">
                <ul className="counters__list">
                  <li className="counters__item counters__item--drivers">
                    <p className="counters__name">Всего заявок</p>
                    <p className="counters__value">4</p>
                  </li>
                  <li className="counters__item counters__item--summary">
                    <p className="counters__name">Средняя оценка</p>
                    <p className="counters__value">5</p>
                  </li>
                </ul>

              </div>
            </div>

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
                  <tr className="dashboard-table__row">
                    <td className="dashboard-table__data"><div className="state-icon state-icon--size16 state-icon--red"></div></td>
                    <td className="dashboard-table__data">4</td>
                    <td className="dashboard-table__data"><a href="#">4</a></td>
                    <td className="dashboard-table__data">ост. Ленина</td>
                    <td className="dashboard-table__data">08.10.2020</td>
                    <td className="dashboard-table__data">08:34</td>
                    <td className="dashboard-table__data">40</td>
                    <td className="dashboard-table__data">1</td>
                    <td className="dashboard-table__data"></td>
                    <td className="dashboard-table__data">Курск</td>
                    <td className="dashboard-table__data"></td>
                    <td className="dashboard-table__data"></td>
                    <td className="dashboard-table__data">Грязный салон</td>
                    <td className="dashboard-table__data">5</td>
                    <td className="dashboard-table__data dashboard-table__data--with-button">
                      <button className="dashboard-table__row-button dashboard-table__row-button--active">
                        <svg width="3" height="17" viewBox="0 0 3 17">
                          <g transform="translate(310 -1341) rotate(90)">
                            <circle cx="1.5" cy="1.5" r="1.5" transform="translate(1341 307)" fill="#212226"/>
                            <circle cx="1.5" cy="1.5" r="1.5" transform="translate(1348 307)" fill="#212226"/>
                            <circle cx="1.5" cy="1.5" r="1.5" transform="translate(1355 307)" fill="#212226"/>
                          </g>
                        </svg>
                      </button>

                      <ul className="dashboard-table__row-menu table-row-menu table-row-menu--hide">
                        <li className="table-row-menu__item">
                          <a className="table-row-menu__button" href="#">
                            <svg width="7" height="7" viewBox="0 0 7 7">
                              <path d="M3.5,0A3.5,3.5,0,1,0,7,3.5,3.5,3.5,0,0,0,3.5,0ZM5.51,2.909l-2.2,2.2a.495.495,0,0,1-.7,0L1.49,3.987a.495.495,0,1,1,.7-.7l.771.771L4.81,2.209a.495.495,0,0,1,.7.7Z" fill="#212226"/>
                            </svg>
                            Выполнить заявку
                          </a>
                        </li>
                        <li className="table-row-menu__item">
                          <a className="table-row-menu__button" href="#">
                            <svg width="5" height="7" viewBox="0 0 5 7">
                              <path d="M73.474.636a.359.359,0,0,1,.372-.361h1.527a.359.359,0,0,1,.371.361v.4h.275v-.4A.634.634,0,0,0,75.373,0H73.846A.634.634,0,0,0,73.2.636v.4h.275Zm0,0" transform="translate(-71.94)" fill="#e35a5a"/>
                              <path d="M28.756,128.867H32.01a.586.586,0,0,0,.557-.619V124H28.2v4.248a.586.586,0,0,0,.557.619Zm2.5-4.21a.138.138,0,1,1,.275,0v3.251a.138.138,0,0,1-.275,0Zm-1.015,0a.138.138,0,1,1,.275,0v3.251a.138.138,0,0,1-.275,0Zm-1.015,0a.138.138,0,1,1,.275,0v3.251a.138.138,0,0,1-.275,0Zm0,0" transform="translate(-27.714 -121.867)" fill="#e35a5a"/>
                              <path d="M.344,68.688H4.995a.344.344,0,1,0,0-.688H.344a.344.344,0,1,0,0,.688Zm0,0" transform="translate(0 -66.83)" fill="#e35a5a"/>
                            </svg>
                            Удалить заявку
                          </a>
                        </li>
                      </ul>

                    </td>
                  </tr>
                  <tr className="dashboard-table__row">
                    <td className="dashboard-table__data"><div className="state-icon state-icon--size16 state-icon--yellow"></div></td>
                    <td className="dashboard-table__data">3</td>
                    <td className="dashboard-table__data"><a href="#">3</a></td>
                    <td className="dashboard-table__data">ост. Садовая</td>
                    <td className="dashboard-table__data">08.10.2020</td>
                    <td className="dashboard-table__data">08:34</td>
                    <td className="dashboard-table__data">80</td>
                    <td className="dashboard-table__data">2</td>
                    <td className="dashboard-table__data"></td>
                    <td className="dashboard-table__data">Курск</td>
                    <td className="dashboard-table__data"></td>
                    <td className="dashboard-table__data"></td>
                    <td className="dashboard-table__data">Приставал</td>
                    <td className="dashboard-table__data">5</td>
                    <td className="dashboard-table__data dashboard-table__data--with-button">
                      <button className="dashboard-table__row-button">
                        <svg width="3" height="17" viewBox="0 0 3 17">
                          <g transform="translate(310 -1341) rotate(90)">
                            <circle cx="1.5" cy="1.5" r="1.5" transform="translate(1341 307)" fill="#212226"/>
                            <circle cx="1.5" cy="1.5" r="1.5" transform="translate(1348 307)" fill="#212226"/>
                            <circle cx="1.5" cy="1.5" r="1.5" transform="translate(1355 307)" fill="#212226"/>
                          </g>
                        </svg>
                      </button>
                    </td>
                  </tr>
                  <tr className="dashboard-table__row">
                    <td className="dashboard-table__data"><div className="state-icon state-icon--size16 state-icon--green"></div></td>
                    <td className="dashboard-table__data">2</td>
                    <td className="dashboard-table__data"><a href="#">2</a></td>
                    <td className="dashboard-table__data">пр. Дружбы</td>
                    <td className="dashboard-table__data">08.10.2020</td>
                    <td className="dashboard-table__data">08:34</td>
                    <td className="dashboard-table__data">120</td>
                    <td className="dashboard-table__data">3</td>
                    <td className="dashboard-table__data"><a href="#">13</a></td>
                    <td className="dashboard-table__data">Курск</td>
                    <td className="dashboard-table__data"></td>
                    <td className="dashboard-table__data"></td>
                    <td className="dashboard-table__data">Вежливый</td>
                    <td className="dashboard-table__data">5</td>
                    <td className="dashboard-table__data dashboard-table__data--with-button">
                      <button className="dashboard-table__row-button">
                        <svg width="3" height="17" viewBox="0 0 3 17">
                          <g transform="translate(310 -1341) rotate(90)">
                            <circle cx="1.5" cy="1.5" r="1.5" transform="translate(1341 307)" fill="#212226"/>
                            <circle cx="1.5" cy="1.5" r="1.5" transform="translate(1348 307)" fill="#212226"/>
                            <circle cx="1.5" cy="1.5" r="1.5" transform="translate(1355 307)" fill="#212226"/>
                          </g>
                        </svg>
                      </button>
                    </td>
                  </tr>
                  <tr className="dashboard-table__row">
                    <td className="dashboard-table__data"><div className="state-icon state-icon--size16 state-icon--green"></div></td>
                    <td className="dashboard-table__data">1</td>
                    <td className="dashboard-table__data"><a href="#">1</a></td>
                    <td className="dashboard-table__data">Никитская</td>
                    <td className="dashboard-table__data">08.10.2020</td>
                    <td className="dashboard-table__data">08:34</td>
                    <td className="dashboard-table__data">160</td>
                    <td className="dashboard-table__data">3</td>
                    <td className="dashboard-table__data"><a href="#">159</a></td>
                    <td className="dashboard-table__data">Курск</td>
                    <td className="dashboard-table__data"></td>
                    <td className="dashboard-table__data"></td>
                    <td className="dashboard-table__data">Быстро доехали</td>
                    <td className="dashboard-table__data">5</td>
                    <td className="dashboard-table__data dashboard-table__data--with-button">
                      <button className="dashboard-table__row-button">
                        <svg width="3" height="17" viewBox="0 0 3 17">
                          <g transform="translate(310 -1341) rotate(90)">
                            <circle cx="1.5" cy="1.5" r="1.5" transform="translate(1341 307)" fill="#212226"/>
                            <circle cx="1.5" cy="1.5" r="1.5" transform="translate(1348 307)" fill="#212226"/>
                            <circle cx="1.5" cy="1.5" r="1.5" transform="translate(1355 307)" fill="#212226"/>
                          </g>
                        </svg>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>

        </div>
      </main>
    </React.Fragment>
  );
};


export default PageRequests;
