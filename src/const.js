export const AppRoute = {
  LOGIN: `/login`,
  MAIN: `/`,
  REQUESTS: `/requests`,
  USERS: `/users`
};

export const Screens = {
  MAIN_SCREEN: 1,
  USERS_SCREEN: 2,
  REQUESTS_SCREEN: 3,
  CITIES_SCREEN: 4,
};

// const getNAUsers = () => {
//   return `2`;
// }

// const getAuthUsers = () => {
//   return `7`;
// }

// const getDriverUsers = () => {
//   return `3`;
// }

// const getWaitReq = () => {
//   return `1`;
// }

// const geDoneReq = () => {
//   return `2`;
// }

// const geNotDoneReq = () => {
//   return `2`;
// }

// export const MainButtonsGroups = [
//   {
//     buttonsGroupName: `Пользователи`,
//     buttonsGroupIco: `/sprite.svg#users-ico`,
//     buttonsGroupLinkToAll: `/users`,
//     buttonsGroupButtons: [
//       {
//         buttonName: `Неавторизованные`,
//         buttonCount: getNAUsers(),
//         buttonDescription: `Не подтвердили номер телефона`,
//         buttonIconColor: `state-icon--purple`,
//         buttonLink: `/users`,
//       },
//       {
//         buttonName: `Авторизованные`,
//         buttonCount: getAuthUsers(),
//         buttonDescription: `Подтвердили номер \n телефона`,
//         buttonIconColor: `state-icon--blue`,
//         buttonLink: `/users`,
//       },
//       {
//         buttonName: `Водители`,
//         buttonCount: getDriverUsers(),
//         buttonDescription: `Авторизованные \n водители`,
//         buttonIconColor: `state-icon--black`,
//         buttonLink: `/users`,
//       },
//     ],
//   },
//   {
//     buttonsGroupName: `Заявки`,
//     buttonsGroupIco: `/sprite.svg#requests-ico`,
//     buttonsGroupLinkToAll: `/requests`,
//     buttonsGroupButtons: [
//       {
//         buttonName: `В ожиданнии`,
//         buttonCount: getWaitReq(),
//         buttonDescription: `Ожидают отклика \n водителя`,
//         buttonIconColor: `state-icon--yellow`,
//         buttonLink: `/requests`,
//       },
//       {
//         buttonName: `Выполненные`,
//         buttonCount: geDoneReq(),
//         buttonDescription: `Пассажир сел в \n автомобиль`,
//         buttonIconColor: `state-icon--green`,
//         buttonLink: `/requests`,
//       },
//       {
//         buttonName: `Не выполненые`,
//         buttonCount: geNotDoneReq(),
//         buttonDescription: `Поездка была отменена или время поиска закончилось`,
//         buttonIconColor: `state-icon--red`,
//         buttonLink: `/requests`,
//       },
//     ],
//   },
// ]
