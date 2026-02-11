const fibonacci = function(num){
    let fib = [1,1,2]
    if(num == 0) return 0;
    if(num < 0) return "OOPS";
    if(num <= 3){
        return fib[num -1];
    }else{
        for(let i = 4; i <= num; i++){
            let nextFibNum = fib[i - 3] + fib[i - 2];
            fib.push(nextFibNum);
        }

        return fib.at(-1);
    }
    
};

// Do not edit below this line
module.exports = fibonacci;
