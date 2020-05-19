//argument passed

let defpara=function(num1,num2){
    console.log(num1*num2)
}
defpara(5,2)

//or

let def=function(num1,num2){
    return num1*num2
}
console.log(def(5,2))


//Default parameter
let fullname=function(fname='John',lname='Son'){
console.log(`the firstname is ${fname} and secondname is ${lname}`)
}
fullname()


//if parameter is passed that parameter is taken by the function here
let name=function(fname='John',lname='Son'){
    console.log(`the firstname is ${fname} and secondname is ${lname}`)
    }
name('johnee','sonee')




    