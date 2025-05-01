let tasks = [];
let req = prompt("Select the task List, Add, Delete or Quit");
while (true){
    if(req == "Quit"){
        console.log("Quitting");
        break;
    }
    
    if(req == "List"){
        console.log("------------");
        for(works of tasks){
            console.log(works);
        }
        console.log("------------");
    }
    else if(req == "Add"){
        let task = prompt("Enter new task");
        tasks.push(req);
        console.log("Task added");
    }

    else if(req == "Delete"){
         let inx = prompt("Enter task index to be Deleted");
         tasks.splice(inx, 1); 
         console.log("Task Deleted");
    }
    task = prompt("Select the task List, Add, Delete or Quit");
    }
