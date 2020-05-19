const superheros=['Ironman','spiderman','capamerica']
console.log(superheros);
console.log(superheros[0])
console.log(superheros.length)

//get the value of the superheros length in array
console.log([superheros.length-1])

//instead of number get the name of the arry
console.log(`we have ${superheros[superheros.length-1]} superheros`)


//methods of arrays

//add the values inside the arrays
console.log(superheros.push('batman'))
console.log(superheros)

//remove the arrays
console.log(superheros.pop())
console.log(superheros)


//splice
console.log(superheros.splice(1,2,'wrong man'))
console.log(superheros)


//replace the array
console.log(superheros[2]="spyman")
console.log(superheros)


//shift-> remove the first array
console.log(superheros.shift())
console.log(superheros)

//unshift->remove the first array instead of that add new one
console.log(superheros.unshift('addnew'))
console.log(superheros)
