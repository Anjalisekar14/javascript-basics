let useremail='LCO123@#$%^&*'
let password='123@*!45'
console.log(useremail.toLowerCase())
console.log(password)
console.log(password.length);


let userchecker=function(user){
    if((user.includes(123)&&(user.length>=6)&&(user.includes('@#$%^&*')))){
        return true
    }
        return false
}
console.log(userchecker(useremail))

let passchecker=function(pass){
    if((pass.includes('123@*!'))&&(pass.length>=8)){
         return true
    }
         return false
}
console.log(passchecker(password))
