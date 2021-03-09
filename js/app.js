'use strict';
'use strict';
let main=document.getElementById('demo');
let hours=['6am','7am','8am','9am','10am','11am','12pm ','1pm ','2pm ','3pm ','4pm ','5pm ','6pm ','7pm','Daily Location Total'];
//-----------------------------------------------

function City(location,max,min,avg_cookie_sale){
  this.min=min;
  this.max=max;
  this.avg_cookie_sale=avg_cookie_sale;
  this.location=location;
  this.total=0;
  this.array=[];
  this.array.push(this.location);
  console.log(this.total);
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
console.log(Seattle.array);



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

function footer(){
  let tablefooter=document.createElement('tfoot');
  let footertr=document.createElement('tr');
  let footertd=document.createElement('td');
  footertd.textContent='total';-
  footertr.appendChild(footertd);
  tablefooter.appendChild(footertd);
  main.appendChild(tablefooter);
  for(let i=1;i<hours.length;i++){
    let cell = document.createElement('td');
    let cellText = document.createTextNode(Seattle.array[i]+Tokyo.array[i]+Paris.array[i]+Dubai.array[i]+Lima.array[i]);
    cell.appendChild(cellText);
    tablefooter.appendChild(cell);
    main.appendChild(tablefooter);
  }

  if(hours.length<=16) {
    let cell = document.createElement('td');
    let cellText = document.createTextNode(Seattle.total+Tokyo.total+Paris.total+Dubai.total+Lima.total);
    cell.appendChild(cellText);
    tablefooter.appendChild(cell);
    main.appendChild(tablefooter);
  }
}
footer();


// let hours=['6am ' ,'7am ','8am','9am','10am','11am','12pm ','1pm ','2pm ','3pm ','4pm ','5pm ','6pm ','7pm'];
// let Seattle={
//   min_cus:23,
//   max_cus:65,
//   avg_cookie_sale:6.3,
//   total:0,
//   generaterandomnumber :function(max_cus,min_cus){
//     return Math.ceil (Math.random() * (max_cus - min_cus+1) + min_cus);
//   },
// };
// let simulatedarray=[];
// for(let i=0;i<hours.length;i++){
//   let simulatedamounts=Math.ceil(Seattle.avg_cookie_sale*Seattle.generaterandomnumber(65,23));
//   simulatedarray.push(simulatedamounts);
//   Seattle.total+=simulatedamounts;
// }
// console.log(simulatedarray);
// let main=document.getElementById('demo');
// let unorderdlist=document.createElement('ul');
// let h2=document.createElement('h2');
// h2.innerText='Seattle';
// unorderdlist.appendChild(h2);
// main.appendChild(unorderdlist);

// for(let i=0;i<hours.length;i++){
//   let orderlist=document.createElement('li');
//   orderlist.innerText=hours[i]+':'+ simulatedarray[i]+'cookies';
//   unorderdlist.appendChild(orderlist);
//   main.appendChild(unorderdlist);
// }
// let orderlist=document.createElement('li');
// orderlist.innerText='total:'+ Seattle.total+'cookies';
// unorderdlist.appendChild(orderlist);
// main.appendChild(unorderdlist);


// let Tokyo={
//   min_cus1:3,
//   max_cus1:24,
//   avg_cookie_sale1:1.2,
//   total1:0,
//   generaterandomnumber :function(max_cus,min_cus){
//     return Math.ceil (Math.random() * (max_cus - min_cus+1) + min_cus);
//   },
// };
// let simulatedarray1=[];
// for(let i=0;i<hours.length;i++){
//   let simulatedamounts1=Math.ceil(Tokyo.avg_cookie_sale1*Tokyo.generaterandomnumber(24,3));
//   simulatedarray1.push(simulatedamounts1);
//   Tokyo.total1+=simulatedamounts1;
// }
// console.log(simulatedarray1);
// let h3=document.createElement('h2');

// h3.innerText='Tokyo';
// unorderdlist.appendChild(h3);
// main.appendChild(unorderdlist);

// for(let i=0;i<hours.length;i++){
//   let orderlist=document.createElement('li');
//   orderlist.innerText=hours[i]+':'+ simulatedarray1[i]+'cookies';
//   unorderdlist.appendChild(orderlist);
//   main.appendChild(unorderdlist);
// }
// orderlist=document.createElement('li');
// orderlist.innerText='total:'+ Tokyo.total1+'cookies';
// unorderdlist.appendChild(orderlist);
// main.appendChild(unorderdlist);

// let Dubai={
//   min_cus2:11,
//   max_cus2:38,
//   avg_cookie_sale1:3.7,
//   total2:0,
//   generaterandomnumber :function(max_cus,min_cus){
//     return Math.ceil (Math.random() * (max_cus - min_cus+1) + min_cus);
//   },
// };
// let simulatedarray2=[];
// for(let i=0;i<hours.length;i++){
//   let simulatedamounts2=Math.ceil(Dubai.avg_cookie_sale1*Dubai.generaterandomnumber(38,11));
//   simulatedarray2.push(simulatedamounts2);
//   Dubai.total2+=simulatedamounts2;
// }
// console.log(simulatedarray2);
// let h4=document.createElement('h2');
// h4.innerText='Dubai';
// unorderdlist.appendChild(h4);
// main.appendChild(unorderdlist);
// for(let i=0;i<hours.length;i++){
//   let orderlist=document.createElement('li');
//   orderlist.innerText=hours[i]+':'+ simulatedarray2[i]+'cookies';
//   unorderdlist.appendChild(orderlist);
//   main.appendChild(unorderdlist);
// }
// orderlist=document.createElement('li');
// orderlist.innerText='total:'+Dubai.total2+'cookies';
// unorderdlist.appendChild(orderlist);
// main.appendChild(unorderdlist);

// let Paris={
//   min_cus2:20,
//   max_cus2:38,
//   avg_cookie_sale1:2.3,
//   total3:0,
//   generaterandomnumber :function(max_cus,min_cus){
//     return Math.ceil (Math.random() * (max_cus - min_cus+1) + min_cus);
//   },
// };
// let simulatedarray3=[];
// for(let i=0;i<hours.length;i++){
//   let simulatedamounts3=Math.ceil(Paris.avg_cookie_sale1*Paris.generaterandomnumber(38,20));
//   simulatedarray3.push(simulatedamounts3);
//   Paris.total3+=simulatedamounts3;
// }
// console.log(simulatedarray2);
// let h5=document.createElement('h2');
// h5.innerText='Paris';
// unorderdlist.appendChild(h5);
// main.appendChild(unorderdlist);
// for(let i=0;i<hours.length;i++){
//   let orderlist=document.createElement('li');
//   orderlist.innerText=hours[i]+':'+ simulatedarray2[i]+'cookies';
//   unorderdlist.appendChild(orderlist);
//   main.appendChild(unorderdlist);
// }
// orderlist=document.createElement('li');
// orderlist.innerText='total:'+Paris.total3+'cookies';
// unorderdlist.appendChild(orderlist);
// main.appendChild(unorderdlist);

// let Lima={
//   min_cus2:2,
//   max_cus2:16,
//   avg_cookie_sale1:4.6,
//   total4:0,
//   generaterandomnumber :function(max_cus,min_cus){
//     return Math.ceil (Math.random() * (max_cus - min_cus+1) + min_cus);
//   },
// };
// let simulatedarray4=[];
// for(let i=0;i<hours.length;i++){
//   let simulatedamounts4=Math.floor(Lima.avg_cookie_sale1*Lima.generaterandomnumber(38,20));
//   simulatedarray4.push((simulatedamounts4));
//   Lima.total4+=simulatedamounts4;
// }
// console.log(simulatedarray2);
// let h6=document.createElement('h2');
// h6.innerText='Lima';
// unorderdlist.appendChild(h6);
// main.appendChild(unorderdlist);
// for(let i=0;i<hours.length;i++){
//   let orderlist=document.createElement('li');
//   orderlist.innerText=hours[i]+':'+ simulatedarray2[i]+'cookies';
//   unorderdlist.appendChild(orderlist);
//   main.appendChild(unorderdlist);
// }
// orderlist=document.createElement('li');
// orderlist.innerText='total:'+Lima.total4+'cookies';
// unorderdlist.appendChild(orderlist);
// main.appendChild(unorderdlist);
