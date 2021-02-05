import {Events} from "../mocks/events.js";
import {Requests} from "../mocks/requests.js";
import {Users} from "../mocks/users.js";

const getPassangersCount = (users) => {
  return users.slice().filter((user) => user.userCar === `` && user.userAuthorized).length;
};

const getDriversCount = (users) => {
  return users.slice().filter((user) => user.userCar !== `` && user.userAuthorized).length;
};

const getNotAuthorizedUsersCount = (users) => {
  return users.slice().filter((user) => !user.userAuthorized).length;
}

const getRequestsAvgMark = (requests) => {
  const req = requests.slice().filter((request) => request.requestMark !== ``);

  return req.reduce(function (accumulator, currentValue) {
    return accumulator + (Number.parseInt(currentValue.requestMark, 10) ? Number.parseInt(currentValue.requestMark, 10) : 0);
  }, 0) / req.length;
};


const initialState = {
  EventsList: Events,
  UsersList: Users,
  RequestsList: Requests,

  passangersCount: getPassangersCount(Users),
  driversCount: getDriversCount(Users),
  usersCount: Users.length,
  notAuthorizedUsersCount: getNotAuthorizedUsersCount(Users),

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
