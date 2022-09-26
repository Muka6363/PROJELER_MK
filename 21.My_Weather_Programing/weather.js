const input = document.querySelector("input");
const button = document.querySelector("button");
let isError = false;

//* api'den veri çekmek için
const getWeather = async (cityName) => {
  const myKey = "6e1a3eda9fa53b82169bd49471c74f36";
  const myUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${myKey}&units=metric&lang=tr`;
  try {
    const res = await fetch(myUrl);
    console.log(res);
    if (!res.ok) {
      isError = true;
      // throw new Error(`Something went wrong. Failure Code :${res.status}`); //burdakı hata console dakı ekrana yazılan errordur.
    }
    const data = await res.json();

    console.log(data);
    renderWeather(data);
  } catch (error) {
    console.log(error);
  }
};

//* değerleri yazdırmak için
const renderWeather = (item) => {
  const weatherListDiv = document.querySelector(".container");
  if (isError) {
    weatherListDiv.innerHTML = `<h2>City is wrong</h2>`; //burada yazılacak error ıse kullanıcının ekranına gelecek errordur.
    return;
  }
  const { name, main, weather } = item;
  weatherListDiv.innerHTML += `    
  <div class="card col-sm-6 col-md-4 col-lg-3" style="width: 18rem">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${name.replace("Province", "")}</li>
        <li class="list-group-item">${Math.round(main.temp)}°C</li>
        <img src="http://openweathermap.org/img/w/${
          weather[0].icon
        }.png" class="card-img-top" alt="icon" />
        <li class="list-group-item">${weather[0].description.toUpperCase()}</li>
      </ul>
    </div>
    `;
};

//* buton click için
button.addEventListener("click", () => {
  getWeather(input.value);
  input.value = "";
});

//* enter tuşu ile seçim yapılabilmesi için
input.addEventListener("keydown", (e) => {
  e.keyCode === 13 && button.click();
  // input.value = "";
});

//* focus olması için
// window.addEventListener("load", () => {
//   input.focus();
// });
window.onload = () => {
  input.focus();
};
