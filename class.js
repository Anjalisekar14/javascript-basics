//classes and object
class user{
    constructor(firstname,lastname,credit){
        this.firstname=firstname;
        this.lastname=lastname;
        this.credit=credit;
    }
}
const john=new user("John","Anderson",24)
console.log(john)

//class object method 
class student{
    constructor(fname,lname,rollno){
        this.fname=fname;
        this.lname=lname;
        this.rollno=rollno;
   }
   getFullName(){
       let fullname=`${this.fname} ${this.lname} is my full name`
       return fullname;
   }
}
const sam=new student("Sam","Anderson",40);
console.log(sam.getFullName()) 

const johnee=new student("johnee","son",30);
console.log(johnee.getFullName())