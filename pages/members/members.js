import { API_URL } from "../../settings.js"
const URL = API_URL + "/members"

export async function initMembers() {
    const members = await getMembers();
    const tableRowContent = document.querySelector("#table-rows");
    members.forEach(member => {
        let row = document.createElement("tr");
        addChildToElement(row, member.username);
        addChildToElement(row, member.email);
        addChildToElement(row, member.firstName);
        addChildToElement(row, member.lastName);
        addChildToElement(row, member.address);
        addChildToElement(row, member.city);
        tableRowContent.appendChild(row);
    });
}

function addChildToElement(element, value) {
    let rowElement = document.createElement("td");
    rowElement.textContent = value
    element.appendChild(rowElement);
}

async function getMembers() {
    return await fetch(URL)
        .then(res => res.json())
}