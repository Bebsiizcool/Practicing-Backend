
// for each
let arr = [1,2,3,4]
arr.forEach(function(val){
    console.log(val+" helllo")
})

// map
let arr2 = [1,2,3,5]
let res = arr2.map((e)=>{
    return e*2
})
console.log(res)

// filter 
let arr3 = [1,2,4,5,6]
 let green = arr3.filter((e)=>{
    if(e >2){
        return true
    }
})
console.log(green);

// find 
 let arr4 = [1,2,3,4,5]
 let yellow = arr4.find((e)=>{
    if(e===3){
        return true
    }
 })
 console.log(yellow)

//  object in js 

var obj={
    name: "bebsi",
    age: "18"
}

let blue = obj.name
console.log(blue);
