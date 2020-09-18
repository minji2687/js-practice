const items = document.querySelector(".items");
const input = document.querySelector(".footer__input");
const addBtn = document.querySelector(".footer__button");

input.focus();
function onAdd() {
  //사용자가 입력한 텍스트를 받아옴
  const text = input.value;
  console.log(text);
  //새로운 아이템을 만듬 (텍스트 + 삭제버튼)

  if (text === "") {
    input.focus();
    return;
  }

  const item = createItem(text);
  //items 컨테이너 안에 새로운 아이템을 추가한다
  items.appendChild(item);
  item.scrollIntoView({ block: "center" });
  //인풋을 초기화 한다
  input.value = "";
  input.focus();
}

function createItem(text) {
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item__row");

  const itemDivider = document.createElement("div");
  itemDivider.setAttribute("class", "item__divider");

  const item = document.createElement("div");
  item.setAttribute("class", "item");

  const name = document.createElement("span");
  name.setAttribute("class", "item__name");

  name.innerText = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("class", "item__delete");
  deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';

  deleteBtn.addEventListener("click", () => {
    items.removeChild(itemRow);
  });

  itemRow.appendChild(item);
  item.appendChild(name);
  item.appendChild(deleteBtn);
  itemRow.appendChild(itemDivider);

  return itemRow;
}

addBtn.addEventListener("click", () => {
  onAdd();
});

input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    onAdd();
  }
});
