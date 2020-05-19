//simple object
let student={
    name:'aa',
    regno:1,
    dept:'mscss',
}
console.log(student)
console.log(`a new student of ${student.dept} and the name od the student is ${student.name}`)


//object with method
let stud={
    day:'monday',
    totaldays:0,
    attend:0,
    notattend:0,

    addtotal:function(num3){
        this.totaldays=this.totaldays+num3
    },
    add_attend:function(num){
        this.attend=this.attend+num
    },
    add_notattend:function(){
        this.notattend=this.totaldays-this.attend
    },
    summary:function(){
                
                return `you have ${this.totaldays} ! you have attend ${this.attend} not attend ${this.notattend} !`

    }
}
stud.addtotal(10)
stud.add_attend(7)
stud.add_notattend()
console.log(stud.summary())





