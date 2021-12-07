const user = {
  name: `Joy`,
};

function getWelcome(welcomeWords) {
  this.welcomeWords = welcomeWords;
  return `${this.welcomeWords}, ${this.name}`;
}

function bind(boundTargetFunc, boundThis, ...boundArgs) {
  return function (...args) {
    return boundTargetFunc.apply(boundThis, [...boundArgs, ...args]);
  };
}

console.log(bind(getWelcome, user, `Hello`)()); // Hello, Joy
