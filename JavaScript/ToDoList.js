let ToDo = [];
let req = prompt("Enter ToDo task list :");
while (true){
    if (req=="quit"){
        console.log("Quitting the app");
        break;
    }
    if (req=="list"){
        console.log("--------------------------------------------------------------------------------------------");
        for (task of ToDo){
            console.log(task);
        }
        console.log("--------------------------------------------------------------------------------------------");  
    }
    else if (req=="add"){
        let task = prompt("Enter your request :");
        ToDo.push(task);
        console.log("Task added");
    }
    else if (req = "delete"){
    }
}