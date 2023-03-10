import { API_URL } from "../../settings.js"
const URL = API_URL + "/cars"


export async function initCars() {
    const cars = await getCars();
    console.log(cars)
    let carsContainer = document.querySelector("#cars-container");
    cars.forEach(car => {
        addChildToElement(carsContainer, car.brand);
    });
}

function addChildToElement(parent, value) {
    let p = document.createElement("p");
    p.textContent = value;
    parent.addChild(p);
}

async function getCars() {
    return await fetch(URL)
        .then(res => res.json())
}
