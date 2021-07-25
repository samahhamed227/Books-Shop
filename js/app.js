'use strict '
let Globalarr =[];
let HeadInfo =['Book Name', ' Book Pages' ,'Price'];
let table =document.getElementById('tablefill');
let parent = document.getElementById('tablediv');
parent.appendChild(table);
let form = document.getElementById('form');
let btn =document.getElementById('btn');

//creat constructor 
function Book (bookname,bookprice,bookpage){
    this.bookname=bookname;
    this.bookpage=bookpage;
    this.bookprice=bookprice;
Globalarr.push(this);

}
console.log();
//creat random 
function Randomly (min,max){
    return Math.floor(Math.random() *(max-min +1)+min);
}

//head table
function headinfo(){
let headtable =document.createElement('tr');
table.appendChild(headtable);
for (let i = 0; i < HeadInfo.length; i++) {
    let tdhead = document.createElement('th');
    headtable.appendChild(tdhead);
    tdhead.textContent=HeadInfo[i];
    
}

}
//render fuction
Book.prototype.render=function(){
let tablRow =document.createElement('tr');
table.appendChild(tablRow);
let tableCol =document.createElement('td');
tablRow.appendChild(tableCol);
tableCol.textContent=Globalarr.bookname;

let tableCol2 =document.createElement('td');
tablRow.appendChild(tableCol2);
tableCol2.textContent=Globalarr.bookpage;

let tableCol3 =document.createElement('td');
tablRow.appendChild(tableCol3);
tableCol.textContent=Globalarr.bookprice;

}
//set function
function setted (){
    let setdata = JSON.stringify(Globalarr);
    localStorage.setItem('key',setdata);

}
// get function 
function getted(){
    let gettdata = localStorage.getItem('key');
    let normal = JSON.parse(gettdata);
    if(normal){
        for (let i = 0; i < normal.length; i++) {
new Book(normal[i].bookname.normal[i].bookpage,normal[i].bookprice)            
        }
    }
}

form.addEventListener('submit',handlesubmit);
this.headinfo();

//handle submit
function handlesubmit(event){
    event.preventDefault();
    let bookname = event.target.bookname.value;
    let bookpage =Randomly(1,500);
    let bookprice =event.target.bookprice.value;
setted ();
console.log(Globalarr);
}
getted();