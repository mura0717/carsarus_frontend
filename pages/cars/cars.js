import { API_URL } from "../../settings.js"
const URL = API_URL + "/cars"


export async function initCars() {
    const cars = await getCars();
    console.log(cars)
    const carsContainer = document.querySelector("#cars-container");
    cars.forEach(car => {
        addChild(carsContainer, car.brand);
    });
}

function addChild(parent, value) {
    let p = document.createElement("p");
    p.textContent = value;
    parent.addChild(p);
}

async function getCars() {
    return await fetch(URL)
        .then(res => res.json())
}
