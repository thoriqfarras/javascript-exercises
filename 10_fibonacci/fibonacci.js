const fibonacci = function(n) {
    /* let a = 0;
    let b = 1;
    let c = 0;

    for (let i = 0; i < n; i++) {
        c = a + b;
        a = b;
        b = c;
    }

    return c; 
    
    This was my original loop.
    After having a peek at the TOP's solution,
    I tweaked mine into as follows.
    */

    if (+n < 0) return 'OOPS';
    if (+n === 0) return 0;

    let a = 0;
    let b = 1;

    for (let i = 0; i < n - 1; i++) {
        const temp = b;
        b = a + b;
        a = temp;
    }

    return b;

};

// Do not edit below this line
module.exports = fibonacci;
