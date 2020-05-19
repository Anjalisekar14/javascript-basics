const student={
    name:'john',
    age:21,
    isActive:true,
}
//convert object to string
const objtostr=JSON.stringify(student);
console.log(typeof objtostr);

//convert string to object
const strtoobj=JSON.parse(objtostr);
console.log(typeof strtoobj);
