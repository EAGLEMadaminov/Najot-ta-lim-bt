let usersList = document.querySelector("#users");
let params = new URLSearchParams(window.location.search);
let id = params.get("id");

if (id) {
  fetch("https://jsonplaceholder.typicode.com/users/" + id)
    .then((res) => res.json())
    .then((user) => {
      let container = document.createElement("div");
      let h1 = document.createElement("h1");
      let h2 = document.createElement("h2");
      let h4 = document.createElement("h4");
      let p = document.createElement("p");
      let a = document.createElement("a");
      container.classList.add("container");
      let elListTodo = document.createElement("ul");

      const renderTodo = (todo) => {
        console.log(todo);
        let li = document.createElement("li");
        let btn = document.createElement("button");
        let completeBtn = document.createElement("button");
        let span = document.createElement("span");

        span.innerText = todo.title;
        if (todo.completed) span.classList.add("text-decoration-line-through");
        li.append(span);
        li.classList.add(
          "list-group-item",
          "d-flex",
          "justify-content-between",
          "align-items-center",
          "my-3",
          "gap-3"
        );
        btn.classList.add("btn", "btn-danger");
        btn.innerText = "Delete";

        completeBtn.classList.add(
          "btn",
          todo.completed ? "btn-success" : "btn-warning",
          "ms-auto"
        );
        completeBtn.innerText = todo.completed ? "Compelted" : "Incomplete";
        li.append(span, completeBtn, btn);
        elListTodo.append(li);

        completeBtn.addEventListener("click", async () => {
          await fetch(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
            method: "PATCH",
            data: JSON.stringify({ completed: !todo.completed }),
          });
          completeBtn.classList.toggle("btn-warning");
          completeBtn.classList.toggle("btn-success");
          completeBtn.innerText =
            completeBtn.innerText === "Incomplete" ? "Compelted" : "Incomplete";
          span.classList.toggle("text-decoration-line-through");
        });

        btn.addEventListener("click", () => {
          li.remove();
          fetch(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
            method: "DELETE",
          });
        });
      };

      h1.innerText = "Todos";
      h1.classList.add("display-1", "text-center");
      container.append(h1);
      container.append(h1);

      let form = document.createElement("form");
      let input = document.createElement("input");
      let submitBtn = document.createElement("button");
      submitBtn.classList.add("btn", "btn-primary");
      submitBtn.innerText = "Add";
      input.classList.add("form-control");
      input.setAttribute("placeholder", "Todo title ...");
      form.classList.add("d-flex", "gap-3", "my-3", "mx-auto");
      form.append(input, submitBtn);
      container.append(form);

      form.addEventListener("submit", async (e) => {
        e.preventDefault();
        if (input.value.length > 3) {
          let title = input.value;
          let data = {
            title,
            userId: id,
            completed: false,
          };
          let res = await fetch(`https://jsonplaceholder.typicode.com/todos`, {
            method: "POST",
            data: JSON.stringify(data),
          });
          let { id: todoId } = await res.json();
          let todo = { ...data, id: todoId };
          renderTodo(todo);
          e.target.reset();
        }
      });

      h2.innerHTML = user.name;
      h4.innerText = user.username;
      p.innerHTML = `${user.email} ${user.phone} ${user.website}`;
      a.innerHTML = "Go back";
      a.setAttribute("href", "/");
      (async function () {
        container.append(elListTodo);
        let res = await fetch(
          `https://jsonplaceholder.typicode.com/todos?_limit=10&_start=1&userId=${id}`
        );
        let todos = await res.json();
        todos.forEach(renderTodo);
      })();

      document.body.append(a, h2, p, container);
    });
} else {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((users) => {
      users.forEach((user) => {
        let li = document.createElement("li");
        let h2 = document.createElement("h2");
        let h4 = document.createElement("h4");
        let p = document.createElement("p");
        let a = document.createElement("a");

        h2.innerHTML = user.name;
        h4.innerText = user.username;
        p.innerHTML = `${user.email} ${user.phone} ${user.website}`;
        a.innerHTML = "Read more";
        a.setAttribute("href", `/?id=${user.id}`);
        li.append(h2, h4, p, a);
        usersList.append(li);
      });
    });
}
