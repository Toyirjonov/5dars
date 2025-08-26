import "./style.css";
import { getData } from "./request";
import { updateMainUI } from "./updateUI";

const search = document.getElementById("form") as HTMLFormElement;
const input = document.getElementById("input") as HTMLInputElement;
const errorMsg = document.querySelector(".error") as HTMLParagraphElement;

const themeToggle = document.getElementById(
  "theme-toggle"
) as HTMLButtonElement;
const themeTitle = document.querySelector(".theme-title") as HTMLSpanElement;
const themeIcon = themeToggle.querySelector("img") as HTMLImageElement;
themeToggle.addEventListener("click", () => {
  const currentTheme = document.body.getAttribute("data-theme");

  if (currentTheme === "dark") {
    document.body.setAttribute("data-theme", "light");
    themeTitle.textContent = "Dark";
    themeIcon.src = "/images/dark-mood.svg";
    themeIcon.alt = "dark-mood-icon";
  } else {
    document.body.setAttribute("data-theme", "dark");
    themeTitle.textContent = "Light";
    themeIcon.src = "/images/light-mood.svg";
    themeIcon.alt = "light-mood-icon";
  }
});

search.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputValue = input.value.trim();
  if (!inputValue) return;

  getData(`https://api.github.com/users/${inputValue}`)
    .then((data) => {
      if (data.message === "Not Found") {
        errorMsg.textContent = "No results";
        errorMsg.classList.remove("hidden");
        return;
      }

      errorMsg.classList.add("hidden");
      updateMainUI(data);
    })
    .catch(() => {
      errorMsg.textContent = "No results";
      errorMsg.classList.remove("hidden");
    });
});

getData("https://api.github.com/users/Toyirjonov")
  .then((data) => {
    updateMainUI(data);
  })
  .catch((error) => {
    console.log(error);
  });
