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