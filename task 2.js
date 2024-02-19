//[ no,district,+ve cases,death rate,curred rate,1st dose vaccine,2nd dose vaccine]
covid_data = [
    [1,'Ernakulam',34000,2000,23000,20000,2000],
    [2,'Idukki',14000,3000,25000,30000,1000],
    [3,'Thrissur',24000,4000,33000,24000,2500],
    [4,'Pathanamthitta',20000,2000,45000,22000,1500],
    [5,'Kozhikode',44000,5000,12000,21000,500],
    [6,'Palakkad',12000,1000,20000,23000,3400],
    [7,'Kottayam',27000,1500,27000,14000,1000],
    [8,'Kollam',14000,2500,25000,18000,2700]
]

//1. district having Highest +ve case - 

high=covid_data.reduce((x1,x2)=>x1[2]>x2[2]?x1:x2);
let a=high[1];
console.log(a);


// let arr=[1,2,3,4,5]
//     console.log(arr.length());


//2. district having Highest 1st dose vaccine - 


console.log('-------------------------------------------');
high=covid_data.reduce((x1,x2)=>x1[5]>x2[5]?x1:x2);
let b=high[1];
console.log(b);
    

//3. district having lowest death rate - 
console.log('-------------------------------------------');
high=covid_data.reduce((x1,x2)=>x1[3]<x2[3]?x1:x2);
let c=high[1];
console.log(c);
  


//4. sort data with +ve case in descending order - 
console.log('-------------------------------------------');
sort=covid_data.sort((x1,x2)=>x1[2]-x2[2]).forEach(x=>console.log(x[1]));


    
//5. is district with +ve cases > 15000 - 
console.log('-------------------------------------------');
covid_data.filter(x=>x[2]>15000).forEach(x=>console.log(x[1]));

//6. sort data with 1st dose vaccine - 
console.log('-------------------------------------------');
covid_data.sort((x1,x2)=>x1[5]>x2[5]).forEach(x=>console.log(x[1]));

//7. Print Thrissur details - 
console.log('-------------------------------------------');
let d=covid_data[4];
console.log(d);