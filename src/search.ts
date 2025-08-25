import { getData } from "./request";
import { updateMainUI } from "./updateUI";

// 🔍 Функция поиска пользователя
export async function searchUser(username: string): Promise<void> {
  try {
    // Получаем кнопку для индикатора загрузки
    const button = document.querySelector("button")!;

    // Показываем загрузку
    button.textContent = "Searching...";
    button.disabled = true;

    // Используем вашу функцию getData
    const userData = await getData(`https://api.github.com/users/${username}`);

    // Если данные получены - обновляем UI
    if (userData) {
      updateMainUI(userData);
    } else {
      alert("User not found!");
    }
  } catch (error) {
    alert("Error! User not found.");
    console.log(error);
  } finally {
    // Возвращаем кнопку в нормальное состояние
    const button = document.querySelector("button")!;
    button.textContent = "Search";
    button.disabled = false;
  }
}

// 🎯 Функция для инициализации поиска
export function initializeSearch(): void {
  const form = document.querySelector("form")!;
  const input = document.querySelector("input")!;

  // Обработчик отправки формы
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Не перезагружаем страницу

    const username = input.value.trim(); // Получаем введенный текст

    if (username) {
      searchUser(username); // Ищем пользователя
    } else {
      alert("Please enter a username!"); // Если поле пустое
    }
  });
}
