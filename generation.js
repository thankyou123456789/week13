let  gen = prompt ("Please Enter value of genaration: ");
if(gen>=2540 && gen<=2564)
{
    if(gen>=2553 && gen<=2564){
        alert(gen + " = Gen Alpha")
        console.log("Gen Alpha");
        document.getElementById("hContent").innerHTML + "= Gen Alpha"
    }
    else if(gen >=2540 && gen<2553){
        alert(gen + " = Gen Z")
        console.log("Gen Z")
        document.getElementById("hContent").innerHTML + "= Gen Z"
    }
}
else{
    alert(gen + " = ERROR")
    console.log("ERROR")
}
