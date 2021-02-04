import React, {PureComponent} from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import PropTypes from "prop-types";
import PageHeader from "../page-header/page-header.jsx";
import PageMain from "../page-main/page-main/page-main.jsx";
import PageUsers from "../page-users/page-users/page-users.jsx"
import PageRequests from "../page-requests/page-requests/page-requests.jsx"
import PageSignIn from "../page-sign-in/page-sign-in.jsx"

import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";

import {Screens} from "../../const.js"



class App extends PureComponent {
  constructor(props) {
    super(props);

    this._menuHeaderItemClickHandler = this._menuHeaderItemClickHandler.bind(this);

    this.state = {
      currentPage: Screens.MAIN_SCREEN,
    };
  }

  _menuHeaderItemClickHandler(pageIndex) {
    this.setState({
      currentPage: Number.parseInt(pageIndex, 10),
    });
  };

  _renderApp() {
    const {currentPage} = this.state;
    const {EventsList, UsersList} = this.props;

    switch (currentPage) {
      case Screens.USERS_SCREEN:
        return (
          <React.Fragment>
            <PageHeader
              selectedMenuItem = {Screens.USERS_SCREEN}
              onMenuItemClick = {this._menuHeaderItemClickHandler}
            />
            <PageUsers
              UsersList = {UsersList}
            />
          </React.Fragment>
        );

      case Screens.CITIES_SCREEN:
        return (
          <React.Fragment>
            <PageHeader
              selectedMenuItem = {Screens.CITIES_SCREEN}
              onMenuItemClick = {this._menuHeaderItemClickHandler}
            />
          </React.Fragment>
        );

      case Screens.REQUESTS_SCREEN:
        return (
          <React.Fragment>
            <PageHeader
              selectedMenuItem = {Screens.REQUESTS_SCREEN}
              onMenuItemClick = {this._menuHeaderItemClickHandler}
            />
            <PageRequests />
          </React.Fragment>
        );

      default:
        return (
          <React.Fragment>
            <PageHeader
              selectedMenuItem = {Screens.MAIN_SCREEN}
              onMenuItemClick = {this._menuHeaderItemClickHandler}
            />
            <PageMain
              EventsList = {EventsList}
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

  currentUsersStatusFilter: PropTypes.string.isRequired,

  onUserStatusFilterClick: PropTypes.func.isRequired,
};


const mapStateToProps = (state) => ({
  EventsList: state.EventsList,
  UsersList: state.UsersList,
  RequestsList: state.RequestsList,

  currentUsersStatusFilter: state.currentUsersStatusFilter,
});

const mapDispatchToProps = (dispatch) => ({
  onUserStatusFilterClick(filterName) {
    dispatch(ActionCreator.setUsersStatusFilter(filterName));
  },
});


export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
