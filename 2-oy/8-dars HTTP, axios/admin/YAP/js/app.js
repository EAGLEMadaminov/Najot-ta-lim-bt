//  sidebasr toggle

let sidebarOpen = false;
let sidebar = document.querySelector("aside");
let elUsersCount = document.querySelector(".user-count");
let elProductsCount = document.querySelector(".product-count");
let elOrdersCount = document.querySelector(".order-count");
axios.defaults.baseURL = "http://localhost:3000";

const displayStat = async function (element, length) {
  for (let i = 1; i <= length; i++) {
    await wait(80);
    element.innerText = i;
  }
};
const wait = (delay) => new Promise((res) => setTimeout(res, delay));
(async function count() {
  let res = await axios("/users");
  displayStat(elUsersCount, res.data.length);
  let products = await axios("/products");
  displayStat(elProductsCount, products.data.length);
  let orders = await axios("/orders");
  displayStat(elOrdersCount, orders.data.length);
})();
function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add("sidebar-responsive");
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.add("sidebar-responsive");
    sidebarOpen = false;
  }
}

// ======================== CHARTS ========================
// BAR CHARTS

let options1 = {
  series: [
    {
      data: [12, 19, 3, 5, 2],
    },
  ],
  chart: {
    type: "bar",
    height: 500,
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: ["Monday", "Tueshday", "Wednethday", "Thursday", "Friday"],
  },
};

let chart1 = new ApexCharts(document.querySelector("#bar-chart"), options1);
chart1.render();

// AREA
let options2 = {
  series: [
    {
      name: "series1",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "series2",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ],
  chart: {
    height: 350,
    type: "area",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    type: "datetime",
    categories: [
      "2018-09-19T00:00:00.000Z",
      "2018-09-19T01:30:00.000Z",
      "2018-09-19T02:30:00.000Z",
      "2018-09-19T03:30:00.000Z",
      "2018-09-19T04:30:00.000Z",
      "2018-09-19T05:30:00.000Z",
      "2018-09-19T06:30:00.000Z",
    ],
  },
  tooltip: {
    x: {
      format: "dd/MM/yy HH:mm",
    },
  },
};

let chart2 = new ApexCharts(document.querySelector("#area-chart"), options2);
chart2.render();

// ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
