import { API_URL } from "../../settings.js"
import { handleHttpErrors, makeOptions, sanitizeStringWithTableRows } from "../../utils.js";

const URL = API_URL + "/cars/admin"

export async function initCars() {
    const cars = await getAllCars();
}

export async function getAllCars() {
    try {
        document.getElementById("error").innerText = "";

        const options = {
            method: "GET",
            headers: { "Authorization": "Bearer " + localStorage.token }
        }

        //ALT: const options = makeOptions("GET", body, true)

        const cars = await fetch(URL).then(res => handleHttpErrors(res))

        const tableRows = cars.map(car => `
        <tr>
        <td>${car.id}</td>
        <td>${car.brand}</td>
        <td>${car.model}</td>
        <td>${car.pricePrDay}</td>
        <td>${car.bestDiscount}</td>
        </tr>
        `).join("")
        document.getElementById("table-rows").innerHTML = sanitizeStringWithTableRows(tableRows);

    } catch (error) {
        document.getElementById("error").innerText = error.message;
    }
}





/*
MARTIN SOLUTION:

export async function initCars2() {
    const cars = await getCars();
    const tableRowContent = document.querySelector("#table-rows");
    cars.forEach(car => {
        let row = document.createElement("tr");
        addChildToElement(row, car.id);
        addChildToElement(row, car.brand);
        addChildToElement(row, car.model);
        addChildToElement(row, car.pricePrDay);
        addChildToElement(row, car.bestDiscount);
        tableRowContent.appendChild(row);
    });
}


function addChildToElement(element, value) {
    let rowElement = document.createElement("td");
    rowElement.textContent = value
    element.appendChild(rowElement);
}

async function getCars() {
    return await fetch(URL)
        .then(res => res.json())
}*/
