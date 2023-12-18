const notice = document.querySelector(".notice");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  notice.classList.add("close");
});

const menuIcon = document.querySelector('.menu-icon');
const presentes = document.querySelector('.presentes');

menuIcon.addEventListener('click', () => {
  presentes.classList.toggle('open');
});