const works=['Exercise','Having food','Sleeping']
console.log(works.indexOf('Exercise'))
console.log(works[works.indexOf('Having food')])


const dailyworks=[{
    title:'Exercise',
    isDone:false,
},
{
    title:'Having food',
    isDone:false,
},
{
    title:'Sleeping',
    isDone:true,
}]

const getvalues=dailyworks.findIndex(function(wrk,index){
    console.log(wrk);
    return wrk.title==='Having food'
   
})
//console.log(dailyworks);
console.log(getvalues)

