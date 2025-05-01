function saveData(){
    return new Promise((sucess, failure) => {
        let internetSpeed = Math.floor((Math.random()) * 10) + 1;
        console.log(internetSpeed);
        if(internetSpeed > 4){
            sucess("Data is saved");
        }
        else{
            failure("Data not save");
        }
    })
}