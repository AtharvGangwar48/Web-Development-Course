let url = "https://catfact.ninja/fact";

fetch(url)
.then( (response) => {
    console.log(response)
})
.catch((reject) =>{
    console.log(reject)
})