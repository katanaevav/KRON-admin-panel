import {Events} from "./mocks/events.js";
import {Requests} from "./mocks/requests.js";
import {Users} from "./mocks/users.js";


const initialState = {
  EventsList: Events,
  UsersList: Users,
  RequestsList: Requests,

  currentUsersStatusFilter: ``,
};


const ActionType = {
  SET_USERS_STATUS_FILTER: `SET_USERS_STATUS_FILTER`,
};


const ActionCreator = {
  setUsersStatusFilter: (filterName) => {
    return {
      type: ActionType.SET_USERS_STATUS_FILTER,
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
  }

  return state;
};


export {reducer, ActionType, ActionCreator};
