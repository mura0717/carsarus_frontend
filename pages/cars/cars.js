import { API_URL } from "../../settings.js"
const URL = API_URL + "/cars"


export async function initCars() {
    const cars = await getCars();
    console.log(cars)
    let carsContainer = document.querySelector("#cars-container");
    cars.forEach(car => {
        addChildToElement(carsContainer, car.id);
        addChildToElement(carsContainer, car.brand);
        addChildToElement(carsContainer, car.model);
        addChildToElement(carsContainer, car.pricePrDay);
        addChildToElement(carsContainer, car.bestDiscount);
    });
}

function formatContainer(el) {
    el.style.display = 
}

function addChildToElement(el, value) {
    let p = document.createElement("p");
    p.textContent = value;
    el.appendChild(p);
}

async function getCars() {
    return await fetch(URL)
        .then(res => res.json())
}
