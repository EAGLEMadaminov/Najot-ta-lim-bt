// document.addEventListener("click", () => {
//   console.log("ok");
// });
// let count=0
// setInterval(() => {
//   console.log(++count);
// }, 1000);

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// async function getUSers() {
//   try {
//     console.log("Sending Request");
//     let res = await fetch("https://jsonplaceholder.typicode.com/photos");
//     console.log("Response");
//     console.log("Converting to JSON");
//     console.time("json");
//     let data = await res.json();
//     console.timeEnd("json");
//     console.log("Converted to json");
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log("Data result");
//   }
// }
// getUSers();

// console.log(1);

// setTimeout(() => {
//   console.log(2);
// }, 0);

// queueMicrotask(() => {
//   console.log(5);
// });

// Promise.resolve().then(() => {
//   console.log(3);
// });
// console.log(4);

// (async function getDate() {
//   try {
//     let baseUrl = "https://jsonplaceholder.typicode.com";
//     let users = fetch(`${baseUrl}/users`).then((res) => res.json());
//     let posts = fetch(`${baseUrl}/posts`).then((res) => res.json());
//     let comments = fetch(`${baseUrl}/comments`).then((res) => res.json());
//     let photos = fetch(`${baseUrl}/photos`).then((res) => res.json());
//     let albums = fetch(`${baseUrl}/albums`).then((res) => res.json());
//     let todos = fetch(`${baseUrl}/todos`).then((res) => res.json());

//     let data = await Promise.all([
//       users,
//       posts,
//       comments,
//       photos,
//       albums,
//       todos,
//     ]);
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// })();

// let elUSersDiv = document.querySelector(".users");

// async function getUSers() {
//   let res = await fetch("https://jsonplaceholder.typicode.com/users");
//   let data = await res.json();
//   data.forEach((item) => {
//     let { name, email, address, company, website } = item;
//     let userDiv = document.createElement("div");
//     let elName = document.createElement("p");
//     elName.textContent = `Name : ${name}`;
//     let elEmail = document.createElement("a");
//     elEmail.textContent = `Email : ${item.email}`;
//     elEmail.setAttribute("href", `mailto:${item.email}`);
//     let elCity = document.createElement("p");
//     elCity.textContent = `City : ${item?.address?.city}`;
//     let elCompanyName = document.createElement("h3");
//     elCompanyName.textContent = `ComName: ${item?.company?.name}`;
//     let elWebSite = document.createElement("a");
//     elWebSite.textContent = `Website: ${item.website}`;
//     elWebSite.setAttribute("href", `https://${item.website}`);
//     userDiv.append(elName);
//     userDiv.append(elEmail);
//     userDiv.append(elCity);
//     userDiv.append(elCompanyName);
//     userDiv.append(elWebSite);
//     elUSersDiv.append(userDiv);
//   });
// }
// getUSers();

// function light() {
//   console.log("red");
//   setTimeout(() => {
//     console.log("yellow");
//     setTimeout(() => {
//       console.log("green");
//       setTimeout(() => {
//         console.log("yellow");
//       }, 3000);
//     }, 1000);
//   }, 3000);
// }
// light();

// setInterval(light, 8000);

// let car = new Promise((res, rej) => {
//   setTimeout(() => {
//     let r = Math.random();
//     if (r > 0.5) {
//       res();
//     } else {
//       rej();
//     }
//   }, 2000);
// });
// console.log(car);
// car
//   .then(() => {
//     console.log("Uraa moshinali bo'ldim 😆");
//   })
//   .catch(() => {
//     console.log("Essiz moshinasiz qoldim 😢");
//   }).finally(()=>{
//     console.log("Endi samolyot oldiraman 😇")
//   });

function wait(time) {
  return new Promise((res) => {
    setTimeout(() => {
      res();
    }, time);
  });
}
// wait(3000)
//   .then(() => {
//     console.log("3 sekund o'tdi");
//     return wait(3000);
//   })
//   .then(() => {
//     console.log("yana 3 sekund o'tdi");
//     return wait(3000);
//   })
//   .then(() => {
//     console.log("yana 3 sekund o'tdi");
//     return wait(3000);
//   });

// function tl() {
//   console.log("red");
//   wait(3000)
//     .then(() => {
//       console.log("yellow");
//       return wait(1000);
//     })
//     .then(() => {
//       console.log("green");
//       return wait(3000);
//     })
//     .then(() => {
//       console.log("yellow");
//       return wait(1000);
//     })
//     .then(() => {
//       console.log("red");
//     });
// }
// tl();

// fetch("https://jsonplaceholder.typi=eeecode.com/users")
//   .then((res, rej) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => {
//     console.log(err);
//   });

// async function tl() {
//   console.log("red");
//   await wait(3000);
//   console.log("yellow");
//   await wait(1000);
//   console.log("green");
//   await wait(3000);
//   console.log("yellow");
//   await wait(1000);
//   console.log("red");
//   return "Salom";
// }
// tl().then(() => {
//   console.log("salom");
// });

// async function getUsers() {
//   try {
//     let res = await fetch("https://jsonplaceholder.typicode.com/users");
//     let data = await res.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log("Natija tugadi");
//   }
// }
// getUsers();

// setTimeout(() => {
//   console.log(1);
// }, 0);
// queueMicrotask(() => {
//   console.log(3);
// });

// console.log(1);

// setTimeout(() => {
//   console.log(2);
// }, 0);

// Promise.resolve().then(() => {
//   console.log(3);
// });
// queueMicrotask(() => {
//   console.log(4);
// });
// console.log(5);

// (async function getData() {
//   let baseUrl = "https://jsonplaceholder.typicode.com";
//   let users = await fetch(`${baseUrl}/users`).then((res) => res.json());
//   let posts = await fetch(`${baseUrl}/posts`).then((res) => res.json());
//   let comments = await fetch(`${baseUrl}/comments`).then((res) => res.json());
//   let photos = await fetch(`${baseUrl}/photos`).then((res) => res.json());
//   let albums = await fetch(`${baseUrl}/albums`).then((res) => res.json());
//   let todos = await fetch(`${baseUrl}/todos`).then((res) => res.json());
//   // let data = await Promise.all([users, posts, comments, photos, albums, todos]);
//   console.log(users, posts, comments, photos, albums, todos);
// })();

console.log(1);

Promise.resolve().then(() => {
  console.log(2);
});
setTimeout(() => {
  console.log(3);
}, 0);
queueMicrotask(() => {
  setTimeout(() => {
    console.log(4);
  }, 0);
});
