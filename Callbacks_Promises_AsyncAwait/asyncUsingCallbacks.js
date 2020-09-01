/* Sol.1-asyn code using callbacks */

function print(msg, callback) {
  setTimeout(() => {
    console.log(msg);
    callback(); //for next function
  }, Math.random() * 100);
}

print("start", () => {
  print("printing something", () => {
    //leads callbacks hell problem
    print("finish", () => {});
  });
});
