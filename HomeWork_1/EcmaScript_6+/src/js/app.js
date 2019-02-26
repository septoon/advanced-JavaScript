const bonus = (shopingCart) => {
    'use strict';

    let price = 0;

    for (let cost of shopingCart) {
        price += cost;
    }

    if (price => 10000) {
        console.info('Ваш бонус равен ' + Math.round((price - 10000) * 0.05));
    } else {
        console.info('Нет бонуса');
    }
}

bonus([200, 550, 4000, 23, 58, 5000, 485, 711]);
