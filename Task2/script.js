
function caluculateinterest(){
    let principle,time,rate,si;
    principle=document.getElementById("p").value;
    time=document.getElementById("t").value;
    rate=document.getElementById("r").value;
    si=(principle*time*rate)/100;
    document.getElementById("simpleinterest").innerHTML=si.toFixed(2);
}