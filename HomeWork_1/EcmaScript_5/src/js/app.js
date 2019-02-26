function raiting(arr) {
    'use strict';

    var one = Math.max.apply(null, arr);
    var sort  = arr.sort(function(a, b) {
        return b - a;
    })
    console.info( `Лучший балл ${one}
    Средний балл топ 3: ${(sort[0] + sort[1] + sort[2]) / 3 ^ 0}`);
}

raiting([74989, 74990, 74990, 62000, 58480, 61800]);