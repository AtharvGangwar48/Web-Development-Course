function saveData(data, sucess, failure){
    let internetSpeed = Math.floor(Math.random()*10)+1;
    if(internetSpeed > 4){
        sucess();
    }
    else{
        failure();
    }
}

saveData("Data",
    () => {
        console.log("Sucess: Data Saved");
        saveData(
            "Data2",
            () => {
                console.log("Sucess2: Data Saved");
                saveData(
                    "Data3",
                    () => {
                        console.log("Sucess3: Data Saved");
                    },
                    () => {
                        console.log("Failure: Data not Saved");
                    },
                    () => {
                        console.log("Failure: Data not Saved");
                    }
            )
        }
        )
    },
    () => {
        console.log("Failure: Data not Saved");
    }
)