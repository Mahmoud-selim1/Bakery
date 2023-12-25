let settings = document.querySelector(".settings");
let settingIcone = document.querySelector(".settingIcone i");
let showSettings = () => {
  settings.classList.toggle("right-30");
};

settingIcone.addEventListener("click", showSettings);
