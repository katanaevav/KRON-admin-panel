import {Events} from "./mocks/events.js";
import {Users} from "./mocks/users.js";



const getEventById = (eventId) => {
  return Events.find( event => event.eventId === eventId );
};

const getUserById = (userId) => {
  return Users.find( user => user.userId === userId );
};


const EventsKeys = {
  eventId: `Код события`,
  // eventStatus:	`Статус события`,
  eventDate: `Дата события`,
  eventTime: `Время события`,
  eventType: `Тип события`,
};

const UsersKeys = {
  // userStatus: `Статус пользователя`,
  userAuthorized: `Авторизован`,
  userId: `Код пользователя`,
  userFIO: `ФИО`,
  userPhone: `Телефон`,
  userEmail: `Email`,
  userSex: `Пол`,
  userBirthday: `Дата рождения`,
  userDateReg: `Дата регистрации`,
  userCity: `Город`,
  userDriveLicense: `Права`,
  userDriveLicenseDate: `Дата выдачи прав`,
  userCar: `Марка автомобиля`,
  userCarColor: `Цвет автомобиля`,
  userCarNumber: `Гос. номер автомобиля`,
  userCarRegSert: `Свидетельство регистрации`,
  userInsPoliсy: `Страховой полис`,
};

const getEventKeyMapById = (eventId) => {
  return Object.entries(getEventById(eventId)).
    filter(([dataKey, dataValue]) => {
      // console.log(dataKey, EventsKeys.hasOwnProperty(dataKey));
      return EventsKeys.hasOwnProperty(dataKey);
    }).
    map(([dataKey, dataValue]) => {
      return {key: EventsKeys[dataKey], value: dataValue}
    });
};

// const getEventKeyMapById = (eventId) => {
//   return Object.entries(Events.
//         find( event => event.eventId === eventId )).
//         map(([dataKey, dataValue]) => {
//           return {key: EventsKeys[dataKey], value: dataValue}
//         });
// };

const getUserKeyMapById = (userId) => {
  return Object.entries(getUserById(userId)).
    filter(([dataKey, dataValue]) => {
      // console.log(dataKey, UsersKeys.hasOwnProperty(dataKey));
      return UsersKeys.hasOwnProperty(dataKey);
    }).
    map(([dataKey, dataValue]) => {
      return {key: UsersKeys[dataKey], value: dataValue}
    });
};

// const getUserKeyMapById = (userId) => {
//   return Object.entries(Users.
//         find( user => user.userId === userId )).
//         map(([dataKey, dataValue]) => {
//           return {key: UsersKeys[dataKey], value: dataValue}
//         });
// };

export {getEventById, getUserById, getEventKeyMapById, getUserKeyMapById};
