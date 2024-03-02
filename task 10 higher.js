const side=[2,4,6];

const area=function(side){
    return side * side;
}

const perimeter=function(side){
    return side * 4 ;
}


const answer=function(side,logic){
    let out=[];
    for(i=0;i<side.length;i++){
        out.push(logic(side[i]));
    }
    return out;
}

console.log(answer(side,area));
console.log(answer(side,perimeter));
