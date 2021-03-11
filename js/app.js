'use strict';
'use strict';
let main=document.getElementById('demo');
let hours=['6am','7am','8am','9am','10am','11am','12pm ','1pm ','2pm ','3pm ','4pm ','5pm ','6pm ','7pm','Daily Location Total'];
//-----------------------------------------------
//let array2=[];
let cellText=0;
function City(location,max,min,avg_cookie_sale){
  //this.new();
  this.min=min;
  this.max=max;
  this.avg_cookie_sale=avg_cookie_sale;
  this.location=location;
  this.total=0;
  this.array=[];
  this.array.push(this.location);
  this.generaterandomnumber=function(){
    return Math.ceil (Math.random() * (this.max - this.min+1) + this.min);
  };
  let simulatedarray=[];
  for(let i=0;i<14;i++){
    let simulatedamounts=Math.ceil(this.avg_cookie_sale*this.generaterandomnumber());
    simulatedarray.push(simulatedamounts);
    console.log(simulatedarray);
    this.array.push(simulatedamounts);
    this.total+=simulatedamounts;
    cellText+=simulatedamounts;
  }
  this.array.push(this.total);
  //let total2 = 0;
  //total2+=this.total;
  this.generate_table=function() {
    let main=document.getElementById('demo');
    for (let i = 0; i < 1; i++) {
      var row = document.createElement('tr');
      for (let j = 0; j < 16; j++) {
        let cell = document.createElement('td');
        let cellText = document.createTextNode(this.array[j]);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
    }
    main.appendChild(row);
  };
  this.generate_table();
}

let Seattle= new City('Seattle',65,23,6.3,0);
let Tokyo = new City('Tokyo',24,3,1.2,0);
let Dubai=new City('Dubai',38,11,3.7,0);
let Paris =new City('Paris',35,20,2.1,0);
let Lima =new City('Lima',16,2,4.6,0);

let form =document.getElementById('newcity');
form.addEventListener('submit',generatlocation1);

function generatlocation1(event) {
  let form =document.getElementById('newcity');
  form.addEventListener('submit',generatlocation1);
  event.preventDefault();
  let namecity=event.target.namebranch.value;
  let maxcustmernumber=event.target.number1.value;
  let mincustmernumber=event.target.number2.value;
  let avg=event.target.number3.value;
  let value =new City(namecity,maxcustmernumber,mincustmernumber,avg,0);
  //let z=0;
  function footer(){
    let tablefooter=document.createElement('tfoot');
    let footertr=document.createElement('tr');
    let footertd=document.createElement('td');
    footertd.textContent='total';-
    footertr.appendChild(footertd);
    tablefooter.appendChild(footertd);
    main.appendChild(tablefooter);
    let array3=[];
    for(let i=1;i<hours.length;i++){
      let cell = document.createElement('td');
      let cellText = document.createTextNode(Seattle.array[i]+Tokyo.array[i]+Paris.array[i]+Dubai.array[i]+Lima.array[i]+value.array[i]);
      let array3=[];
      array3.push(cellText);
      cell.appendChild(cellText);
      tablefooter.appendChild(cell);
      main.appendChild(tablefooter);
      //z++1;
    }
    if(hours.length<=16) {
      let cell = document.createElement('td');
      let cellText1 = document.createTextNode(cellText);
      cell.appendChild(cellText1);
      tablefooter.appendChild(cell);
      main.appendChild(tablefooter);
    }
  }
  footer();
}

function headingscreator(){
  let thead=document.createElement('thead');
  let emptyth=document.createElement('th');
  thead.appendChild(emptyth);
  main.appendChild(thead);
  for(let i=0;i<hours.length;i++){
    let th=document.createElement('th');
    th.textContent=hours[i];
    thead.appendChild(th);
    main.appendChild(thead);
  }
}
headingscreator();

// function footer(){
//   let tablefooter=document.createElement('tfoot');
//   let footertr=document.createElement('tr');
//   let footertd=document.createElement('td');
//   footertd.textContent='total';-
//   footertr.appendChild(footertd);
//   tablefooter.appendChild(footertd);
//   main.appendChild(tablefooter);
//   for(let i=1;i<hours.length;i++){
//     let cell = document.createElement('td');
//     let cellText = document.createTextNode(Seattle.array[i]+Tokyo.array[i]+Paris.array[i]+Dubai.array[i]+Lima.array[i]);
//     cell.appendChild(cellText);
//     tablefooter.appendChild(cell);
//     main.appendChild(tablefooter);
//   }

//   if(hours.length<=16) {
//     let cell = document.createElement('td');
//     let cellText1 = document.createTextNode(cellText);
//     cell.appendChild(cellText1);
//     tablefooter.appendChild(cell);
//     main.appendChild(tablefooter);
//   }
// }
// footer();
//new Array();
//let form =document.getElementById('newcity');
// this.generatlocation=function(){
//form.addEventListener('submit',generatlocation);
// let form =document.getElementById('newcity');
// form.addEventListener('submit',generatlocation1);
// function generatlocation1(event) {
//   let form =document.getElementById('newcity');
//   form.addEventListener('submit',generatlocation1);
//   event.preventDefault();
//   let namecity=event.target.namebranch.value;
//   let maxcustmernumber=event.target.number1.value;
//   let mincustmernumber=event.target.number2.value;
//   let avg=event.target.number3.value;
//   let value =new City(namecity,maxcustmernumber,mincustmernumber,avg,0);
// }
//let value=new City(window.namecity,window.maxcustmernumber,window.mincustmernumber,window.avg,0);
//let ss= window.value;
