function merge_sort(a,b){
    let c=a.concat(b);
    console.log(c)
    console.log(c.sort(function(x,y){return x-y}))

}

let k=merge_sort([12,35,65],[3,5,6]);
