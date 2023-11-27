// // async function request() {
// //   let res = await fetch("https://twitter.com", { mode: "no-cors" });
// //   let data = res.json();
// //   console.log(data);
// // }

// // let data = {
// //   email: "eve.holt@reqres.in",
// //   password: "cityslicka",
// // };

// // fetch("https://reqres.in/api/login", {
// //   method: "POST",
// //   body: JSON.stringify(data),
// //   headers: {
// //     "Content-type": "application/json",
// //   },
// // })
// //   .then((res) => res.json())
// //   .then((data) => {
// //     let token = data.token;

// //     localStorage.setItem("token", token);
// //   });

// // // pastdagi code ishlamadi shuni videodan ko'rib ishlatish kk
// // axios.defaults.baseUrl = "https://jsonplaceholder.typicode.com";
// // axios.defaults.headers.token = "token1";
// // let newUSer = {
// //   name: "Bek",
// //   email: "bekgmail@gamil.com",
// //   password: 123,
// // };
// // axios.post("/users", newUSer).then((res) => {
// //   console.log(data);
// // });
// // axios.get("/users").then((res) => {
// //   console.log(res.data);
// // });
// // axios.post(
// //   "https://reqres.in/api/login",
// //   {
// //     email: "sdf@df.com",
// //     password: 123456,
// //   },
// //   {
// //     headers: {
// //       token: "token2",
// //     },
// //   }
// // );

// let userList = document.querySelector(".user-list");
// let form = document.querySelector("form");
// axios.defaults.baseURL = "http://localhost:3000";
// function showUSers(item) {
//   let h1 = document.createElement("h2");
//   let p = document.createElement("p");
//   h1.textContent = item.name;
//   p.textContent = `Username: ${item.username}`;
//   userList.append(h1, p);
// }
// axios("/users").then((res) => {
//   let data = res.data;
//   data.forEach(showUSers);
// });

// form.addEventListener("submit", async (e) => {
//   e.preventDefault();
//   userList.innerHTML = "";
//   if (form[0].value) {
//     let { data: result } = await axios(`/users?q=${form[0].value}`);
//     result.forEach(showUSers);
//   }
// });

let newUSer = {
  fName: "Eshmat",
  lName: "Toshmat",
  email: "eshmat@gmail.com",
  age: 32,
  isMarried: true,
};

async function post(url, data) {
  return await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application.json",
      Token:'2r42neii4rnifeidninfd'
    },
    body: JSON.stringify(data),
  }).then(async (res) => await res.json());
}
post("https://jsonplaceholder.typicode.com/users", newUSer);
