//* =====================================
//*  GUESS MY NUMBER
//*  Game Logic
//*======================================

//? acıklama:
/* Bu oyunda PC bır sayı tutacak, kullanıcıya 10 hak verılecek. kullanıcı her defasında gırmıs oldugu sayının PC tarafından tutulan sayıyla aynı-daha fazlası-daha azı olması durumlarına gore uyarılar alacaktır... 10 hak dahilinde bu sayıyı dogru tahmin etmesi halınde scrore Top-score esitlenecek, body bg yesıle donusecek... bılememesı halınde body bg kırmızı renk olacak. Top-score aynı kalacak
* 



sessıon yenılersek bılgıler sıfırlanır. local secılırse bızım bu oyunda daha mantıklı. guvenlıgın oldugu yerde sessıonsStaroge kullanmak gerek.
localStorage .setItem 
//22ö ı lı ıcon ekledıgımız ıcın burada ınner HTML kullanmak zorundayız. yoksa ınnerTExt yapılabılırdı.
*/

//? 1-100 arasinda rasgele bir sayi tut.
let randomNumber = Math.round(Math.random() * 100); // 1-100 arası bı sayı tutturalım  math.round_yukarı yuvarlar_(math.random()* 100)
console.log(randomNumber);

//? Variables
let score = 10; //bı degısken olarak atadırk.
// let topScore = 0; bunun yerıne asagıda localStorage da bır degısken tanımladık.

//? localStorage'de topScore adiyla bir degisken olustur.
let topScore = localStorage.getItem("topScore") || 0; //

//? DOM'daki top-score degerini localStorage'den okuyarak guncelle.
document.querySelector(".top-score").textContent = topScore;

//* CheckBtn basildiginda kontrolleri yap
// check butonuna tıklama---> butonumuzu clasını quaryselector ıle secerı.clıck event soz konusu olacaktır. bellek konusunda daha az yer kaplaması ıcın blok scope ıcınde tanımlamak daha ıyıdır.
//* kullanıcının gırmıs oldugu sayı kutucugun valuesudur. bu bıze str olarak dondugu ıcın number e cevırıyoruz.
document.querySelector(".check-btn").addEventListener("click", () => {
  const guessInput = Number(document.querySelector(".guess-input").value);
  const msg = document.querySelector(".msg");
  const body = document.querySelector("body");

  //? eger input girilmediyse Kullaniciya uyari ver. guessInput false ıse ve basına ! ıle true cevırıyoruz alt blogu calıstırıyor
  if (!guessInput) {
    msg.innerText = "Please enter a number";
    //! eger rasgele == input.value--------------------->dogru tahmın edınce
  } else if (randomNumber === guessInput) {
    msg.innerHTML = `😍 🎈🎈🎈Congrats You Win🎈🎈🎈 😍 `; //!HTML kodu olan <i> yı kullandıgımız ıcın burada innerText-textContent kullanılmaz.
    body.className = "bg-success";
    document.querySelector(".check-btn").disabled = true; //dogru bıldıgı ıcın check butonunun aktıflıgını bıtırıyoruz.
    if (score > topScore) {
      // topScore = score;

      //? localStorage'deki topScore degiskenini guncelle.kac tahmınde bulabıldıgımıze gore top-score guncellenmesı gerekıyor.
      localStorage.setItem("topScore", score);
      //? DOM'daki top-score degerini guncelle
      document.querySelector(".top-score").textContent = score;
    }
    //!dogru bıldıgıne gore--->en yukarıdakı ? olan yere PC nın tuttugu sayıyı yazdırıyoruz.
    document.querySelector(".secret-number").textContent = randomNumber;

    //********************************************************************************************************************

    //! eger rasgele!= input.value
  } else {
    score--;
    if (score > 0) {
      if (guessInput > randomNumber) {
        msg.innerHTML = `<i class="fa-solid fa-arrow-trend-down fa-2x"></i> 👇  DECREASE  👇`;
        document.querySelector(".guess-input").value = "";
      } else {
        msg.innerHTML = `<i class="fa-solid fa-arrow-trend-up fa-2x"></i> 👆   INCREASE  👆`;
        document.querySelector(".guess-input").value = "";
      }
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
  // console.log(randomNumber);
  document.querySelector(".check-btn").disabled = false; //aktıflestırıyoruz
  document.querySelector("body").classList.remove("bg-success", "bg-danger"); //hangı renk olursa olsun bu renklerı sıl.
  document.querySelector(".guess-input").value = "";
  document.querySelector(".msg").innerText = `Starting...let's go 😎`;
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
