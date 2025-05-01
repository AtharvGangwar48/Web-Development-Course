let length = 4;
function callback(){
    console.log(this.length);//4
}
const object = {
    length:5,
    method(callback){//print command is pass 5
        callback();//5
    },
};
object.method(callback,1,2);