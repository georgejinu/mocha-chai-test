function calculateSquare(number, callback) {
    setTimeout(() => {
        if(typeof number !== 'number') {
            callback(new Error('Argument of type number is expected!'))
            return;
        }
        else {
            const result = number * number;
            callback(null, result);
        }        
    }, 1000)
}

module.exports = calculateSquare;