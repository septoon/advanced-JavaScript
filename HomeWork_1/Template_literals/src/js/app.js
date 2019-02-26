const balance = (strings, money, scores) => {
    const text = strings[0];
    const cases = [2, 0, 1, 1, 1, 2];
    const score = scores[ (money % 100 > 4 && money % 100 < 20) ? 2 : cases [(money % 10 < 5) ? money%10 : 5]];
    return `${text} ${money} ${score}`;
}

const money = 523;
const titles = ['балл', 'балла', 'баллов'];
const output = balance `Ваш баланс: ${money} ${titles}`;
console.log(output);
