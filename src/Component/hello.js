var promise = new Promise((resolve, reject)=>{
    console.log("1");
    resolve("Vijay");
})

promise.then((result)=>{
    console.log(result)
})

async function greet(){
    return "welocme Vijay";
 }
 
 greet().then((result)=>{
     console.log(result)
 })