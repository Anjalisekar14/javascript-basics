//normal function
const sayHello=function(name){
    return "Hey there "+ name + "!"
}
console.log(sayHello('sammy'));


//arrow function
const  arrow_fn=(name)=>{
    return "Hey there " +name+"!"
}
console.log(arrow_fn('vicky'));

const arr_fn=(name)=>"Hey there "+name+ "!"
console.log(arr_fn('sammy vicky'));


//arrow function and this keyword in js
// const cameras={
//     price:600,
//     weight:2000,
//     myDes:function(){
//     return `This canon camera is of {this.price}$`
// }
// }
// console.log(cameras.myDes)


const data=[{
    title:'Exercise',
    isDone:true,
},
{
  title:'Having food',
  isDone:true,
},
{
    title:'Sleeping',
    isDone:false,
  },
]
const getdata=data.filter((datatfilter)=>datatfilter.isDone===true)
console.log(getdata)