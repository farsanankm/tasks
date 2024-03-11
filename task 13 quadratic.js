
let d;
let root1; let root2;
function quadratic(a,b,c){
    d=b*b -(4*a*c);
   
switch (true) {
    case d>0:
    root1=(-b +Math.sqrt(d))/(2*a);
    root2=(-b -Math.sqrt(d))/(2*a);
    console.log("Two distinct real roots", root1,root2);
   

        
        break;

    case (d)==0:
        root1=(-b)/(2*a);
        console.log(root1);
        break;


        default:
            console.log("d < 0 so imaginary");
     
            break;
}
}
quadratic(1,7,3);






