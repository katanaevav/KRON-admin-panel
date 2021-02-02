import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import UserMenuButton from "../user-menu-button/user-menu-button.jsx";

class UserTable extends PureComponent {

  constructor(props) {
    super(props);
  }

  render() {

    const {userStatus, userId, userFIO, userPhone, userEmail, userSex, userBirthday, userDateReg, userCity,
          userDriveLicense, userDriveLicenseDate, userCar, userCarColor, userCarNumber, userCarRegSert, userInsPoliсy} = this.props;

    return (
      <React.Fragment>
        <tr className="dashboard-table__row">
          <td className="dashboard-table__data"><div className={`state-icon state-icon--size16 ${userStatus}`}></div></td>
          <td className="dashboard-table__data">{userId}</td>
          <td className="dashboard-table__data">{userFIO}</td>
          <td className="dashboard-table__data">{userPhone}</td>
          <td className="dashboard-table__data">{userEmail}</td>
          <td className="dashboard-table__data">{userSex}</td>
          <td className="dashboard-table__data">{userBirthday}</td>
          <td className="dashboard-table__data">{userDateReg}</td>
          <td className="dashboard-table__data">{userCity}</td>
          <td className="dashboard-table__data">{userDriveLicense}</td>
          <td className="dashboard-table__data">{userDriveLicenseDate}</td>
          <td className="dashboard-table__data">{userCar}</td>
          <td className="dashboard-table__data">{userCarColor}</td>
          <td className="dashboard-table__data">{userCarNumber}</td>
          <td className="dashboard-table__data">{userCarRegSert}</td>
          <td className="dashboard-table__data">{userInsPoliсy}</td>
          <td className="dashboard-table__data dashboard-table__data--with-button">
            <UserMenuButton
              userId = {userId}
            />
          </td>
        </tr>
      </React.Fragment>
    );
  }
};


UserTable.propTypes = {
  userId: PropTypes.string.isRequired,
  userFIO: PropTypes.string.isRequired,
  userPhone: PropTypes.string,
  userEmail: PropTypes.string,
  userSex: PropTypes.string,
  userBirthday: PropTypes.string,
  userDateReg: PropTypes.string,
  userCity: PropTypes.string,
  userDriveLicense: PropTypes.string,
  userDriveLicenseDate: PropTypes.string,
  userCar: PropTypes.string,
  userCarColor: PropTypes.string,
  userCarNumber: PropTypes.string,
  userCarRegSert: PropTypes.string,
  userInsPoliсy: PropTypes.string,
};


export default UserTable;

