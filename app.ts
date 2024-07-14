// //Q_136//iteration for loop till 5
// for(let i = 1; i <= 5; i++){
//     let variable = i*2
//     console.log(`variable value`, i, `:`, variable)
// }

// //Q_137 implement a try catch block
// let json = `{"name" : "Ali", "age" : 20 }`;
// try {let user = JSON.parse(json);
//     console.log(user.name)
//     }catch(error){
//         console.log(`Our page opologised, the data has error !`)    
//     }

//     //Q_138 use breakpoint in browser//debugger
//     const name = "Ambreen"
// const age = 27
// const job = "web developer"
// const hobbies= "read, write articles"

// console.log({name , age , job , hobbies});
//Q_141 await is used to resolve promise error in JS
let answer = await function(){try{
} catch (error){
} (error:any)=>{
    console.log(error)
    return "default answers"
}
}

//Q_142 async function fetching data
const myPromise = new Promise((resolve , reject) =>{
   setTimeout(()=>{
    resolve(`i successed !`)
   }, 2000)
})
myPromise.then((result) =>{
    console.log(result)
});

//Q_143 .then and .catch method used for (resolve,reject)function
let P1 = new Promise((resolve , reject) => {
    console.log(`promise is pending !`)
    setTimeout(()=>{
        resolve(true)
        console.log(`i am a promise and i am resolved !`)
    },3000)
})
let P2 = new Promise((resolve , reject) => {
    console.log(`promise is pending`)
    setTimeout(()=>{
        reject(true)
        console.log(`1 am promise and i am rejected !`)
    },5000)
})
console.log(P1 , P2)
P1.then((value)=>{
    console.log(value)
})
P2.catch((error)=>{
    console.log(`some error occurs in promise !`)
})

//Q_144 //for 3 or more promises
const p1 = Promise.resolve("ok !");
const p2 = 1234;
const p3 = new Promise((resolve , reject) => {
    setTimeout(() => {
        resolve("Hello !");
    },1000);
});
Promise.all([p1 , p2 , p3]).then((values) =>{
    console.log(values);
});

//Q_145 function with custome action
const personOne = (friend:string, callfriend:any)=>{
    console.log(`I am asking to my friend ${friend}`)
    callfriend();
}
const personTwo = ()=> {    //function two
    console.log(`whats going on ?`)
}  //call back function
personOne("ali", personTwo)

