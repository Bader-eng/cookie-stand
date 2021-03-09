'use strict';
let hours=['6:00am' +'7am'+'8am'+'9am','10am','11am','12pm ','1pm ','2pm ','3pm ','4pm ','5pm ','6pm ','7pm'];
let city1=['Seattle'+'Tokyo'];
let main=document.getElementById('demo');
let unorderdlist=document.createElement('table');
let h2=document.createElement('thead');
let h3=document.createElement('tr');
let h4=document.createElement('th');
let h5=document.createElement('tr');
h5.innerText=city1;
h3.appendChild(h5);
h2.appendChild(h3);
unorderdlist.appendChild(h2);
main.appendChild(unorderdlist);
h4.innerText=hours;
h3.appendChild(h4);
h2.appendChild(h3);
unorderdlist.appendChild(h2);
main.appendChild(unorderdlist);
//-----------------------------------------------

function City(max,min,avg_cookie_sale,location,total){
  this.min=min;
  this.max=max;
  this.avg_cookie_sale=avg_cookie_sale;
  this.location=location;
  this.total=total;
  this.generaterandomnumber=function(){
    return Math.ceil (Math.random() * (this.max - this.min+1) + this.min);
  };
  let simulatedarray=[];
  for(let i=0;i<hours.length;i++){
    let simulatedamounts=Math.ceil(this.avg_cookie_sale*this.generaterandomnumber());
    simulatedarray.push(simulatedamounts);
    this.total+=simulatedamounts;
  }
  //----------------------------------------------
  //----------------------------------------------
  //for(let i=0;i<hours.length;i++){
  //let orderlist=document.createElement('table');
  //let unorderdlist=document.createElement('table');
  // let h2=document.createElement('thead');
  let main=document.getElementById('demo');
  let unorderdlist=document.createElement('table');
  let h2=document.createElement('thead');
  let h3=document.createElement('tr');
  let h4=document.createElement('th');
  h4.innerText=simulatedarray;
  h3.appendChild(h4);
  h2.appendChild(h3);
  unorderdlist.appendChild(h2);
  main.appendChild(unorderdlist);
  //h2.appendChild(h3);
  //unorderdlist.appendChild(h3);
  //main.appendChild(h3);
  //}
  // let orderlist=document.createElement('li');
  // orderlist.innerText='total:'+ this.total+'cookies';
  // unorderdlist.appendChild(orderlist);
  // main.appendChild(unorderdlist);
}

let Seattle= new City(65,23,6.3,'Seattle',0);
let Tokyo = new City(65,30,1.2,'tokeo',0);
console.log(Seattle);
