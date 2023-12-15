
function isNotNumber(value){
    return !(typeof value === "number");
}

const sumAll = function(from, to) {
    if (from > to){
        let temp = from;
        from = to;
        to = temp;
    }
    if (from < 0 || to < 0) return "ERROR";
    if (isNotNumber(from) || isNotNumber(to)) return "ERROR";

    let sum = 0;
    for (let i = from; i <= to; i++){
        sum += i;
    }
    return sum;

};


// Do not edit below this line
module.exports = sumAll;
