async function change(color,delay){
    let h1 = document.querySelector("h1");
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*10)+1;
            if(num<5){
                reject("Promise rejected");
            }
            h1.style.color = color;
            console.log(`color changed to ${color}`);
            resolve("colour changed");
        }
        , delay)
    })
}

async function demo(){
   try{ 
    await change("orange",1000); 
    await change("red",1000); 
    await change("green",1000); 
    await change("blue",1000); 
    await change("yellow",1000); 
}
catch{
    console.log("Less than 5")
}
}
