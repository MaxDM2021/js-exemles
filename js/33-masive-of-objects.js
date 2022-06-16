const friends = [
  { name: 'Mango', online: false },
  { name: 'Kiwi', online: true },
  { name: 'Ajax', online: false },
  { name: 'Poly', online: true },
];

// console.table(friends);

// for (const friend of friends) {
//     console.log(friend.name);

//     friend.newprop = 555;
// }

console.table(friends);

// Ищем друга по имени

const findFriendByName = function (allFriends, friendName) {
  // .includes - не подходит, т.к. применяется только для коллекции примитивов
  console.log(allFriends.includes(name));

  for (const friend of allFriends) {
    console.log(friend);
    console.log(friend.name);

    if (friend.name === friendName) {
      return 'НАШЛИ!!!';
    }
  }
  return 'НЕ НАШЛИ:(';
};

console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));

// Получить все имена друщей

const getAllNames = function (allFriends) {
  const names = [];

  for (const friend of allFriends) {
    console.log(friend.name);

    names.push(friend.name);
  }

  return names;
};
console.log(getAllNames(friends));

// Получить онлайн друзей

const getOnlineFriedns = function (allFriends) {
  const onlineFriends = [];

  for (const friend of allFriends) {
    console.log(friend);
    console.log(friend.online);
    if (friend.online) {
      onlineFriends.push(friend);
    }
  }
  return onlineFriends;
};

console.log(getOnlineFriedns(friends));

// Получить офлайн друзей

const getOfflineFriedns = function (allFriends) {
  const offlineFriends = [];

  for (const friend of allFriends) {
    console.log(friend);
    console.log(friend.online);
    if (!friend.online) {
      offlineFriends.push(friend);
    }
  }
  return offlineFriends;
};

console.log(getOfflineFriedns(friends));

// Сделать 2 массива онлайн и офлайн,
// Если true в первый, если нет во второй,

const getFriensByOnlineStatus = function (allFriends) {
  const friendsByStatus = {
    offlines: [],
    onlines: [],
  };

  for (const friend of allFriends) {

    console.log(friend);
    console.log(friend.online);

    if (friend.online) {
      friendsByStatus.onlines.push(friend);
      continue;
    }

    friendsByStatus.offlines.push(friend);
  }

  return friendsByStatus;
};

console.log(getFriensByOnlineStatus(friends));



// Как узнать кол-во свойств в этом объекте:

const x = {
    a: 1,
    b: 2,
    c: 50, 
    d: 100,
}

const keys = Object.keys(x).length;

console.log(keys);




