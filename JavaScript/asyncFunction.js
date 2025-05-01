/*async function greet(){
    //throw "Error 404"
    return "Hello World";
}

greet()
    .then((result) =>{
        console.log("promise is resolved");
        console.log("result was",result);
    })
    .catch((err) =>{
        console.log("Error found",err);
    })
*/

async function getNum(){
    return new Promise ((resolve , reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve()
        },1000
        )
    })
}

async function demo(){
    await getNum();
    await getNum();
    getNum();
}