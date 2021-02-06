import {Events} from "../mocks/events.js";
import {Requests} from "../mocks/requests.js";
import {Users} from "../mocks/users.js";

const getPassangersCount = (users) => {
  return users.slice().filter((user) => user.userCar === `` && user.userAuthorized === `да`).length;
};

const getDriversCount = (users) => {
  return users.slice().filter((user) => user.userCar !== `` && user.userAuthorized === `да`).length;
};

const getNotAuthorizedUsersCount = (users) => {
  return users.slice().filter((user) => user.userAuthorized !== `да`).length;
}

const getRequestsAvgMark = (requests) => {
  const req = requests.slice().filter((request) => request.requestMark !== ``);

  return req.reduce(function (accumulator, currentValue) {
    return accumulator + (Number.parseInt(currentValue.requestMark, 10) ? Number.parseInt(currentValue.requestMark, 10) : 0);
  }, 0) / req.length;
};

const nAUsersCount = getNotAuthorizedUsersCount(Users);
const authUsersCount = Users.length - nAUsersCount;
const driverUsersCount = getDriversCount(Users);

const getWaitReq = () => {
  return Requests.slice().filter((request) => request.requestStatus === `state-icon--yellow`).length;
}

const getDoneReq = () => {
  return Requests.slice().filter((request) => request.requestStatus === `state-icon--green`).length;
}

const getNotDoneReq = () => {
  return Requests.slice().filter((request) => request.requestStatus === `state-icon--red`).length;
}

const MainButtons = [
  {
    buttonsGroupName: `Пользователи`,
    buttonsGroupIco: `/sprite.svg#users-ico`,
    buttonsGroupLinkToAll: `/users`,
    buttonsGroupButtons: [
      {
        buttonName: `Неавторизованные`,
        buttonCount: nAUsersCount,
        buttonDescription: `Не подтвердили номер телефона`,
        buttonIconColor: `state-icon--purple`,
        buttonLink: `/users`,
      },
      {
        buttonName: `Авторизованные`,
        buttonCount: authUsersCount,
        buttonDescription: `Подтвердили номер \n телефона`,
        buttonIconColor: `state-icon--blue`,
        buttonLink: `/users`,
      },
      {
        buttonName: `Водители`,
        buttonCount: driverUsersCount,
        buttonDescription: `Авторизованные \n водители`,
        buttonIconColor: `state-icon--black`,
        buttonLink: `/users`,
      },
    ],
  },
  {
    buttonsGroupName: `Заявки`,
    buttonsGroupIco: `/sprite.svg#requests-ico`,
    buttonsGroupLinkToAll: `/requests`,
    buttonsGroupButtons: [
      {
        buttonName: `В ожиданнии`,
        buttonCount: getWaitReq(),
        buttonDescription: `Ожидают отклика \n водителя`,
        buttonIconColor: `state-icon--yellow`,
        buttonLink: `/requests`,
      },
      {
        buttonName: `Выполненные`,
        buttonCount: getDoneReq(),
        buttonDescription: `Пассажир сел в \n автомобиль`,
        buttonIconColor: `state-icon--green`,
        buttonLink: `/requests`,
      },
      {
        buttonName: `Не выполненые`,
        buttonCount: getNotDoneReq(),
        buttonDescription: `Поездка была отменена или время поиска закончилось`,
        buttonIconColor: `state-icon--red`,
        buttonLink: `/requests`,
      },
    ],
  },
]


const initialState = {
  EventsList: Events,
  UsersList: Users,
  RequestsList: Requests,

  MainButtonsGroups: MainButtons,

  passangersCount: getPassangersCount(Users),
  driversCount: driverUsersCount, //getDriversCount(Users),
  usersCount: Users.length,
  notAuthorizedUsersCount: nAUsersCount, //getNotAuthorizedUsersCount(Users),

  requestsCount: Requests.length,
  requestsAvgMark: getRequestsAvgMark(Requests),

  currentUsersStatusFilter: ``,
  currentRequestsStatusFilter: ``,
};


const ActionType = {
  SET_USERS_STATUS_FILTER: `SET_USERS_STATUS_FILTER`,
  SET_REQUESTS_STATUS_FILTER: `SET_REQUESTS_STATUS_FILTER`,
};


const ActionCreator = {
  setUsersStatusFilter: (filterName) => {
    return {
      type: ActionType.SET_USERS_STATUS_FILTER,
      payload: filterName,
    };
  },

  setRequestsStatusFilter: (filterName) => {
    return {
      type: ActionType.SET_REQUESTS_STATUS_FILTER,
      payload: filterName,
    };
  },
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_USERS_STATUS_FILTER:
      return Object.assign({}, state, {
        currentUsersStatusFilter: action.payload,
      });

    case ActionType.SET_REQUESTS_STATUS_FILTER:
      return Object.assign({}, state, {
        currentRequestsStatusFilter: action.payload,
      });
  }

  return state;
};


export {reducer, ActionType, ActionCreator};
