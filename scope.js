//var let keyword
//local and gobal variable in scope

let iamGobal="i m Gobal var"


if(true){
    let iamLocal="i m local var"
    iamLocal="i am different"
    console.log(iamLocal)

    //gobal var can be access inside
    console.log(iamGobal)
}
//local var cannot be access outside
//console.log(iamLocal)

console.log(iamGobal)



//local var access outside in the var keyword
if(true){
    var iamLocal="i m local var"
    iamLocal="i am different"
    console.log(iamLocal)

    //gobal var can be access inside
    console.log(iamGobal)
}
//local var cannot be access outside
console.log(iamLocal)

console.log(iamGobal)




let king="Lion"

if(true){
    let king="tiger"
   


    if(true){
        // let king="cheeta"
        console.log(king)
    }
}



if(true){
    console.log("lion is king :"+king)
}
