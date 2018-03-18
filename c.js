function add(a, b) {
    // console.log('KQ =', a + b);
    return a + b;
}

// let tong = add(4, 5);
// console.log(tong);

// console.log(Math.random());
// console.log(Math.round(1.4));
// console.log(Math.floor(1.9));
// console.log(Math.ceil(1.1));

function getRandom(n) {
    return Math.floor(Math.random() * (n + 1))
}

function getRandom2(x, y) {
    // return x + getRandom(y - x);
    return x + Math.floor(Math.random() * (y - x + 1));
}

console.log(getRandom2(1, 4));
