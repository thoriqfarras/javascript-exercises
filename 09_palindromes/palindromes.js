const palindromes = function (string) {
    let alphabets = /^[A-Za-z]+$/;
    letters = string.toLowerCase().split('').filter(letter => letter.match(alphabets)).join('');
    return (Array.from(letters)
            .reverse()
            .join('') == letters); 
    
    
    // TOP's solution:
   

    /* const processedString = string.toLowerCase().replace(/[^a-z]/g, "");
    return (
        processedString
        .split("")
        .reverse()
        .join("") == processedString
        ); */

    /* This didn't convert the processed string to a list to replace
    all the non letters. This uses the replace() function which is
    way more concise.

    Also, the split() creates a new array so when reversed, the original
    string doesn't get altered.

    Also, this exercise involves using regex. Skimmed an MDN article
    about it and it's definitely something needed learning in the
    future.

    Really good. */
    
};
    
palindromes('racecars');

// Do not edit below this line
module.exports = palindromes;
    