import React, {PureComponent} from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import PropTypes from "prop-types";
import PageHeader from "../page-header/page-header.jsx";
import PageMain from "../page-main/page-main/page-main.jsx";
import PageUsers from "../page-users/page-users/page-users.jsx"
import PageRequests from "../page-requests/page-requests/page-requests.jsx"
import PageSignIn from "../page-sign-in/page-sign-in.jsx"

import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/reducer.js";
import {getLocalFilteredUsers, getLocalFilteredRequests} from "../../reducer/selectors.js";

import {Screens} from "../../const.js"



class App extends PureComponent {
  constructor(props) {
    super(props);

    this._menuHeaderItemClickHandler = this._menuHeaderItemClickHandler.bind(this);
    this._mainBigButtonClickHandler = this._mainBigButtonClickHandler.bind(this);

    this.state = {
      currentPage: Screens.MAIN_SCREEN,
    };

    this._logOutHandler = this._logOutHandler.bind(this);
  }


  _mainBigButtonClickHandler(evt) {
    evt.preventDefault();

    if (evt.target.dataset.group === `/users`) {
      this.props.onUserStatusFilterClick(evt.target.dataset.button);
      this.setState({
        currentPage: Screens.USERS_SCREEN,
      });
    } else if (evt.target.dataset.group === `/requests`) {
      this.props.onRequestsStatusFilterClick(evt.target.dataset.button);
      this.setState({
        currentPage: Screens.REQUESTS_SCREEN,
      });
    }
  }


  _logOutHandler() {
    alert(`Выход из системы`);
  };

  _menuHeaderItemClickHandler(pageIndex) {
    this.setState({
      currentPage: Number.parseInt(pageIndex, 10),
    });
  };

  _renderApp() {
    const {currentPage} = this.state;
    const {EventsList, UsersList, RequestsList, MainButtonsGroups} = this.props;
    const {onUserStatusFilterClick, onRequestsStatusFilterClick} = this.props;
    const {passangersCount, driversCount, usersCount} = this.props;
    const {requestsCount, requestsAvgMark} = this.props;

    switch (currentPage) {
      case Screens.USERS_SCREEN:
        return (
          <React.Fragment>
            <PageHeader
              selectedMenuItem = {Screens.USERS_SCREEN}
              onMenuItemClick = {this._menuHeaderItemClickHandler}
              onLogOutButtonClick = {this._logOutHandler}
            />
            <PageUsers
              UsersList = {UsersList}
              onFilterStatusItemButtonClick = {onUserStatusFilterClick}
              passangersCount = {passangersCount}
              driversCount = {driversCount}
              usersCount = {usersCount}
            />
          </React.Fragment>
        );

      case Screens.CITIES_SCREEN:
        return (
          <React.Fragment>
            <PageHeader
              selectedMenuItem = {Screens.CITIES_SCREEN}
              onMenuItemClick = {this._menuHeaderItemClickHandler}
              onLogOutButtonClick = {this._logOutHandler}
            />
          </React.Fragment>
        );

      case Screens.REQUESTS_SCREEN:
        return (
          <React.Fragment>
            <PageHeader
              selectedMenuItem = {Screens.REQUESTS_SCREEN}
              onMenuItemClick = {this._menuHeaderItemClickHandler}
              onLogOutButtonClick = {this._logOutHandler}
            />
            <PageRequests
              RequestsList = {RequestsList}
              UsersList = {UsersList}
              onFilterStatusItemButtonClick = {onRequestsStatusFilterClick}
              requestsCount = {requestsCount}
              requestsAvgMark = {requestsAvgMark}
            />
          </React.Fragment>
        );

      default:
        return (
          <React.Fragment>
            <PageHeader
              selectedMenuItem = {Screens.MAIN_SCREEN}
              onMenuItemClick = {this._menuHeaderItemClickHandler}
              onLogOutButtonClick = {this._logOutHandler}
            />
            <PageMain
              EventsList = {EventsList}
              onBigButtonClick = {this._mainBigButtonClickHandler}
              MainButtonsGroups = {MainButtonsGroups}
            />
          </React.Fragment>
        );
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/sign-in">
            <PageSignIn />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

};


App.propTypes = {
  EventsList: PropTypes.array.isRequired,
  UsersList: PropTypes.array.isRequired,
  RequestsList: PropTypes.array.isRequired,

  MainButtonsGroups: PropTypes.array.isRequired,

  passangersCount: PropTypes.number,
  driversCount: PropTypes.number,
  usersCount: PropTypes.number,
  notAuthorizedUsersCount: PropTypes.number,

  requestsCount: PropTypes.number,
  requestsAvgMark: PropTypes.number,

  currentUsersStatusFilter: PropTypes.string.isRequired,

  onUserStatusFilterClick: PropTypes.func.isRequired,
  onRequestsStatusFilterClick: PropTypes.func.isRequired,
};


const mapStateToProps = (state) => ({
  EventsList: state.EventsList,
  UsersList: getLocalFilteredUsers(state.UsersList, state.currentUsersStatusFilter),
  RequestsList: getLocalFilteredRequests(state.RequestsList, state.currentRequestsStatusFilter),

  MainButtonsGroups: state.MainButtonsGroups,

  passangersCount: state.passangersCount,
  driversCount: state.driversCount,
  usersCount: state.usersCount,
  notAuthorizedUsersCount: state.notAuthorizedUsersCount,

  requestsCount: state.requestsCount,
  requestsAvgMark: state.requestsAvgMark,

  currentUsersStatusFilter: state.currentUsersStatusFilter,
  currentRequestsStatusFilter: state.currentRequestsStatusFilter,
});

const mapDispatchToProps = (dispatch) => ({
  onUserStatusFilterClick(filterName) {
    dispatch(ActionCreator.setUsersStatusFilter(filterName));
  },

  onRequestsStatusFilterClick(filterName) {
    dispatch(ActionCreator.setRequestsStatusFilter(filterName));
  },
});


export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
