// ====================================================== //

const aHref = document.querySelector(".ahref");
const textArea = document.querySelector(".text-area");

const myInput = document.querySelector(".input");
const add = document.querySelector(".btn-add");
const del = document.querySelector(".btn-del");
const listMy = document.querySelector(".list-add");

const newList = document.createElement("ul");
listMy.appendChild(newList);

aHref.addEventListener("click", () => {
  textArea.classList.toggle("d-none");
});

add.addEventListener("click", () => {
  if (!myInput.value) {
    alert("herhangı bır gırıs yapılmadı");
  } else if (myInput.value.toLowerCase() === "javascript") {
    newList.innerHTML += `<li class = "text-danger">${myInput.value}</li>`;
    myInput.value = "";
  } else {
    newList.innerHTML += `<li>${myInput.value}</li>`;
    myInput.value = "";
  }
  myInput.focus();
});

del.addEventListener("click", () => {
  //   if (newList.childElementCount > 0) {
  //     newList.removeChild(newList.lastChild);
  //   } else {
  //     alert("silinecek birsey bulunamadı...");
  //   }
  //Ternary Yapıy ıle;
  newList.childElementCount > 0
    ? newList.removeChild(newList.lastChild)
    : alert("silinecek birsey bulunamadı...");
  myInput.focus();
});
// ************************************************** //
// Enter and Delete keys;
myInput.addEventListener("keydown", (event) => {
  //   console.log(event);
  //   console.log(event.target);
  //   console.log(event.keyCode);
  //   console.log(event.code);
  //!burada  keydown ıle klavyeden bır tusa basmak eventı ıslendı. enterın ascı koduna esıt olursa bu event addBtn.clıck ıslemını yap. event Delete nın ascı koduna esıt olursa bu sefer delete nın gorevını yap yanı sılme ıslemını yap. eger keycode olarak yazarsan sartı karsısına Ascı kodunu yazmalısın;code yazarsan da ekrada cıkan yazı seklınde ılgılı tusun adını yazmalısın.
  if (event.keyCode === 13) {
    add.click();
  }
  if (event.keyCode === 46) {
    del.click();
  }
});
// ***************************************************** //
//? onload event handler
window.addEventListener("load", () => {
  myInput.focus();
});
