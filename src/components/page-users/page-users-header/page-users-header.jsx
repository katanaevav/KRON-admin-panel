import React from "react";

const PageUsersHeader = (props) => {

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};


export default PageUsersHeader;
