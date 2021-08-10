var number_1=Number(document.getElementById("firstno").value);
function Calculate (){
   number_1=Number(document.getElementById("firstno").value);
 var area=number_1 * number_1;
   var perimeter=4 * number_1;
    document.getElementById("LBLArea").innerHTML= area;
     document.getElementById("LBLPerimeter").innerHTML= perimeter;
}