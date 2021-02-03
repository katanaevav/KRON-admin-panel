import {Events} from "./mocks/events.js";
import {Users} from "./mocks/users.js";



const getEventById = (eventId) => {
  return Events.find( event => event.eventId === eventId );
};

const getUserById = (userId) => {
  return Users.find( user => user.userId === userId );
};

const getEventKeyMapById = (eventId) => {
  return Object.entries(Events.find( event => event.eventId === eventId )).map(([dataKey, dataValue]) => ({key: dataKey, value: dataValue}));
};

const getUserKeyMapById = (userId) => {
  return Object.entries(Users.find( user => user.userId === userId )).map(([dataKey, dataValue]) => ({key: dataKey, value: dataValue}));
};

export {getEventById, getUserById, getEventKeyMapById, getUserKeyMapById};
