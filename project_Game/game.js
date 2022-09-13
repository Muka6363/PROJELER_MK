//* =====================================
//*  GUESS MY NUMBER
//*  Game Logic
//*======================================
/*
bı sayı tutturalım  math.round_yukarı yuvarlar_(math.random()* 100) 

check butonuna tıklama---> butonumuzu clasını quaryselector ıle secerı.clıck event soz konusu olacaktır.
bellek konusunda daha az yer kaplaması ıcın blok scope ıcınde tanımlamak daha ıyıdır.

sessıon yenılersek bılgıler sıfırlanır. local secılırse bızım bu oyunda daha mantıklı. guvenlıgın oldugu yerde sessıonsStaroge kullanmak gerek.
localStorage .setItem 
//22ö ı lı ıcon ekledıgımız ıcın burada ınner HTML kullanmak zorundayız. yoksa ınnerTExt yapılabılırdı.
*/

//? 1-100 arasinda rasgele bir sayi tut.
let randomNumber = Math.round(Math.random() * 100);
console.log(randomNumber);

//? Variables
let score = 10;
// let topScore = 0;

//? localStorage'de topScore adiyla bir degisken olustur.
let topScore = localStorage.getItem("topScore") || 0;

//? DOM'daki top-score degerini localStorage'den okuyarak guncelle.
document.querySelector(".top-score").textContent = topScore;

//* CheckBtn basildiginda kontrolleri yap
document.querySelector(".check-btn").addEventListener("click", () => {
  const guessInput = Number(document.querySelector(".guess-input").value);
  const msg = document.querySelector(".msg");
  const body = document.querySelector("body");

  //? eger input girilmediyse Kullaniciya uyari ver.
  if (!guessInput) {
    msg.innerText = "Please enter a number";
    //! eger rasgele == input.value
  } else if (randomNumber === guessInput) {
    msg.innerHTML = `Congrats You Win <i class="fa-solid fa-face-grin-hearts fa-2x"></i> `;
    body.className = "bg-success";
    document.querySelector(".check-btn").disabled = true;
    if (score > topScore) {
      // topScore = score;

      //? localStorage'deki topScore degiskenini guncelle
      localStorage.setItem("topScore", score);
      //? DOM'daki top-score degerini guncelle
      document.querySelector(".top-score").textContent = score;
    }
    document.querySelector(".secret-number").textContent = randomNumber;

    //! eger rasgele!= input.value
  } else {
    score--;
    if (score > 0) {
      guessInput > randomNumber
        ? (msg.innerHTML = `<i class="fa-solid fa-arrow-trend-down fa-2x"></i> DECREASE `)
        : (msg.innerHTML = `<i class="fa-solid fa-arrow-trend-up fa-2x"></i> INCREASE `);
    } else {
      msg.innerHTML = `You Lost <i class="fa-regular fa-face-sad-tear fa-2x"></i>`;
      document.querySelector(".secret-number").textContent = randomNumber;
      body.className = "bg-danger";
      document.querySelector(".check-btn").disabled = true;
    }

    document.querySelector(".score").textContent = score;
  }
});

//* again basildiginda oyunu baslangic dgerlerin kur
document.querySelector(".again-btn").addEventListener("click", () => {
  score = 10;
  document.querySelector(".score").textContent = score;
  randomNumber = Math.round(Math.random() * 100);
  document.querySelector(".secret-number").textContent = "?";
  console.log(randomNumber);
  document.querySelector(".check-btn").disabled = false;
  document.querySelector("body").classList.remove("bg-success", "bg-danger");
  document.querySelector(".guess-input").value = "";
  document.querySelector(".msg").innerText = `Starting..`;
});

document.querySelector(".guess-input").addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    document.querySelector(".check-btn").click();
  }
});

//! LOCALSTORAGE- SESSIONSTORAGE
// myObj = { a: 1, b: 2, c: 3 };
// localStorage.setItem("OBJ", JSON.stringify(myObj));
// const readObj = localStorage.getItem("OBJ");
// const readOBJ = JSON.parse(localStorage.getItem("OBJ"));
// console.log(typeof readObj);
// console.log(typeof readOBJ);
// console.log(readOBJ);

//* PUSEDUO
//? eger score > topScore
//?     topScore = score
//? secret_number = gorunur.

//! değilse
//! eger score > 0
//!   score = score -1
//?   eğer rasgele < input.value
//?     AZALT
//?   degilse
//?     ARTTIR
//! degise
//? Uzgunuz kaybetiniz.

//* againBtn basildiginda kontrolleri yap
