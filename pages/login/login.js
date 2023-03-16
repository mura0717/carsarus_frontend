import { API_URL } from "../../settings.js"
import { handleHttpErrors } from "../../utils.js"

const URL = API_URL + "/auth/login"

export function initLogin() {
    document.getElementById("login-btn").onclick = login

}

export async function logout() {
    document.getElementById("login-id").style.display = "block"
    document.getElementById("logout-id").style.display = "none"
    localStorage.clear()
}

async function login(evt) {

    document.getElementById("error").innerHTML = ""

    const username = document.getElementById("username").value
    const password = document.getElementById("password").value

    //const userDTO = {username: username, password: password}
    const userDTO = { username, password }

    const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userDTO })
    }
    try {
        const response = await fetch(URL, options).then(res => handleHttpErrors())
        localStorage.setItem("user", response.username)
        localStorage.setItem("token", response.token)
        localStorage.setItem("roles", response.roles)

        if (response.roles.includes("admin")) {
            document.getElementById("admin-id").style.display = "block"
        }

        document.getElementById("login-id").style.display = "none"
        document.getElementById("logout-id").style.display = "block"

        window.router.navigate("")
    } catch (error) {
        document.getElementById("error").innerHTML = error.message

    }


}