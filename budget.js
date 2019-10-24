var total = 0;
var totalearnings = 0;
var totalexpenses = 0;
var expense = "";
var num = 0;
var color = "";


function addElement(colo, exp, nu){

 var newElement = document.createElement('div');
 var secondElement = document.createElement('div');
 var thirdElement = document.createElement('div');

 var alldivs = document.createElement('div');

 alldivs.style.width = "90%";
 alldivs.style.margin = "1% 4%";
 alldivs.style.cssFloat = "left";
 alldivs.style.borderRadius = "4px";



 if(colo == "red"){
  alldivs.style.borderBottom= "2px solid red";
  alldivs.style.color= "red";


  // alldivs.style.backgroundColor = "red";

  // newElement.style.backgroundColor = "red";
  // secondElement.style.background = "red";
  // thirdElement.style.background = "red";

 }
 else{
  alldivs.style.borderBottom= "2px solid green";
  alldivs.style.color= "green";
//   alldivs.style.fontSize="22px";


  // alldivs.style.backgroundColor = "gray";
  // alldivs.style.color = "green";

  // newElement.style.background = "green";
  // secondElement.style.background = "green";
  // thirdElement.style.background = "green";

 }
  newElement.style.height = "30px";
  // newElement.style.color = "white";
  newElement.style.marginLeft = "2%";
  newElement.style.maxWidth = "60%";
  newElement.style.cssFloat = "left";


  secondElement.style.height = "30px";
  // secondElement.style.color = "white";
  // secondElement.style.marginTop = "2%";
  secondElement.style.minWidth = "17%";
  secondElement.style.cssFloat = "right";

  thirdElement.style.height = "30px";
  // thirdElement.style.color = "white";
  thirdElement.style.marginLeft = "2%";
  thirdElement.style.width = "20px";
  thirdElement.style.cssFloat = "right";

  newElement.innerHTML = exp;
  secondElement.innerHTML = "$" + nu;

  // var number = document.createElement("p");
  // var textnode = document.createTextNode(nu);
  // number.append(textnode);

  // secondElement.appendChild(number);


  thirdElement.innerHTML = "-";

  
   var list = document.getElementById('listofexpenses');

   list.insertBefore(alldivs,list.firstElementChild);
   alldivs.appendChild(newElement,list.firstElementChild);
   alldivs.appendChild(thirdElement,list.firstElementChild);
   alldivs.appendChild(secondElement,list.firstElementChild);

  // list.appendChild(alldivs);
  //  list.appendChild(newElement);
  //  list.appendChild(secondElement);
  //  list.appendChild(thirdElement);


}

function addExpense(){

  
  var disp = ""
  var expense = document.getElementById("label").value;
  var num = document.getElementById("value").value;

  // if(expense == "" || num == ""){
  //     alert("na fam you good");
  //     BREAK;
  // }
 
  color = "green";
  total += parseInt(num);
  totalearnings += parseInt(num);

  document.getElementById('getTotal').innerHTML = "Overall Total $" + total;
  document.getElementById('totearnings').innerHTML = "Total Earnings $" + totalearnings;

  document.getElementById("label").value = "";
  document.getElementById("value").value = "";


  addElement(color, expense, num);

}

function subExpense(){

var disp = ""
var expense = document.getElementById("label").value;
var num = document.getElementById("value").value;

color = "red";

total -= parseInt(num);
totalexpenses += parseInt(num);

document.getElementById('getTotal').innerHTML = "Overall Total $" + total;
document.getElementById('totexpenses').innerHTML = "Total Expenses $" + totalexpenses;

disp = expense + "     $" + num;

document.getElementById("label").value = "";
document.getElementById("value").value = "";


addElement(color, expense, num);

}
