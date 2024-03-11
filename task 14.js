const radius=[2,4,6];

const area=function(radius){
    return (3.14*radius * radius);
}

const diameter=function(radius){
    return (radius * 2 );
}


const answer=function(radius,logic){
    let out=[];
    for(i=0;i<radius.length;i++){
        out.push(logic(radius[i]));
    }
    return out;
}

console.log(answer(radius,area));
console.log(answer(radius,diameter));
