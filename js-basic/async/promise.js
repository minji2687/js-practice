"use Strict";

//state: pending --> fulfilled or rejected

//Producer & Consumer
//when new Promise is created, the excutor runs automatically

//1.Producer
const promise = new Promise((resolve, reject) => {
  console.log("doing something");
  setTimeout(() => {
    resolve("elle");
    // reject(new Error("no network"));
  }, 2000);
});

//2.Consumer
promise //
  .then((result) => console.log(result))
  .catch((error) => console.log(error))
  .finally(() => {
    console.log("finally");
  });

// Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber //
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then(console.log);

const getHet = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Het");
    }, 1000);
  });
};

const getEgg = (hen) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`new Error ${hen} => Egg`)), 1000);
  });
};

const Cook = (egg) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 계란후라이`), 1000);
  });
};

getHet() //
  .then(getEgg)
  .catch((error) => "빵")
  .then(Cook)
  .then(console.log)
  .catch(console.log);
