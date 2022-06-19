// document.querySelector("#con").addEventListener("click",myfunction)

var local=JSON.parse(localStorage.getItem("userDetails")) || []
function myfunction()
{
    // console.log(1)
    var obj={
        mob:document.querySelector("#mobile").value
    }
   local.push(obj)
//    console.log(obj)
//    console.log(local)
console.log(obj.mob.length)
var mobleNumber=document.querySelector("#mobile").value
console.log(mobleNumber)

localStorage.setItem("userDetails",JSON.stringify(local))

if(mobleNumber.length==10)
{
    OTP()

}

}



myfunction()

function OTP()
{
    let otp=Math.random()
    otp*=10000;
    otp=Math.floor(otp)
    // console.log(otp)
    alert("Your otp is : "+otp)
    return otp
}

document.querySelector("#con").addEventListener("click",sign)

function sign()
{
    alert("sign in successfully")
    window.location.href="./home"
}
   



