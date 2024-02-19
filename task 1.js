
products=[
    {pid:100,pName:'apple',band:'5g',price:120000,display:'led'},
    {pid:101,pName:'samsaung',band:'5g',price:45000,display:'led'},
    {pid:102,pName:'blackberry',band:'4g',price:50000,display:'led'},
    {pid:103,pName:'nokia',band:'3g',price:1200,display:'lcd'},
    {pid:104,pName:'motorola',band:'4g',price:10000,display:'lcd'}
]

console.log('-------------------------------------------------------------')
//1. print product name only


products.map(x=>x.pName).forEach(x=>console.log(x));


console.log('-------------------------------------------------------------')

//2. print all mobile details whose display is lcd

products.filter(x=>x.display=='lcd').forEach(x=>console.log(x));




console.log('-------------------------------------------------------------')

//3. print 5g mobile phone name


products.filter(x=>x.band=='5g').forEach(x=>console.log(x.pName));



console.log('-------------------------------------------------------------')
//4. filter mobile based on price

products.sort((x1,x2)=>x2.price-x1.price).forEach(x=>console.log(x.pName));






console.log('--------------------------------------------------------------');
//5. print costly mobile

cost=products.reduce((x1,x2)=>x1.price>x2.price?x1:x2)
console.log(cost.pName);


console.log('---------------------------------------------------------------')
//6. print low cost mobile

low=products.reduce((x1,x2)=>x1.price<x2.price?x1:x2)
console.log(low.pName);



console.log('---------------------------------------------------------------');