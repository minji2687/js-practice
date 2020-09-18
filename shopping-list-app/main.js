const items = document.querySelector(".items");
const input = document.querySelector(".footer__input");
const addBtn = document.querySelector(".footer__button");

function onAdd() {
  //사용자가 입력한 텍스트를 받아옴
  const text = input.value;
  console.log(text);
  //새로운 아이템을 만듬 (텍스트 + 삭제버튼)

  // const item = createItem();
  //items 컨테이너 안에 새로운 아이템을 추가한다
  // items.appendChild(item);
  //인풋을 초기화 한다
  input.value = "";
  input.focus();
}

addBtn.addEventListener("click", () => {
  onAdd();
});
