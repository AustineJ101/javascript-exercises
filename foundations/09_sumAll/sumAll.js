const sumAll = function(a , b) {
    let smaller;
    let larger;
    let sum = 0;

    if(!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0){
        return "ERROR";
    }
    if(a < b){
        smaller = a;
        larger = b;
    }else{
        smaller = b;
        larger = a;
    }

    for(let i = smaller; i <= larger; i++){
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
