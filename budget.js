// var total = 0;
// var totalearnings = 0;
// var totalexpenses = 0;
// var expense = "";
// var num = 0;
// var color = "";
// var list = document.getElementById('listofexpenses');

var list = document.getElementById("myUL");

// var myNodelist = document.getElementsByTagName("LI");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }

function addElement(color) {

  var li = document.createElement("li");

  if(color == "Green")
  {
    li.style.borderBottom = "2px solid green";
    li.style.color = "green";
  }
  else{
    li.style.borderBottom = "3px solid darkred";
    li.style.color = "darkred";

  }

  var inputValue = document.getElementById("label").value;
  var cost = document.getElementById("value").value;
  

  var spa = document.createElement("SPAN");
  var tx = document.createTextNode(inputValue);
  spa.appendChild(tx);  
  spa.className = "texttoleft";

  // spa.style.backgroundColor = "purple";
  li.appendChild(spa);


  // var t = document.createTextNode(inputValue);
  // var c = document.createTextNode(cost);

  var sp = document.createElement("SPAN");
  var t = document.createTextNode("$"+cost);
  // sp.style.float = "right";

  sp.appendChild(t);
  // sp.style.backgroundColor = "blue";
  sp.className = "close";

  li.appendChild(sp);
  
  // li.appendChild(spa);
  // li.appendChild(c);

  if (inputValue === '' || cost === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
    list.insertBefore(li, list.childNodes[0]);
  }
  // document.getElementById("label").value = "";
  // document.getElementById("value").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00d7");
  span.className = "close";
  span.appendChild(txt);
  // span.style.width = "20px";
  // span.style.float = "right";
  li.appendChild(span);


  // for (i = 0; i < close.length; i++) {
  //   close[i].onclick = function() {
  //     var div = this.parentElement;
  //     div.style.display = "none";
  //   }
  // }
}

// function addElement(colo, exp, nu){

//  var newElement = document.createElement('div');
//  var secondElement = document.createElement('div');
//  var thirdElement = document.createElement('BUTTON');

//  var alldivs = document.createElement('div');

//  alldivs.style.width = "90%";
//  alldivs.style.margin = "1% 4%";
//  alldivs.style.cssFloat = "left";
//  alldivs.style.borderRadius = "4px";



//  if(colo == "red"){
//   alldivs.style.borderBottom= "2px solid red";
//   alldivs.style.color= "red";
//   thirdElement.style.color = "red";
//   thirdElement.style.border = "2px solid red";




//   // alldivs.style.backgroundColor = "red";

//   // newElement.style.backgroundColor = "red";
//   // secondElement.style.background = "red";
//   // thirdElement.style.background = "red";

//  }
//  else{
//   alldivs.style.borderBottom= "2px solid green";
//   alldivs.style.color= "green";
//   thirdElement.style.color = "green";
//   thirdElement.style.border = "2px solid green";


// //   alldivs.style.fontSize="22px";


//   // alldivs.style.backgroundColor = "gray";
//   // alldivs.style.color = "green";

//   // newElement.style.background = "green";
//   // secondElement.style.background = "green";
//   // thirdElement.style.background = "green";

//  }
//   newElement.style.height = "30px";
//   // newElement.style.color = "white";
//   newElement.style.marginLeft = "2%";
//   newElement.style.maxWidth = "60%";
//   newElement.style.cssFloat = "left";


//   secondElement.style.height = "30px";
//   // secondElement.style.color = "white";
//   // secondElement.style.marginTop = "2%";
//   secondElement.style.minWidth = "17%";
//   secondElement.style.cssFloat = "right";


//  thirdElement.className = "pointer";
//   thirdElement.style.borderRadius = "40px";
//   thirdElement.style.backgroundColor = "transparent";
//     thirdElement.style.marginRight = "1%";
//   // thirdElement.style.width = "20px";
//   thirdElement.style.cssFloat = "right";
//   // thirdElement.onclick = subElement(list, alldivs);

//   newElement.innerHTML = exp;
//   secondElement.innerHTML = "$" + nu;
//   thirdElement.innerHTML = "-";

  

//    list.insertBefore(alldivs,list.firstElementChild);
//    alldivs.appendChild(newElement,list.firstElementChild);
//    alldivs.appendChild(thirdElement,list.firstElementChild);
//    alldivs.appendChild(secondElement,list.firstElementChild);

//   // list.appendChild(alldivs);
//   //  list.appendChild(newElement);
//   //  list.appendChild(secondElement);
//   //  list.appendChild(thirdElement);


// }

// // function subElement(li, alldi){

// //   li.removeChild(alldi);


// // }

// function addExpense(){

  
//   var disp = "";
//   var expense = document.getElementById("label").value;
//   var num = document.getElementById("value").value;

//   // if(expense == "" || num == ""){
//   //     alert("na fam you good");
//   //     BREAK;
//   // }
 
//   color = "green";
//   total += parseInt(num);
//   totalearnings += parseInt(num);

//   document.getElementById('getTotal').innerHTML = "Overall Total $" + total;
//   document.getElementById('totearnings').innerHTML = "Total Earnings $" + totalearnings;

//   document.getElementById("label").value = "";
//   document.getElementById("value").value = "";


//   addElement(color, expense, num);

// }

// function subExpense(){

// var disp = ""
// var expense = document.getElementById("label").value;
// var num = document.getElementById("value").value;

// color = "red";

// total -= parseInt(num);
// totalexpenses += parseInt(num);

// document.getElementById('getTotal').innerHTML = "Overall Total $" + total;
// document.getElementById('totexpenses').innerHTML = "Total Expenses $" + totalexpenses;

// disp = expense + "     $" + num;

// document.getElementById("label").value = "";
// document.getElementById("value").value = "";


// addElement(color, expense, num);

// }
