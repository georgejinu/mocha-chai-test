function calculateSquare(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof number !== 'number') {                
                return reject(new Error('Argument of type number is expected!'));
            }
            else {
                const result = number * number;
                resolve(result);
            }        
        }, 1000)
    })
}

module.exports = calculateSquare;