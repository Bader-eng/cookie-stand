'use strict';
let hours=['6:00am' ,'7am','8am'+'9am','10am','11am','12pm ','1pm ','2pm ','3pm ','4pm ','5pm ','6pm ','7pm','total2'];
// let city1=['Seattle'+'Tokyo'];
// let main=document.getElementById('demo');
// let unorderdlist=document.createElement('table')
// let h2=document.createElement('thead');
// let h3=document.createElement('tr');
// let h4=document.createElement('th');
// let h5=document.createElement('tr');
// h5.innerText=city1;
// h3.appendChild(h5);
// h2.appendChild(h3);
// unorderdlist.appendChild(h2);
// main.appendChild(unorderdlist);
// h4.innerText=hours;
// h3.appendChild(h4);
// h2.appendChild(h3);
// unorderdlist.appendChild(h2);
// main.appendChild(unorderdlist);
//-----------------------------------------------

function City(location,max,min,avg_cookie_sale,total){
  this.min=min;
  this.max=max;
  this.avg_cookie_sale=avg_cookie_sale;
  this.location=location;
  this.total=total;
  this.array=[];
  this.array.push(location);

  this.generaterandomnumber=function(){
    return Math.ceil (Math.random() * (this.max - this.min+1) + this.min);
  };
  let simulatedarray=[];
  for(let i=0;i<15;i++){
    let simulatedamounts=Math.ceil(this.avg_cookie_sale*this.generaterandomnumber());
    simulatedarray.push(simulatedamounts);
    this.array.push(simulatedamounts);
    this.total+=simulatedamounts;
  }
  this.generate_table=function() {
    let main=document.getElementById('demo');
    let tbl = document.createElement('table');
    let tblBody = document.createElement('tbody');
    for (let i = 0; i < 1; i++) {
      var row = document.createElement('tr');
      for (let j = 0; j < 16; j++) {
        let cell = document.createElement('td');
        let cellText = document.createTextNode(this.array[j]);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
      tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);
    main.appendChild(tbl);
  };
  this.generate_table();

  //----------------------------------------------
  //----------------------------------------------
  //for(let i=0;i<hours.length;i++){
  //let orderlist=document.createElement('table');
  //let unorderdlist=document.createElement('table');
  // let h2=document.createElement('thead');
  // let main=document.getElementById('demo');
  // let unorderdlist=document.createElement('table');
  // let h2=document.createElement('thead');
  // let h3=document.createElement('tr');
  // let h4=document.createElement('th');
  // h4.innerText=simulatedarray;
  // h3.appendChild(h4);
  // h2.appendChild(h3);
  // unorderdlist.appendChild(h2);
  // main.appendChild(unorderdlist);
  //h2.appendChild(h3);
  //unorderdlist.appendChild(h3);
  //main.appendChild(h3);
  //}
  // let orderlist=document.createElement('li');
  // orderlist.innerText='total:'+ this.total+'cookies';
  // unorderdlist.appendChild(orderlist);
  // main.appendChild(unorderdlist);
}

let Seattle= new City('Seattle',65,23,6.3,0);
let Tokyo = new City('Tokyo',24,3,1.2,0);
let Dubai=new City('Dubai',38,11,3.7,0);
let Paris=new City('Paris',35,20,2.1,0);
let Lima=new City('Lima',16,2,4.6,0);
console.log(Seattle);
let table=function(){
  let main=document.getElementById('demo');
  let unorderdlist=document.createElement('table');
  let h2=document.createElement('thead');
  for (let i = 0; i < 1; i++) {
    var h3 = document.createElement('tr');
    for (let j = 0; j < 15; j++) {
      let h4 = document.createElement('th');
      let cellText = document.createTextNode(hours[j]);
      h4.appendChild(cellText);
      h3.appendChild(h4);
    }
    h2.appendChild(h3);
  } h2.appendChild(unorderdlist);
  main.appendChild(h2);
};
table();
