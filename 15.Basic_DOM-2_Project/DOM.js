// ====================================================== //

const img = document.querySelector(".img");
const btnOn = document.querySelector(".btn-on");
const btnOff = document.querySelector(".btn-off");

const onLamb = document.querySelector(".on");
const offLamb = document.querySelector(".off");

const special = document.querySelector(".btn-komb");

window.addEventListener("load", () => {
  img.src =
    "https://media.istockphoto.com/vectors/vector-3d-realistic-electric-white-juicer-blender-appliance-with-vector-id1209449541?k=20&m=1209449541&s=612x612&w=0&h=UiFn8Z9R9ewww5wQ94LVZHcm3Hc_02a-4 = ";
});

btnOn.addEventListener("click", () => {
  onLamb.classList.remove("d-none");
  offLamb.classList.add("d-none");
});

btnOff.addEventListener("click", () => {
  onLamb.classList.add("d-none");
  offLamb.classList.remove("d-none");
});

special.addEventListener("click", () => {
  onLamb.classList.toggle("d-none");
  offLamb.classList.toggle("d-none");
});
