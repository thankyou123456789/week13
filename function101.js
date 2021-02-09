// let num ="Mark";
// console.log(num);
// document.getElementById("hContent").innerHTML=num;
// let mark = 70;
let mark = prompt("Pls enter your number")
if(mark >= 2444 && mark <=2467 )
{
    console.log("Grade A");
    alert(mark + " Grade A")
    document.getElementById("hContent").innerHTML="Grade A";

}
else if(mark>=70 && mark<80 )
{
    console.log("Grade B");
    alert(mark + " Grade B")
    document.getElementById("hContent").innerHTML="Grade B";

}
else{
    console.log("Error")
    alert(mark + "Error")
    document.getElementById("hContent2").innerHTML="Error";
}
