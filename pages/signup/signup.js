import { API_URL } from "../../settings.js"


const URL = API_URL + "/members"


export function initSignup() {

    const form = document.querySelector("#form");
    const usernameInput = document.querySelector("#input-username");
    const emailInput = document.querySelector("#input-email");
    const passwordInput = document.querySelector("#input-password");
    const firstNameInput = document.querySelector("#input-firstname");
    const lastNameInput = document.querySelector("#input-lastname");
    const streetInput = document.querySelector("#input-street");
    const cityInput = document.querySelector("#input-city");
    const zipInput = document.querySelector("#input-zip");
    const statusMsg = document.querySelector("#status");
    const gotoLogin = document.querySelector("#goto-login");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const data = {
            username: usernameInput.value,
            email: emailInput.value,
            password: passwordInput.value,
            firstName: firstNameInput.value,
            lastName: lastNameInput.value,
            address: {
                street: streetInput.value,
                city: cityInput.value,
                zip: zipInput.value,
            },
        };
        const response = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        if (response.ok) {
            statusMsg.textContent = "Sign up successful!";
            statusMsg.classList.remove("text-danger");
            statusMsg.classList.add("text-success");
            gotoLogin.style.display = "inline";
        } else {
            statusMsg.textContent = "Sign up failed!";
            statusMsg.classList.remove("text-success");
            statusMsg.classList.add("text-danger");
            gotoLogin.style.display = "none";
        }
    });

}


