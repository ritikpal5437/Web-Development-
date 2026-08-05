function add (a,b){
    return a+b ;
}

function sqrt(n){
    return n*n;
    
}
function iseven(n){
    if ( n %2==0){
        return("even");
    }
    else{
        return odd;
    }


}
 
let result = sqrt(5);
console.log(result);


let result1 = add(5,10);
console.log(result1);

let result3 = iseven(5);
console.log(result3);

 


function largest(a,b,c ){
    if( a>b && a>c){
        return a;
    }
    else if ( b > a && b > c)
        {
        return b;
    }
    else{
        return c;
    }
}

let result= largest(5555,666666,555555555);
console.log( "The largest No. is "+result);



const add = function(a, b) {
    return a + b;
};

console.log(add(10, 30));
const add = (a, b) => a + b;

console.log(add(5, 10));


const cube= function(n){
    return n*n*n;
}
console.log(cube(3));

const multi= (a,b)=> a*b;
 console.log(multi(5,10));