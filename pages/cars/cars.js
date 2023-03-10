import { API_URL } from "../../settings.js"
const URL = API_URL + "/cars/admin"

export async function initCars() {
    const cars = await getCars();
    const carsContainer = document.querySelector(".cars-container");
    carsContainer.innerHTML = "";
    cars.forEach(car => {
        carsContainer.innerHTML += `
            <div class="car">
                <p>${car.model}</p>
                <p>${car.brand}</p>
                <p>${car.model}</p>
                <p>${car.pricePrDay}</p>
                <p>${car.bestDiscount}</p>
                <p>${car.updated}</p>
            </div>
        `
    });
}