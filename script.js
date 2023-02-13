const button = document.getElementById("btn")
const joke = document.getElementById("joke")

const apiKey = "dpU/+V2KpZsLzSBIk1rwIQ==c1Kf1QB1T4edVwOK"
const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1"
const options = {
    method: "GET",
    headers: {'X-Api-Key': apiKey}
}

async function getJoke(){
    try {
        joke.innerText = "Updating..."
        button.disabled = true
        button.innerText = "Loading..."
        const response = await fetch(apiUrl, options)
        const data = await response.json()
        joke.innerText = data[0].joke
        button.disabled = false
        button.innerText = "TELL ME A JOKE"
    } catch (error) {
        joke.innerText = "An error happend, try again later..."
        button.disabled = false
        button.innerText = "TELL ME A JOKE"
    }
}
button.addEventListener("click", getJoke)