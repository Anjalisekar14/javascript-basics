//&& - AND operator
//|| - OR operator


let isverified = true
let isloggedin= true
let haspaymenttoken = true
let isguest = true

if(isverified && isloggedin && haspaymenttoken){
    console.log("greeting msg grant access to paid course")
}else if (isverified || isguest)
{
    console.log("allow free previews")
}else{
    console.log("Msg:please contact admin");
}
