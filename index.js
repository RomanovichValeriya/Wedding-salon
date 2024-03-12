// Получение данных из формы и сохранение в localStorage
function saveDataToLocalStorage() {
  let formData = {
    email: document.getElementById('email').value,
    password: document.getElementById('password').value,
  };

  localStorage.setItem("userData", JSON.stringify(formData));
}

// Получение сохраненных ранее данных из localStorage
function getDataFromLocalStorage() {
  let userData = localStorage.getItem("userData");
  return JSON.parse(userData);
}

// Очистка содержимого localStorage
function clearLocalStorage() {
  localStorage.removeItem("userData");
}