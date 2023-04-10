function recursing(a,b){

    if (b > 0){

        return ((a*recursing(a,b-1) ));
    } else{
        return 1;
    }

}

console.log(recursing(2,5));
console.log(recursing(7,3));
console.log(recursing(12,2));
console.log(recursing(9,4));