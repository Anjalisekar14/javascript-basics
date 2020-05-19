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
class Teacher extends student{
   constructor(fname,lname,rollno,dept,classteacher){
       super(fname,lname,rollno);
       this.dept=dept;
       this.classteacher=classteacher;
   }
   getFullName(){
       let fullname=`Firstname is ${this.fname} Lastname ${this.lname} is my full name \nrollno is ${this.rollno}`
       return fullname;
   }
   getfulldetails(){
       let details=`Department is ${this.dept} \nClass Teacher name is ${this.classteacher}`
       return details;
   }
}
const john=new Teacher("sam","aneson",12,"mscss","johneeson")
console.log(john.getFullName());
console.log(john.getfulldetails());



const sammy=new student("anni","sooniee",4)
console.log(sammy.getFullName());

