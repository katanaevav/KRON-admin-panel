import React from "react";

const PageUsers = (props) => {

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
                      <label className="filter__label filter__label--purple" htmlFor="filter-1">Неавторизованные</label>
                    </div>

                    <div className="filter__item">
                      <input id="filter-2" className="filter__input visually-hidden" type="radio" name="filter-status" value="2" />
                      <label className="filter__label filter__label--blue" htmlFor="filter-2">Авторизованные</label>
                    </div>

                    <div className="filter__item">
                      <input id="filter-3" className="filter__input visually-hidden" type="radio" name="filter-status" value="3" />
                      <label className="filter__label filter__label--black" htmlFor="filter-3">Водители</label>
                    </div>
                  </div>

                </div>
              </form>

              <div className="table-data__counters counters">
                <ul className="counters__list">
                  <li className="counters__item counters__item--passangers">
                    <p className="counters__name">Пассажиров</p>
                    <p className="counters__value">1</p>
                  </li>
                  <li className="counters__item counters__item--drivers">
                    <p className="counters__name">Водителей</p>
                    <p className="counters__value">1</p>
                  </li>
                  <li className="counters__item counters__item--summary">
                    <p className="counters__name">Всего пользователей</p>
                    <p className="counters__value">4</p>
                  </li>
                </ul>

              </div>
            </div>

            <div className="table-data__table">
              <table className="dashboard-table dashboard-table--dark-row">
                <thead>
                  <tr className="dashboard-table__header events-table">
                    <th className="dashboard-table__head-data dashboard-table__head-data--no-scroll">Статус</th>
                    <th className="dashboard-table__head-data dashboard-table__head-data--no-scroll">ID</th>
                    <th className="dashboard-table__head-data dashboard-table__head-data--no-scroll">ФИО</th>
                    <th className="dashboard-table__head-data dashboard-table__head-data--no-scroll">Телефон</th>
                    <th className="dashboard-table__head-data dashboard-table__head-data--no-scroll">Email</th>
                    <th className="dashboard-table__head-data dashboard-table__head-data--no-scroll">Пол</th>
                    <th className="dashboard-table__head-data dashboard-table__head-data--no-scroll">ДР</th>
                    <th className="dashboard-table__head-data dashboard-table__head-data--no-scroll">Дата регистрации</th>
                    <th className="dashboard-table__head-data dashboard-table__head-data--no-scroll">Город</th>
                    <th className="dashboard-table__head-data dashboard-table__head-data--no-scroll">Права</th>
                    <th className="dashboard-table__head-data dashboard-table__head-data--no-scroll">Дата выдачи</th>
                    <th className="dashboard-table__head-data dashboard-table__head-data--no-scroll">Марка</th>
                    <th className="dashboard-table__head-data dashboard-table__head-data--no-scroll">Цвет</th>
                    <th className="dashboard-table__head-data dashboard-table__head-data--no-scroll">Гос. номер</th>
                    <th className="dashboard-table__head-data dashboard-table__head-data--no-scroll">Свидетельство рег.</th>
                    <th className="dashboard-table__head-data dashboard-table__head-data--no-scroll">Страховой полис</th>
                    <th className="dashboard-table__head-data dashboard-table__head-data--no-scroll"></th>                  
                  </tr>
                </thead>
                <tbody>
                  <tr className="dashboard-table__row">
                    <td className="dashboard-table__data"><div className="state-icon state-icon--size16 state-icon--black"></div></td>
                    <td className="dashboard-table__data">4</td>
                    <td className="dashboard-table__data">Иванов Иван</td>
                    <td className="dashboard-table__data">+79207328889</td>
                    <td className="dashboard-table__data">Example@mail.ru</td>
                    <td className="dashboard-table__data">M</td>
                    <td className="dashboard-table__data">19.01.2021</td>
                    <td className="dashboard-table__data">19.01.2021</td>
                    <td className="dashboard-table__data">Курск</td>
                    <td className="dashboard-table__data">11АА 112233</td>
                    <td className="dashboard-table__data">19.01.2021</td>
                    <td className="dashboard-table__data">Mazda 6</td>
                    <td className="dashboard-table__data">Синий</td>
                    <td className="dashboard-table__data">А067АА 46</td>
                    <td className="dashboard-table__data">ХХХХ  000000</td>
                    <td className="dashboard-table__data">ХХХ  000000000</td>
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
                            Авторизовать
                          </a>
                        </li>  
                        <li className="table-row-menu__item">
                          <a className="table-row-menu__button" href="#">
                            <svg width="6" height="7" viewBox="0 0 6 7">
                              <g transform="translate(-36.365 -9.569)">
                                <path d="M97.441,11.177v-1.1a.508.508,0,0,0-.508-.508H92.965a.508.508,0,0,0-.508.508v.159h3.289a.928.928,0,0,1,.925.9h.56A.584.584,0,0,1,97.441,11.177Z" transform="translate(-55.295)" fill="#212226"/>
                                <path d="M389.361,269.052v2.705h.26a.508.508,0,0,0,.508-.508v-2.238a.584.584,0,0,1-.212.04Z" transform="translate(-347.982 -255.758)" fill="#212226"/>
                                <path d="M390.547,153.167l-.551-.482a.118.118,0,0,0-.077-.029h-.557v1.228h.555a.117.117,0,0,0,.079-.031l.553-.512a.117.117,0,0,0,0-.174Z" transform="translate(-347.982 -141.055)" fill="#212226"/>
                                <path d="M40.45,89.232H36.828a.464.464,0,0,0-.463.463v4.942a.463.463,0,0,0,.463.463H40.45a.464.464,0,0,0,.463-.463V89.7A.464.464,0,0,0,40.45,89.232Zm-.911,3.552H37.727a.232.232,0,1,1,0-.465H39.54a.232.232,0,1,1,0,.465Zm.494-1.235h-2.8a.232.232,0,0,1,0-.465h2.8a.232.232,0,0,1,0,.465Z" transform="translate(0 -78.532)" fill="#212226"/>
                              </g>
                            </svg>
                            История поездок
                          </a>
                        </li>
                        <li className="table-row-menu__item">
                          <a className="table-row-menu__button" href="#">
                            <svg width="5" height="7" viewBox="0 0 5 7">
                              <path d="M73.474.636a.359.359,0,0,1,.372-.361h1.527a.359.359,0,0,1,.371.361v.4h.275v-.4A.634.634,0,0,0,75.373,0H73.846A.634.634,0,0,0,73.2.636v.4h.275Zm0,0" transform="translate(-71.94)" fill="#e35a5a"/>
                              <path d="M28.756,128.867H32.01a.586.586,0,0,0,.557-.619V124H28.2v4.248a.586.586,0,0,0,.557.619Zm2.5-4.21a.138.138,0,1,1,.275,0v3.251a.138.138,0,0,1-.275,0Zm-1.015,0a.138.138,0,1,1,.275,0v3.251a.138.138,0,0,1-.275,0Zm-1.015,0a.138.138,0,1,1,.275,0v3.251a.138.138,0,0,1-.275,0Zm0,0" transform="translate(-27.714 -121.867)" fill="#e35a5a"/>
                              <path d="M.344,68.688H4.995a.344.344,0,1,0,0-.688H.344a.344.344,0,1,0,0,.688Zm0,0" transform="translate(0 -66.83)" fill="#e35a5a"/>
                            </svg>
                            Удалить пользователя
                          </a>
                        </li>
                      </ul>

                    </td>
                  </tr>
                  <tr className="dashboard-table__row">
                    <td className="dashboard-table__data"><div className="state-icon state-icon--size16 state-icon--blue"></div></td>
                    <td className="dashboard-table__data">4</td>
                    <td className="dashboard-table__data">Иванов Иван</td>
                    <td className="dashboard-table__data">+79207328889</td>
                    <td className="dashboard-table__data">Example@mail.ru</td>
                    <td className="dashboard-table__data">M</td>
                    <td className="dashboard-table__data">19.01.2021</td>
                    <td className="dashboard-table__data">19.01.2021</td>
                    <td className="dashboard-table__data">Курск</td>
                    <td className="dashboard-table__data"></td>
                    <td className="dashboard-table__data"></td>
                    <td className="dashboard-table__data"></td>
                    <td className="dashboard-table__data"></td>
                    <td className="dashboard-table__data"></td>
                    <td className="dashboard-table__data"></td>
                    <td className="dashboard-table__data"></td>
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
                    <td className="dashboard-table__data"><div className="state-icon state-icon--size16 state-icon--blue"></div></td>
                    <td className="dashboard-table__data">4</td>
                    <td className="dashboard-table__data">Иванов Иван</td>
                    <td className="dashboard-table__data">+79207328889</td>
                    <td className="dashboard-table__data">Example@mail.ru</td>
                    <td className="dashboard-table__data">M</td>
                    <td className="dashboard-table__data">19.01.2021</td>
                    <td className="dashboard-table__data">19.01.2021</td>
                    <td className="dashboard-table__data">Курск</td>
                    <td className="dashboard-table__data"></td>
                    <td className="dashboard-table__data"></td>
                    <td className="dashboard-table__data"></td>
                    <td className="dashboard-table__data"></td>
                    <td className="dashboard-table__data"></td>
                    <td className="dashboard-table__data"></td>
                    <td className="dashboard-table__data"></td>
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
                    <td className="dashboard-table__data"><div className="state-icon state-icon--size16 state-icon--purple"></div></td>
                    <td className="dashboard-table__data">4</td>
                    <td className="dashboard-table__data">Иванов Иван</td>
                    <td className="dashboard-table__data">+79207328889</td>
                    <td className="dashboard-table__data">Example@mail.ru</td>
                    <td className="dashboard-table__data">M</td>
                    <td className="dashboard-table__data">19.01.2021</td>
                    <td className="dashboard-table__data">19.01.2021</td>
                    <td className="dashboard-table__data">Курск</td>
                    <td className="dashboard-table__data"></td>
                    <td className="dashboard-table__data"></td>
                    <td className="dashboard-table__data"></td>
                    <td className="dashboard-table__data"></td>
                    <td className="dashboard-table__data"></td>
                    <td className="dashboard-table__data"></td>
                    <td className="dashboard-table__data"></td>
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


export default PageUsers;