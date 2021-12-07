/* Это альтернатива без использования методов call() и apply().
   Думаю, это  требовалось по условию ТЗ. */

const user = {
  name: `Joy`,
};

function getWelcome(welcomeWords) {
  this.welcomeWords = welcomeWords;
  return `${this.welcomeWords}, ${this.name}`;
}

function bind(boundTargetFunc, boundThis, ...boundArgs) {
  return function (...args) {
    const obj = {};
    // создаём новое свойство для объекта 'boundThis', чтобы сделать функцию
    // boundTargetFunc методом объекта boundThis
    boundThis[obj] = boundTargetFunc;
    // сохраняем вызов функции в переменную result с параметрами функций
    const result = boundThis[obj](...boundArgs, ...args);
    return result;
  };
}

console.log(bind(getWelcome, user, `Hello`)()); // Hello, Joy
