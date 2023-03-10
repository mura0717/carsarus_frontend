import { API_URL } from "../../settings.js"
const URL = API_URL + "/cars"

export async function initCars() {
    const cars = await getCars();
    const carsContainer = document.querySelector("#cars-container");
    carsContainer.innerHTML = "";
    cars.forEach(car => {
        carsContainer.innerHTML += "<div class='car'><p>${car.id}</p><p>${car.model}</p><p>${car.brand}</p><p>${car.model}</p><p>${car.pricePrDay}</p></div>"
    });
}

function getCars() {
    return fetch(URL)
        .then(res => res.json())
}