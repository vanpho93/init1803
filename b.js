// throw 1;

try {
    throw new Error('Loi gi do.');
} catch (error) {
    console.log(error.message);
}
console.log(123);
