// dom 

// attruibties (element properties)
// code
// div
/* <div id="box"></div> */
/* <p class="para"></p> */
// let div=document.querySelector("div");
// console.log(div);
//  div id
// let id=div.getAttribute("id");
// console.log(id);
// NAME
// let name=div.getAttribute("name");
//  console.log(name);
// class p
// let p =document.querySelector("p");
// console.log(p.getAttribute("class"));
// p
// let p=document.querySelector("p");
// console.log(p);

// change of  value attributers 
// element me change hoga consol me nahi
// let p=document.querySelector("p");
// console.log(p.setAttribute("class","kumar"));
// console me type karna hai 
// error ayega to ghabran anahi hai
// p.setAttribute("class","123");

// style  
// Node.style

// mean  css ko  javascipt me *acceses* karna hai
// let div=document.querySelector("div");
// css ki properti dekhne ke kliye console me jaker
// div.style uper vlala codelikhne ke bad 
// color *changes*  from javascript  to csss

// div.style.background="green";
// div.style.background="purple";
// div.style.fontSize ="34px"
// tex change
// div.style.visibility="hidden";
// div.innerText="hello";
// console me jakar div.style type karna hqai
/*
csss                js
color             color
background-color   backgroundColour
font-size         fontSize
 
*/
// insert Element (element ko add karna)
// let newBtn =document.createElement("button");
// newBtn.innerText="cleack me";/*console me likhna padega newBtn.innerText */
// console.log(newBtn);
// ab isko screen me dalne ke liye 
/*
node.append(el)/adds at the end of node (inside)
node.prepend(el)/adds at the starts of node (inside)
node .before (el) /add befor the  node (outside)
node.after(el)/ add after the node (outside)

delete Element
node.remove()/ remove the node
*/

// insert Element (element ko add karna)

// let newBtn =document.createElement("button");
// newBtn.innerText="cleack me";
// console.log(newBtn)
// screen me add
// div ke andar
// let div=document.querySelector("div");
// div.append(newBtn);
//  prepend
//  before
//  after
// paragraph ke badd

// let p=document.querySelector("p");
// p.after(newBtn);

// new headinng
// let newHeading=document.createElement("h1");
// newHeading.innerHTML="<i> hi i am heading</i>";

// document.querySelector("body").prepend(newHeading);

// remove element dlete
// node.remove()//remove the node
// delet para 
// let para =document.querySelector("p");
// para.remove();

// question

/*
creat a new button element.Giv it a text "cleak me ",background color of red & text color  
  of white*/


// let newBtn = document.createElement("button");
// newBtn.innerText="cleak me!";

// newBtn.style.color="white";
// newBtn.style.backgroundColor="red";
// document.querySelector("body").prepend(newBtn);






































