function AddCar(){
  carList.push({
    name: carName.value,
    year: carYear.value,
    place:carPlace.value
  })

  var list = document.createElement("ul");


  var licarName =document.createElement("li");
  licarName.textContent = carName.value;
  list.appendChild(licarName);


  var licarYear = document.createElement("li");
  licarYear.textContent = carYear.value;
  list.appendChild(licarYear);


  var licarPlace = document.createElement("li");
  licarPlace.textContent = carPlace.value;
  list.appendChild(licarPlace);

  document.querySelector('.list').appendChild(list);

};


const carName = document.querySelector(".carName");
const carYear = document.querySelector(".carYear");
const carPlace = document.querySelector(".carPlace");

let carList = []

const CarAdd = document.getElementById("AddCar");

CarAdd.addEventListener("click", AddCar);

var CarList = {
  "CarName":"Ford",
  "CarYear":"1970",
  "CarPlace":"USA"};
