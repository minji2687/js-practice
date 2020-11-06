//async & await

//clear style of using promise :)

//.async
async function fetchUser() {
  return "minji";
}

const user = fetchUser();
// user.then(console.log);
// console.log(user);

//await

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function getApple() {
  await delay(2000);
  return "사과";
}

async function getBanana() {
  await delay(1000);
  return "바나나";
}

async function pickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}

// pickFruits().then(console.log);

function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) => {
    console.log(fruits);
    return fruits.join("+");
  });
}

pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);
