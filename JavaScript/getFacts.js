let h1 = document.querySelector("button");
let data = document.querySelector("#result");
h1.addEventListener("click", async ()=>{
    let joke = await getFact();
    data.innerText = joke;
})



let url = "https://icanhazdadjoke.com/";
async function getFact(){
    try{
        const config = { headers: { Accept: "application/json" }};
        let res = await axios.get(url, config)
        return res.data.joke;
    }
    catch(err){
        console.log("Error is --->",err)
    }
}