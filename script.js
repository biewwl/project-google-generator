const list = document.querySelector(".list");
const buttonShowHistory = document.querySelector(".button-show-history");
const history = document.querySelector(".history");
const inputCreate = document.querySelector(".input-create");
const bar = document.querySelector(".bar");

function createListItem(text) {
  const li = document.createElement("li");
  li.className = "list-item";
  const icon = document.createElement("div");
  icon.className = "icon";
  const span = document.createElement("span");
  span.className = "text";
  span.innerText = text;
  const deleteIcon = document.createElement("span");
  deleteIcon.innerHTML = `<span class="iconify delete" data-icon="bi:x"></span>`;
  li.appendChild(icon);
  li.appendChild(span);
  li.appendChild(deleteIcon);
  return li;
}

const createItem = () => {
  const input = inputCreate;
  const text = input.value;
  const li = createListItem(text);
  if (text && document.querySelectorAll(".list-item").length < 5) {
    list.appendChild(li);
    input.value = "";
  }
};

const handleEnter = (e) => {
  if (e.key === "Enter" && e.target.value !== "") {
    createItem();
  }
};

inputCreate.addEventListener("keyup", handleEnter);

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("list-item")) {
    e.target.remove();
  }
  if (e.target.classList.contains("icon")) {
    e.target.parentElement.remove();
  }
  if (e.target.classList.contains("text")) {
    e.target.parentElement.remove();
  }
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.parentElement.remove();
  }
});
