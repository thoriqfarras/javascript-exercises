const removeFromArray = function(/*array, ...toBeRemoved*/...args) {
    // My initial solution. Looking real C++ esque lol.
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < toBeRemoved.length; j++) {
            if (array[i] === toBeRemoved[j]) {
                array.splice(i, 1);
                i = 0;
            }
        }
    }
    return array;

    /* 
    this TOP's soluton and it's so clean.
    Clearly I haven't yet understand what the filter function does.
    
    Me 10 seconds after previous comment:
    I understand it now!
    line ss is basically filtering arr of elements that does not exist in args, because the args array contain the elements that need removing!  

    const arr = args[0];
    return arr.filter(val => !args.includes(val));
    */
};

console.log(removeFromArray([1, 2, 3], 3, 2));

// Do not edit below this line
module.exports = removeFromArray;
