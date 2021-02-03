import React, {PureComponent, createRef} from 'react';


const withDropDownMenuButton = (Component) => {
  class withDropDownMenuButton extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        showMenu: false,
      };

      this._showMenu = this._showMenu.bind(this);
      this._closeMenu = this._closeMenu.bind(this);
      this._hideMenu = this._hideMenu.bind(this);
    }

    _showMenu(evt, menu) {
      evt.preventDefault();
      this.dropdownMenu = menu;
      this.setState({showMenu: true});
      document.addEventListener("click", this._closeMenu);
    }

    _closeMenu(evt) {
      if (!this.dropdownMenu.current.parentNode.contains(evt.target)) {
        this._hideMenu();
      }
    }

    _hideMenu() {
      this.setState({showMenu: false});
      document.removeEventListener('click', this._closeMenu);
    }



    render() {
      const {showMenu} = this.state;

      return <Component
        {...this.props}
        showMenu = {showMenu}
        onOpenMenu = {this._showMenu}
        onHideMenu = {this._hideMenu}
      >
      </Component>;
    }
  }

  withDropDownMenuButton.propTypes = {};

  return withDropDownMenuButton;
};


export default withDropDownMenuButton;
