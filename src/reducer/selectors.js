const getLocalFilteredUsers = (users, filter) => {
  console.log(filter);
  return filter === `` ? users : users.slice().filter((user) => user.userStatus === filter);
};

export {getLocalFilteredUsers};
