//Creating a function or Creting a Method
/*
const calculator = {
    add: function(a,b){
        return (a+b);
    },
    sub: function(a,b){
        return (b-a);
    },
    mul: function(a,b){
        return (a*b);
    },
    div: function(a,b){
        return (a/b);
    }
}*/

//ShortHandTrick

const calculator = {
    add(a,b){
        return (a+b);
    },
    sub(a,b){
        return (b-a);
    },
    mul(a,b){
        return (a*b);
    },
    div(a,b){
        return (a/b);
    }
}