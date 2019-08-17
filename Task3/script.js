

function addition(){
    let firstnum,secondnum,result;
    firstnum=document.getElementById("first").value;
    secondnum=document.getElementById("second").value;
    firstnum=Number(firstnum);
    secondnum=Number(secondnum);
    document.getElementById("result").innerHTML=firstnum + secondnum;

}
function subtraction(){
    let firstnum,secondnum,result;
    firstnum=document.getElementById("first").value;
    secondnum=document.getElementById("second").value;
    document.getElementById("result").innerHTML=firstnum - secondnum;

}
function multiplication(){
    let firstnum,secondnum,result;
    firstnum=document.getElementById("first").value;
    secondnum=document.getElementById("second").value;
    document.getElementById("result").innerHTML=firstnum * secondnum;

}
function division(){
    let firstnum,secondnum,result;
    firstnum=document.getElementById("first").value;
    secondnum=document.getElementById("second").value;
    document.getElementById("result").innerHTML=firstnum / secondnum;

}
function modulus(){
    let firstnum,secondnum,result;
    firstnum=document.getElementById("first").value;
    secondnum=document.getElementById("second").value;
    document.getElementById("result").innerHTML=firstnum % secondnum;

}