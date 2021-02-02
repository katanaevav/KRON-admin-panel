import React from "react";
import UserTable from "../user-table/user-table.jsx"
import {Users} from "../../../mocks/users.js"

const PageUsersData = (props) => {

  // userStatus: `state-icon--black`,
  // userId: `4`,
  // userFIO: `Иванов Иван`,
  // userPhone: `+79207388549`,
  // userEmail: `ivan.ivanov@yandex.ru`,
  // userSex: `M`,
  // userBirthday: `19.01.2001`,
  // userDateReg: `19.01.2021`,
  // userCity: `Курск`,
  // userDriveLicense: `11АА 125988`,
  // userDriveLicenseDate: `03.02.2020`,
  // userCar: `Mazda 6`,
  // userCarColor: `Синий`,
  // userCarNumber: `А067КП 46`,
  // userCarRegSert: `XXXX 000248`,
  // userInsPoliсy: `XXX 056354359`,

  const usersList = Users.map((user) => (
    <UserTable
      key={user.userId}
      userStatus={user.userStatus}
      userId={user.userId}
      userFIO={user.userFIO}
      userPhone={user.userPhone}
      userEmail={user.userEmail}
      userSex={user.userSex}
      userBirthday={user.userBirthday}
      userDateReg={user.userDateReg}
      userCity={user.userCity}
      userDriveLicense={user.evenuserDriveLicensetDate}
      userDriveLicenseDate={user.userDriveLicenseDate}
      userCar={user.userCar}
      userCarColor={user.userCarColor}
      userCarNumber={user.userCarNumber}
      userCarRegSert={user.userCarRegSert}
      userInsPoliсy={user.userInsPoliсy}
    />
  ));

  return (
    <React.Fragment>
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
            {usersList}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};


export default PageUsersData;

