function bestScore (arr) {
    var one = Math.max.apply(null, arr);
    var sort = arr.sort(function(a, b) {
        return b - a;
    });
    
    var top = arr.splice(0, 3);
    var sum = top.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    });
    var total = Math.floor(sum / top.length);

    console.log(`Лучший балл: ${one} 
    Средний балл топ 3: ${total}`); 
};
bestScore([74989, 74990, 74990, 62000, 58480, 61800]);
