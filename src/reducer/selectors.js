const getLocalFilteredUsers = (users, filter) => {
  return filter === `` ? users : users.slice().filter((user) => user.userStatus === filter);
};

const getLocalFilteredRequests = (requests, filter) => {
  return filter === `` ? requests : requests.slice().filter((request) => request.requestStatus === filter);
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

const getEventById = (events, eventId) => {
  return events.find( event => event.eventId === eventId );
};

const getUserById = (users, userId) => {
  return users.find( user => user.userId === userId );
};

const getEventKeyMapById = (events, eventId) => {
  return Object.entries(getEventById(events, eventId)).
    filter(([dataKey, dataValue]) => {
      return EventsKeys.hasOwnProperty(dataKey);
    }).
    map(([dataKey, dataValue]) => {
      return {key: EventsKeys[dataKey], value: dataValue}
    });
};

const getUserKeyMapById = (users, userId) => {
  return Object.entries(getUserById(users, userId)).
    filter(([dataKey, dataValue]) => {
      return UsersKeys.hasOwnProperty(dataKey);
    }).
    map(([dataKey, dataValue]) => {
      return {key: UsersKeys[dataKey], value: dataValue}
    });
};

export {getLocalFilteredUsers, getLocalFilteredRequests, getEventKeyMapById, getUserKeyMapById};
