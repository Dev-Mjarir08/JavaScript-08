let viewbreed = document.getElementById('breed')
let dogImg = document.getElementById('dogImg')
let loader = document.getElementById('loader')
let breedList = [];

const fetchBreed = async () => {
    try {
        let res = await fetch('https://dog.ceo/api/breeds/list/all')
        let data = await res.json()
        breedList = Object.keys(data.message)
        handelApi()
    }
    catch (error) {
        console.log(error.message);
    }
}

const handelApi = () => {
    breedList.forEach((breed) => {
        let option = document.createElement('option')
        option.value = breed.toLowerCase()
        option.innerText = breed
        viewbreed.appendChild(option)
    })
}

viewbreed.addEventListener('change', async (e) => {
    let breed = e.target.value
    if (!breed) return;

    try {
        // Hide image & show loader
        dogImg.style.display = "none"
        loader.style.display = "block"

        let res = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        let data = await res.json()

        // Set image
        dogImg.src = data.message

        // Wait for image to load fully
        dogImg.onload = () => {
            loader.style.display = "none"
            dogImg.style.display = "block"
            dogImg.style.opacity = "1"
        }

    }
    catch (error) {
        console.log(error.message);
    }
})

fetchBreed()
