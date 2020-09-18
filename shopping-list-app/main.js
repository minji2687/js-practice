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

let id = 0;
function createItem(text) {
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item__row");
  itemRow.setAttribute("data-id", id);
  itemRow.innerHTML = `
    <div class="item">
      <span class="item__name">${text}</span>
      <button class="item__delete">
        <i class="fas fa-trash-alt" data-id=${id}></i>
      </button>
    </div>
    <div class="item__divider"></div>`;

  id++;

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

items.addEventListener("click", (event) => {
  const id = event.target.dataset.id;
  if (id) {
    const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
    toBeDeleted.remove();
  }
});
