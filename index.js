const calculateTotalBalance = (users) =>
  users.reduce((total, user) => total + user.balance, 0);

const getUsersWithFriend = (users, friendName) =>
  users
    .filter((user) => user.friends.includes(friendName))
    .map((user) => user.name);

const getNamesSortedByFriendsCount = (users) =>
  [...users]
    .sort((a, b) => a.friends.length - b.friends.length)
    .map((user) => user.name);

const getSortedUniqueSkills = (users) =>
  users
    .flatMap((user) => user.skills)
    .filter((skill, index, array) => array.indexOf(skill) === index)
    .sort();

console.log(calculateTotalBalance(users));
console.log(getUsersWithFriend(users, "Briana Decker"));
console.log(getUsersWithFriend(users, "Goldie Gentry"));
console.log(getNamesSortedByFriendsCount(users));
console.log(getSortedUniqueSkills(users));
