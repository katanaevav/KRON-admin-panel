import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";


class RequestsStatusFilter extends PureComponent {

  constructor(props) {
    super(props);

    this.dropdownMenu = createRef();

    this._filterItemButtonClick = this._filterItemButtonClick.bind(this);
    this._showMenu = this._showMenu.bind(this);
  }

  _filterItemButtonClick(evt) {
    evt.preventDefault();
    const statusFilter = evt.target.dataset.filter;

    this.props.onFilterStatusItemButtonClick(statusFilter);
    this.props.onHideMenu();
  }

  _showMenu(evt) {
    evt.preventDefault();
    this.props.onOpenMenu(evt, this.dropdownMenu);
  }

  render() {

    const {showMenu} = this.props;


    return (
      <React.Fragment>

          <div className="filter__wrapper">
            <button className="filter__button table-data__filter" htmlFor="filter-toggle" onClick={this._showMenu}>
              <svg width="8" height="9" viewBox="0 0 8 9">
                <g transform="translate(-24.927)">
                  <path d="M73.473,97.772c.141.2.1.034.1,4.113a.444.444,0,0,0,.71.356c1.254-.946,1.5-1.028,1.5-1.47,0-2.973-.035-2.805.1-3L77.923,95H71.436Z" transform="translate(-45.691 -93.329)" fill="#212226"/>
                  <path d="M33,.226A.419.419,0,0,0,32.628,0h-7.28A.42.42,0,0,0,25,.661l.354.482h7.262c.32-.436.534-.624.382-.917Z" transform="translate(0)" fill="#212226"/>
                </g>
              </svg>
              Фильтр
            </button>

            <div
              className={`filter__list ${showMenu ? `filter__list--show` : ``}`}
              ref={this.dropdownMenu}
            >
              <div className="filter__item">
                <button className="filter__label filter__label--yellow" data-filter="state-icon--yellow" htmlFor="filter-1" onClick={this._filterItemButtonClick}>В ожидании</button>
              </div>

              <div className="filter__item">
                <button className="filter__label filter__label--green" data-filter="state-icon--green" htmlFor="filter-2" onClick={this._filterItemButtonClick}>Выполненные</button>
              </div>

              <div className="filter__item">
                <button className="filter__label filter__label--red" data-filter="state-icon--red" htmlFor="filter-3" onClick={this._filterItemButtonClick}>Не выполненные</button>
              </div>

              <div>
                <hr></hr>
              </div>

              <div className="filter__item">
                <button className="filter__label" data-filter="" htmlFor="filter-3" onClick={this._filterItemButtonClick}>Все</button>
              </div>
            </div>

          </div>

      </React.Fragment>
    );
  }
};


RequestsStatusFilter.propTypes = {
  showMenu: PropTypes.bool.isRequired,
  onOpenMenu: PropTypes.func.isRequired,
  onHideMenu: PropTypes.func.isRequired,
  onFilterStatusItemButtonClick: PropTypes.func.isRequired,
};

export default RequestsStatusFilter;

