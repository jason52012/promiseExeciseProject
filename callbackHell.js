// js is a single-thread programing

// =========== 1 ==============

// function getData(name) {
//   setTimeout(() => {
//     return {
//       name: name,
//       age: Math.floor(Math.random() * 20),
//       major: "CS",
//     };
//   }, 2000);
// }

// console.log("start");

// console.log(getData("Wilson")); //undefined

// console.log("end");

// =========== 1 ==============

// =========== 2 callback function ==============

// function getData(name, callback) {
//   setTimeout(() => {
//     callback({
//       name: name,
//       age: Math.floor(Math.random() * 20),
//       major: "CS",
//     });
//   }, 2000);
// }

// console.log("start");

// getData("Wilson", (obj) => {
//   console.log(obj);
// });

// console.log("end");

// =========== 2 ==============

// =========== 3 callback hell ==============

// function getData(name, callback) {
//   setTimeout(() => {
//     callback({
//       name: name,
//       age: Math.floor(Math.random() * 20),
//       major: "CS",
//     });
//   }, 2000);
// }

// function getMovies(age, callback) {
//   if (age < 12) {
//     setTimeout(() => {
//       callback("cartoon movies");
//     }, 1500);
//   } else if (age < 18) {
//     setTimeout(() => {
//       callback("teen movies");
//     }, 1500);
//   } else {
//     setTimeout(() => {
//       callback("adult movies");
//     }, 1500);
//   }
// }

// getData("Wilson", (obj) => {
//   console.log(obj);
//   getMovies(obj.age, (str) => {
//     console.log(str);
//   });
// });

// =========== 3 ==============

// =========== 4 promise ==============
function getData(name) {
  if (name == "Wilson") {
    return new Promise((resolve, reject) => {
      setTimeout(
        resolve({
          name: name,
          age: Math.floor(Math.random() * 20),
          major: "CS",
        }),
        2000
      );
    });
  } else {
    return new Promise((resolve, reject) => {
      reject(new Error("not allowed to access data"));
    });
  }
}

function getMovies(age, callback) {
  if (age < 12) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve({ text: "cartoon" }), 1500);
    });
  } else if (age < 18) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve({ text: "teen" }), 1500);
    });
  } else {
    return new Promise((resolve, reject) => {
      setTimeout(reject(new Error("not allowed. too old")), 1500);
    });
  }
}

// getData("Wilson")
//   .then((obj) => {
//     console.log(obj);
//     return getMovies(obj.age).then((mes) => {
//       console.log(mes.text);
//     });
//   }) // can catch inner or outer error
//   .catch((e) => {
//     console.log(e);
//   });

// =========== 4 ==============

// =========== 5 async await  try-catch ==============
// 但因為它是 async function 的關係，JS 會自動把它包成 Promise，所以可以使用 then，也可以用try -catch 集體接error。
async function showMovies() {
  try {
    const obj = await getData("Wilson"); // need to wait until getData from function to able to put data into obj
    const movie = await getMovies(obj.age);
    console.log(movie.text);
  } catch (e) {
    console.log(e);
  }
}

showMovies();
// =========== 5 ==============
