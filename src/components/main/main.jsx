import React from "react";

const Main = (props) => {
  // eslint-disable-next-line react/prop-types
  const {promoMovieTitle, promoMovieGenre, promoMovieYear} = props;

  return (
    <React.Fragment>
      <header className="user-page__header">
        <div className="page-header">
            <img className="page-header__logo" src="./img/logo.png" width="31" height="31" alt="Logo" />
            <nav className="page-header__nav nav">
            <ul className="nav__menu">
              <li className="page-header__item nav__item page-header__item--selected">
                <svg width="11" height="10" viewBox="0 0 11 10">
                  <g transform="translate(-0.001 -17.047)">
                    <g transform="translate(0.001 17.047)">
                      <g transform="translate(0 0)">
                        <path d="M10.588,21.578,8.956,19.946V18.061a.617.617,0,0,0-1.234,0v.651L6.506,17.5a1.624,1.624,0,0,0-2.245,0l-4.08,4.08a.617.617,0,0,0,.873.873l4.08-4.08a.364.364,0,0,1,.5,0l4.081,4.081a.617.617,0,1,0,.873-.873Z" transform="translate(-0.001 -17.047)" fill="#FFFFFF"/>
                        <path d="M72.734,127.837a.3.3,0,0,0-.429,0l-3.589,3.588a.3.3,0,0,0-.089.215v2.617a1.112,1.112,0,0,0,1.112,1.112h1.777v-2.752h2.006v2.752H75.3a1.112,1.112,0,0,0,1.112-1.112v-2.617a.3.3,0,0,0-.089-.215Z" transform="translate(-67.135 -125.342)" fill="#FFFFFF"/>
                      </g>
                    </g>
                  </g>
                </svg>
                <a href="#">Главная</a>
              </li>
              <li className="page-header__item nav__item">
                <svg width="8" height="10" viewBox="0 0 8 10">
                  <path d="M75.258,6.2H69.55a.9.9,0,0,0-.9.9v8.208a.9.9,0,0,0,.9.9h5.708a.9.9,0,0,0,.9-.9V7.1A.9.9,0,0,0,75.258,6.2Zm-.945,8.52a.481.481,0,0,1-.481.481H70.976a.481.481,0,0,1-.481-.481V13.474a1.4,1.4,0,0,1,.648-1.181,1.38,1.38,0,0,0,2.522,0,1.4,1.4,0,0,1,.648,1.182ZM72.4,10.384a1.01,1.01,0,0,1,1.01,1.01,1.027,1.027,0,1,1-2.02,0A1.01,1.01,0,0,1,72.4,10.384ZM73.71,9.33H71.1a.333.333,0,0,1,0-.667H73.71a.333.333,0,1,1,0,.667ZM74.544,8H70.264a.333.333,0,0,1,0-.667h4.279a.333.333,0,0,1,0,.667Z" transform="translate(-68.654 -6.205)" fill="#FFFFFF"/>
                </svg>
                <a href="#">Пользователи</a>
              </li>
              <li className="page-header__item nav__item">
                <svg width="9" height="10" viewBox="0 0 9 10">
                  <g transform="translate(-36.365 -9.569)">
                    <path d="M99.578,11.865V10.294a.725.725,0,0,0-.726-.725h-5.67a.725.725,0,0,0-.725.725v.227h4.7a1.325,1.325,0,0,1,1.322,1.287h.8A.834.834,0,0,1,99.578,11.865Z" transform="translate(-54.954)" fill="#FFFFFF"/>
                    <path d="M389.361,269.069v3.865h.371a.725.725,0,0,0,.726-.726v-3.2a.836.836,0,0,1-.3.057Z" transform="translate(-345.834 -254.179)" fill="#FFFFFF"/>
                    <path d="M391.055,153.386l-.788-.689a.168.168,0,0,0-.11-.041h-.8v1.754h.793a.167.167,0,0,0,.113-.044l.791-.731a.168.168,0,0,0,0-.248Z" transform="translate(-345.834 -140.184)" fill="#FFFFFF"/>
                    <path d="M42.2,89.232H37.027a.662.662,0,0,0-.662.662v7.06a.662.662,0,0,0,.662.662H42.2a.662.662,0,0,0,.662-.662v-7.06A.662.662,0,0,0,42.2,89.232Zm-1.3,5.074H38.31a.332.332,0,1,1,0-.664H40.9a.332.332,0,1,1,0,.664Zm.706-1.765h-4a.332.332,0,0,1,0-.664h4a.332.332,0,0,1,0,.664Z" transform="translate(0 -78.047)" fill="#FFFFFF"/>
                  </g>
                </svg>
                <a href="#">Заявки</a>
              </li>
              <li className="page-header__item nav__item">
                <svg width="10" height="10" viewBox="0 0 10 10">
                  <g transform="translate(0 -0.275)">
                    <g transform="translate(0 0.275)">
                      <path d="M8.655,2.629H9.739a.273.273,0,0,0,.273-.273V1.273A.273.273,0,0,0,9.739,1H8.655a.273.273,0,0,0-.273.273v.208h-1.1a.812.812,0,0,0-.811.811v2.65H4.986V.753A.478.478,0,0,0,4.508.275H.478A.478.478,0,0,0,0,.753V9.8a.478.478,0,0,0,.478.478H1.793V8.295a.19.19,0,0,1,.19-.19H3a.19.19,0,0,1,.19.19v1.98H4.508A.478.478,0,0,0,4.986,9.8V5.608H6.474v2.65a.812.812,0,0,0,.811.811h1.1v.209a.273.273,0,0,0,.273.273H9.739a.273.273,0,0,0,.273-.273V8.195a.273.273,0,0,0-.273-.273H8.655a.273.273,0,0,0-.273.273V8.4h-1.1a.145.145,0,0,1-.145-.145V5.608H8.383v.209a.273.273,0,0,0,.273.273H9.739a.273.273,0,0,0,.273-.273V4.734a.273.273,0,0,0-.273-.273H8.655a.273.273,0,0,0-.273.273v.208H7.14V2.292a.145.145,0,0,1,.145-.145h1.1v.209A.273.273,0,0,0,8.655,2.629ZM2.077,7.2a.19.19,0,0,1-.19.19H1.132a.19.19,0,0,1-.19-.19V6.445a.19.19,0,0,1,.19-.19h.754a.19.19,0,0,1,.19.19V7.2Zm0-1.7a.19.19,0,0,1-.19.19H1.132a.19.19,0,0,1-.19-.19V4.748a.19.19,0,0,1,.19-.19h.754a.19.19,0,0,1,.19.19V5.5Zm0-1.7a.19.19,0,0,1-.19.19H1.132a.19.19,0,0,1-.19-.19V3.051a.19.19,0,0,1,.19-.19h.754a.19.19,0,0,1,.19.19V3.8Zm0-1.7a.19.19,0,0,1-.19.19H1.132a.19.19,0,0,1-.19-.19V1.354a.19.19,0,0,1,.19-.19h.754a.19.19,0,0,1,.19.19v.754ZM4.044,7.2a.19.19,0,0,1-.19.19H3.1a.19.19,0,0,1-.19-.19V6.445a.19.19,0,0,1,.19-.19h.754a.19.19,0,0,1,.19.19Zm0-1.7a.19.19,0,0,1-.19.19H3.1a.19.19,0,0,1-.19-.19V4.748a.19.19,0,0,1,.19-.19h.754a.19.19,0,0,1,.19.19Zm0-1.7a.19.19,0,0,1-.19.19H3.1a.19.19,0,0,1-.19-.19V3.051a.19.19,0,0,1,.19-.19h.754a.19.19,0,0,1,.19.19Zm0-1.7a.19.19,0,0,1-.19.19H3.1a.19.19,0,0,1-.19-.19V1.354a.19.19,0,0,1,.19-.19h.754a.19.19,0,0,1,.19.19Z" transform="translate(0 -0.275)" fill="#FFFFFF"/>
                    </g>
                  </g>
                </svg>                
                <a href="#">Города</a>
              </li>
            </ul>
          </nav>

          <div className="page-header__with-drop-down">

            <div className="page-header__item page-header__user">
              <svg width="7" height="10" viewBox="0 0 7 10">
                <g transform="translate(-82.022 -8.666)">
                  <path d="M88.62,11.1a3.168,3.168,0,0,0-6.161,0,.566.566,0,0,0-.437.55v.745a.567.567,0,0,0,.566.567h.371a.158.158,0,0,0,.158-.158V11.2a2.5,2.5,0,0,1,4.843,0v1.6a.158.158,0,0,0,.158.158h.371a.567.567,0,0,0,.566-.567v-.745A.566.566,0,0,0,88.62,11.1Z" fill="#FFFFFF"/>
                  <path d="M95.993,241.176a1.275,1.275,0,0,1,.081.392,1.942,1.942,0,0,1-3.816,0,1.279,1.279,0,0,1,.081-.392,2.46,2.46,0,0,0-1.512,2.27v2.188a.842.842,0,0,0,.841.842h5a.841.841,0,0,0,.841-.842v-2.188A2.46,2.46,0,0,0,95.993,241.176Z" transform="translate(-8.627 -227.81)" fill="#FFFFFF"/>
                  <path d="M150.972,71.047a2.171,2.171,0,0,0,1.805-1.219,2.972,2.972,0,0,0,.153-.321,2.62,2.62,0,0,0,.209-.989,2.167,2.167,0,1,0-4.334,0,2.634,2.634,0,0,0,.208.989,3.121,3.121,0,0,0,.153.321A2.172,2.172,0,0,0,150.972,71.047Zm0-3.895a1.367,1.367,0,0,1,1.365,1.366c0,.778-.63,1.727-1.365,1.727s-1.366-.95-1.366-1.727A1.367,1.367,0,0,1,150.972,67.153Z" transform="translate(-65.433 -56.519)" fill="#FFFFFF"/>
                </g>
              </svg>
              <a href="#" className="page-header__drop-down-button">Администратор</a>
              <svg width="6" height="9" viewBox="0 0 6 9">
                <g transform="translate(0 8.942) rotate(-90)">
                  <g>
                    <path d="M1.054,0,4.471,3.506,7.888,0,8.942,1.082,4.471,5.671,0,1.082Z" fill="#fff"/>
                  </g>
                </g>
              </svg>
            </div>

            <ul className="page-header__item page-header__drop-down page-header__drop-down--hide">
              <li className="page-header__item page-header__drop-down-item">
                <svg width="6" height="5" viewBox="0 0 6 5">
                  <g transform="translate(0 -41.115)">
                    <g transform="translate(0 41.115)">
                      <path d="M2.5,45.74a.1.1,0,0,1-.008-.053c0-.014-.006-.026-.027-.035s-.031-.016-.031-.021-.015-.009-.045-.012l-.045,0H1.125a.6.6,0,0,1-.441-.184A.6.6,0,0,1,.5,44.99V42.24A.6.6,0,0,1,.684,41.8a.6.6,0,0,1,.441-.184h1.25a.118.118,0,0,0,.08-.025.13.13,0,0,0,.039-.076.657.657,0,0,0,.012-.092.972.972,0,0,0,0-.1q0-.062,0-.078a.127.127,0,0,0-.125-.125H1.125a1.084,1.084,0,0,0-.795.33A1.084,1.084,0,0,0,0,42.24v2.75a1.083,1.083,0,0,0,.33.795,1.083,1.083,0,0,0,.795.33h1.25a.119.119,0,0,0,.08-.025.13.13,0,0,0,.039-.076.659.659,0,0,0,.012-.092.971.971,0,0,0,0-.1Q2.5,45.756,2.5,45.74Z" transform="translate(0 -41.115)" fill="#fefefe"/>
                      <path d="M114.184,52.445l-2.125-2.125a.25.25,0,0,0-.426.176v1.125h-1.75a.253.253,0,0,0-.25.25v1.5a.254.254,0,0,0,.25.25h1.75v1.125a.249.249,0,0,0,.426.176l2.125-2.125a.245.245,0,0,0,0-.352Z" transform="translate(-108.133 -50.121)" fill="#fefefe"/>
                    </g>
                  </g>
                </svg>
                <a href="#">Выйти</a>
              </li>
            </ul>

          </div>
        </div>
      </header>

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

export default Main;