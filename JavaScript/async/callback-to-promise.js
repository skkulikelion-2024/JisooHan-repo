'use strict';

// Callback Hell example
class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (
              (id === 'jisoo' && password === 'han') ||
              (id === 'han' && password === 'jisoo')
            ) {
              resolve(id);
            } else {
              reject(new Error('not found'));
            }
          }, 2000);
    });
   
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (user === 'han') {
                resolve({ name: 'jisoo', role: 'admin' });
              } else {
                reject(new Error('no access'));
              }
            }, 1000);
        })  
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your passrod');
userStorage
    .loginUser(id, password)
    .then(userStorage.getRoles)
    .then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
    .catch(console.log) 