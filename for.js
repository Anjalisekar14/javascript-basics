let day=['Monday','Tuesday','Wednesday','Thusday','Friday','Saturday','Sunday']
for(i=0;i<day.length;i++)
{
    console.log(day[i])
}

//In reverse order
let week=['Monday','Tuesday','Wednesday','Thusday','Friday','Saturday','Sunday']
for(i=week.length-1;i>=0;i--)
{
    console.log(week[i])
}



//student mark prg
let getGrade=function(current_mark,Total_Mark){
let myPercent=((current_mark/Total_Mark)*100)
       myGrade=" "
    if(myGrade<=90){
        myGrade="A"
    }else if(myGrade<=80){
        myGrade="B"
    }else if(myGrade<=70){
        myGrade="c"
    }else{
        myGrade="D"
    }
        return `your grade is ${myGrade} and percentage is ${myPercent}`
}
let Result=(getGrade(92,100))
console.log(Result)
  