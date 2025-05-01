/*let mergedObject = (obj1 , obj2) => {
    let newObj = obj1.concat(obj2)
    console.log(newObj)
}*/

const mergeObjects = (obj1,obj2) => ({...obj1,...obj2})
mergeObjects({a:1,b:2},{c:3,d:4})//{a:1,b:2,c:3,d:4