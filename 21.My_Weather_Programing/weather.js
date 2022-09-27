const input = document.querySelector("input");
const button = document.querySelector("button");
const myCard = document.querySelector(".card");
let isError = false;
//* api'den veri çekmek için
const getWeather = async (cityName) => {
  const key = "6e1a3eda9fa53b82169bd49471c74f36";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric&lang=tr`;
  try {
    const res = await fetch(url);
    console.log(res);
    if (!res.ok) {
      isError = true;
      // throw new Error(`Something went wrong. Failure Code :${res.status}`);
    }
    const data = await res.json();
    console.log(data);
    renderWeather(data);
  } catch (error) {
    // console.log(error);
  }
};
//* değerleri yazdırmak için
const renderWeather = (item) => {
  const weatherListDiv = document.querySelector(".container");
  if (isError) {
    weatherListDiv.innerHTML = `<h2>The city name is incorrect. Please check and login again.</h2>
<img
src="https://cdn.pixabay.com/photo/2014/03/25/16/27/attention-297169_960_720.png"
alt=""
class="w-25 mx-auto"
/>
`;
    isError = false;
    setTimeout(() => {
      weatherListDiv.innerHTML = "";
    }, 1500);
  }
  console.log(item);
  const { name, main, weather } = item;
  console.log(item);
  weatherListDiv.innerHTML += `
  <div class="card col-sm-6 col-md-4 col-lg-3" style="width: 15rem; height:30rem">
  <p class="list-group-item display-5 fw-bold">
    ${name.replace("Province", "")}
  </p>
  <p class="list-group-item display-5 fw-bold">
    ${Math.round(main.temp)}°C
  </p>
  <img
    src="http://openweathermap.org/img/w/${weather[0].icon}.png"
    class="card-img-top fw-bold display-5 "
    alt="icon"
  />
  <p class="list-group-item fw-bold display-5">
    ${weather[0].description.toUpperCase()}
  </p>
  <p class="list-group-item temp_min-max fw-bold">
    ${Math.round(main.temp_min)} / ${Math.round(main.temp_max)}°C
  </p>
  <button class="btn remove btn-danger w-50 mx-auto" type="button">
    Remove
  </button>
</div>
`;
};
let cities = [];
const aciklama = document.querySelector(".newsList");
//* buton click için
button.addEventListener("click", () => {
  // const weatherListDiv = document.querySelector(".container");
  if (cities.includes(input.value.toLowerCase())) {
    aciklama.innerHTML = `<h2>You already know the weather in ${input.value.toUpperCase()}</h2>`;
  } else {
    cities.push(input.value.toLowerCase());
    getWeather(input.value);
    aciklama.innerHTML = "<h2> </h2>";
  }
  input.value = "";
  if (weather[0].main == "Rain") {
    body.className = "rain";
  } else if (weather[0].main == "Clear") {
    body.className = "clear";
  }
  console.log(item);
});
//* enter tuşu aktif olması için
input.addEventListener("keydown", (e) => {
  e.key === "Enter" && button.click();
  // input.value = "";
});
//* focus olması için
window.addEventListener("load", () => {
  input.focus();
});
let row = document.querySelector(".row");
//* remove tıklanınca card'ın silinmesi
row.addEventListener("click", (e) => {
  if (e.target.innerText == "Remove") {
    e.target.parentElement.remove();
  }
  cities = cities.filter(
    (item) =>
      item !== e.target.parentElement.firstElementChild.innerText.toLowerCase()
  );
});

// if (cities.includes(name)) {
//     warningText.textContent = `...Please search for another city...`;
//     setTimeout(() => {
//       warningText.textContent = "";
//     }, 2000);
