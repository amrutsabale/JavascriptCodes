/* Sol.2: async code using promises-solves callbacks hell problem */

//asynchronous code

function print(msg) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(msg);
      resolve();
    }, Math.random() * 100);
  });
}

print("start")
  .then(() => print("printing something"))
  .then(() => print("finish"));
