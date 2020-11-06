"use strict";

class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === "elle" && password === "dream") ||
          (id === "coder" && password === "academy")
        ) {
          resolve(id);
        } else {
          reject(new Error("not found"));
        }
      }, 2000);
    });
  }
  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "elle") {
          resolve({ name: "elle", role: "admin" });
        } else {
          reject(new Error("no access"));
        }
      }, 1000);
    });
  }
}

const userStorage = new UserStorage();
const id = prompt("Enter your id");
const password = prompt("Enter your password");

// userStorage
//   .loginUser(id, password) //
//   .then((id) => userStorage.getRoles(id))
//   .then((userWithRole) => {
//     alert(`Hello ${userWithRole.name} you have a ${userWithRole.role} role`);
//   })
//   .catch((error) => console.log(error));

async function userStoragefunc() {
  const userid = await userStorage.loginUser(id, password);
  const userWithRole = await userStorage.getRoles(userid);
  console.log(userStorage.getRoles(userid));
  return userWithRole;
}

userStoragefunc() //
  .then((userWithRole) => {
    console.log(
      `Hello ${userWithRole.name} you have a ${userWithRole.role} role`
    );
  });
