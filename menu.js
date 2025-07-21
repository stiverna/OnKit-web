function toggleMenu() {
  let menu = document.getElementById("sideMenu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

function toggleTheme() {
  let body = document.body;
  body.classList.toggle("dark-mode");
  localStorage.setItem("theme", body.classList.contains("dark-mode") ? "dark" : "light");
}

function setLanguage(lang) {
  alert("Til tanlandi: " + lang + "\n(Hozircha til avtomatik almashtirish yo‘q, lekin tayyorlanmoqda!)");
}
