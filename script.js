const notice = document.querySelector(".notice");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  notice.classList.add("close");
});
