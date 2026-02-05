const repeatString = function(str, num) {
    let result = "";
    if(num < 0){
        result = "ERROR";
    }else if(num > 0){
        for(let i = 1; i <= num; i++){
            result += str; 
        }
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
