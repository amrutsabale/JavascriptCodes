//asynchronous code

function print(msg) {
  setTimeout(() => {
    console.log(msg);
  }, Math.random() * 100);
}

print("start");
print("printing something");
print("finish");

//here order of execution print is differ due to asynchronous
//solution: callbacks/promises/asyncAwait
