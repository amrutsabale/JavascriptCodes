/* Sol.3: async code using promises with asyncAwait
 Solves callbacks hell problem & more readablity */

//asynchronous code
function print(msg) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(msg);
      resolve();
    }, Math.random() * 100);
  });
}

async function printAll() {
  await print("start");
  await print("printing something");
  await print("finish");
}

printAll();
