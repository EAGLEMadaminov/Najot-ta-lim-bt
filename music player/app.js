let choosen = "/audios/ona.mp3";
let music = new Audio();
let elMusicTitle = document.querySelector(".music-title");
let elMusicUser = document.querySelector(".music-user");
let myFunction = (choosen) => {
  music.src = "";
  music.src = choosen;
  let timeline = document.querySelector(".timeline");
  let timelineActual = document.querySelector(".actual");
  let timelineCurrent = document.querySelector(".current");
  let elNextBtn = document.querySelector(".next-btn");
  let elPrevtBtn = document.querySelector(".prev-btn");
  let elRepeatBtn = document.querySelector(".repeat-btn");
  let elValumeBtn = document.querySelector(".value-btn");
  let elLikeBtn = document.querySelector(".like-btn");

  let ppBtn = document.querySelector(".pp-btn");
  let updateCurrentTimeId;
  let loop = false;

  elLikeBtn.addEventListener("click", () => {
    if (elLikeBtn.classList.contains("active")) {
      elLikeBtn.classList.remove("active");
    } else {
      elLikeBtn.classList.add("active");
      elLikeBtn.textContent = "❤";
    }
  });
  elValumeBtn.addEventListener("click", () => {
    let state = elValumeBtn.textContent;
    if (state === "🔊") {
      elValumeBtn.textContent = "🔉";
      music.volume = 0.5;
    } else if (state === "🔉") {
      elValumeBtn.textContent = "🔈";
      music.volume = 0;
    } else {
      elValumeBtn.textContent = "🔊";
      music.volume = 1;
    }
  });

  elRepeatBtn.addEventListener("click", () => {
    loop = !loop;
    elRepeatBtn.classList.toggle("active");
  });
  function displayCurrentTime() {
    let minut = Math.floor(music.currentTime / 60)
      .toString(10)
      .padStart(2, "0");
    let second = Math.floor(music.currentTime % 60)
      .toString(10)
      .padStart(2, "0");
    timelineCurrent.textContent = minut + " : " + second;
  }
  elPrevtBtn.addEventListener("click", () => {
    music.currentTime -= 5;
    displayCurrentTime();
  });

  elNextBtn.addEventListener("click", () => {
    music.currentTime += 5;
    displayCurrentTime();
  });

  ppBtn.addEventListener("click", () => {
    if (music.paused) {
      music.play();
      ppBtn.textContent = "⏸";
      updateCurrentTimeId = setInterval(displayCurrentTime, 1000);
    } else {
      music.pause();
      ppBtn.textContent = "▶";
      clearInterval(updateCurrentTimeId);
    }
  });

  music.onloadeddata = () => {
    let minut = Math.floor(music.duration / 60)
      .toString(10)
      .padStart(2, "0");
    let second = Math.floor(music.duration % 60)
      .toString(10)
      .padStart(2, "0");
    timelineActual.textContent = minut + " : " + second;
  };

  music.onended = () => {
    console.log("ended");
    ppBtn.textContent = "▶";
    clearInterval(updateCurrentTimeId);
    if (loop) {
      music.currentTime = 0;
      ppBtn.textContent = "⏸";
      music.play();
      updateCurrentTimeId = setInterval(displayCurrentTime, 1000);
    }
  };
};
myFunction(choosen);

let list = [
  { title: "1  Fotiha Makkiy ", audio: "/audios/001.mp3" },
  { title: "2 Baqara Madiniy", audio: "/audios/002.mp3" },
  { title: "3 Oli Imron Madiniy", audio: "/audios/003.mp3" },
  { title: "4 Niso Madiniy", audio: "/audios/004.mp3" },
  { title: "5 Moida Madiniy", audio: "/audios/005.mp3" },
  { title: "6 An'om  Makkiy", audio: "/audios/006.mp3" },
  { title: "7 A'rof Makkiy", audio: "/audios/007.mp3" },
  { title: "8 Anfol Madiniy", audio: "/audios/008.mp3" },
  { title: "9 Tavba Madiniy", audio: "/audios/009.mp3" },
  { title: "10 Yunus Makkiy", audio: "/audios/010.mp3" },
  { title: "11 Hud Makkiy", audio: "/audios/011.mp3" },
  { title: "12 Yusuf Makkiy", audio: "/audios/012.mp3" },
  { title: "13 Ra'd Madiniy", audio: "/audios/013.mp3" },
  { title: "14 Ibrohim Makkiy", audio: "/audios/014.mp3" },
  { title: "15 Hijr Makkiy", audio: "/audios/015.mp3" },
  { title: "16 Nahl Makkiy", audio: "/audios/016.mp3" },
  { title: "17 Isro Makkiy", audio: "/audios/017.mp3" },
  { title: "18 Kahf Makkiy", audio: "/audios/018.mp3" },
  { title: "19 Maryam Makkiy", audio: "/audios/019.mp3" },
  { title: "20 Toha Makkiy", audio: "/audios/020.mp3" },
];
let elList = document.querySelector(".list");
let elSearchInput = document.querySelector(".search");

let showItems = (arr) => {
  elList.innerHTML = "";
  arr.forEach((item, index) => {
    let elLi = document.createElement("li");
    elLi.textContent = item.title;
    elLi.addEventListener("click", () => {
      elMusicTitle.textContent = item.title;
      elMusicUser.textContent = "Mahmud Halil Xusoriy";
      choosen = "";
      myFunction(item.audio);
    });
    elList.append(elLi);
  });
};
showItems(list);
elSearchInput.addEventListener("keyup", (e) => {
  let arr = list.filter((item) => {
    if (
      item.title.toLowerCase().includes(e.target.value.trim().toLowerCase())
    ) {
      return item;
    }
  });
  showItems(arr);
});
