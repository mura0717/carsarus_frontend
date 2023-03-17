import { API_URL } from "../../settings.js"
import { handleHttpErrors, makeOptions, sanitizeStringWithTableRows } from "../../utils.js";

const URL = API_URL + "/reservations"

export async function initListReservationsAll() {

    const reservations = await getAllReservations();

}

export async function getAllReservations() {

    try {
        document.getElementById("error").innerText = "";

        const options = {
            method: "GET",
            headers: { "Authorization": "Bearer " + localStorage.token }
        }

        const reservations = await fetch(URL, options).then(res => handleHttpErrors(res))

        const tableRows = reservations.map(reservation => `
    <tr>
    <td>${reservation.id}</td>
    <td>${reservation.carBrand}</td>
    <td>${reservation.carModel}</td>
    <td>${reservation.rentalDate}</td>
    <td>${reservation.pricePrDay}</td>
    </tr>
    `).join("")
        document.getElementById("tablerows").innerHTML = sanitizeStringWithTableRows(tableRows);
    } catch (error) {
        document.getElementById("error").innerText = error.message;
    }
}
