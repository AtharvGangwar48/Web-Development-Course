let multi = function(func, n){
    for(i=1;i<=n;i++){
        func();
    }
}

let greet = function(){
    console.log("Hello");
}

