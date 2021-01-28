import React, {PureComponent} from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
// import PropTypes from "prop-types";
import PageHeader from "../page-header/page-header.jsx";
import PageMain from "../page-main/page-main.jsx";
import PageUsers from "../page-users/page-users.jsx"
import PageRequests from "../page-requests/page-requests.jsx"
import SignIn from "../sign-in/sign-in.jsx"

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

    switch (currentPage) {
      case Screens.USERS_SCREEN:
        return (
          <React.Fragment>
            <PageHeader 
              selectedMenuItem = {Screens.USERS_SCREEN}
              onMenuItemClick = {this._menuHeaderItemClickHandler} 
            />
            <PageUsers />
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
            <PageMain />
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
          <Route exact path="/sigin-in">
            <SignIn />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

};


export default App;