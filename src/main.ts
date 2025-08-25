import "./style.css";
import { getData } from "./request";
import { updateMainUI } from "./updateUI";

getData("https://api.github.com/users/Toyirjonov")
  .then((data) => {
    updateMainUI(data);
  })
  .catch((error) => {
    console.log(error);
  });
