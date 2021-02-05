const getLocalFilteredUsers = (users, filter) => {
  return filter === `` ? users : users.slice().filter((user) => user.userStatus === filter);
};

const getLocalFilteredRequests = (requests, filter) => {
  return filter === `` ? requests : requests.slice().filter((request) => request.requestStatus === filter);
};

export {getLocalFilteredUsers, getLocalFilteredRequests};
