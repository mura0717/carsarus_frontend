import { API_URL } from "../../settings.js"
import { handleHttpErrors, makeOptions, sanitizeStringWithTableRows } from "../../utils.js";

const URL = API_URL + "/members"

export async function initMembers() {
    const members = await getAllMembers();
}

export async function getAllMembers() {
    try {
        document.getElementById("error").innerText = "";

        const options = {
            method: "GET",
            headers: { "Authorization": "Bearer " + localStorage.token }
        }

        const members = await fetch(URL, options).then(res => handleHttpErrors(res))

        const tableRows = members.map(member => `
    <tr>
    <td>${member.username}</td>
    <td>${member.email}</td>
    <td>${member.firstName + " " + member.lastName}</td>
    <td>${member.ranking}</td>
    </tr>
    `).join("")
        document.getElementById("tbl-body").innerHTML = sanitizeStringWithTableRows(tableRows);
    } catch (error) {
        document.getElementById("error").innerText = error.message;
    }
}