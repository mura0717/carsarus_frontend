import { API_URL } from "../../settings.js"
const URL = API_URL + "/cars/admin"


export async function initCars() {
    const cars = await getCars();
    console.log(cars)
    let carsContainer = document.querySelector("#table-rows");
    cars.forEach(car => {
        let row = document.createElement("tr");
        addChildToElement(row, car.id);
        addChildToElement(row, car.brand);
        addChildToElement(row, car.model);
        addChildToElement(row, car.pricePrDay);
        addChildToElement(row, car.bestDiscount);
        carsContainer.appendChild(row);
    });
}

function addChildToElement(el, value) {
    let rowElement = document.createElement("td");
    rowElement.textContent = value
    el.appendChild(rowElement);
}

async function getCars() {
    return await fetch(URL)
        .then(res => res.json())
}
