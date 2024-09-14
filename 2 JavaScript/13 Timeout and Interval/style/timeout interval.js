// setTimeout & setInterval
console.log("setTimeout & setInterval");

// Example 1
console.log("Example 1");
(() => {
  let counter = 0;
  let increment = () => console.log(++counter);

  console.log("Start");
  increment();

  let response = setTimeout(increment, 5000);
  console.log("response", response);
  console.log("End");
})//();

// Example 2
console.log("Example 2");
(() => {
  let counter = 0;
  let increment = (head) => console.log(head, ++counter);

  console.log("Start");
  increment("first");

  let timerId = setTimeout(() => increment("timer"), 5000);
  console.log("timerId", timerId);
  setTimeout(() => {
    clearTimeout(timerId);
  }, 1000);

  setInterval(() => increment("interval"), 1000);
  console.log("End");
})//();


// Example 3
console.log("Example 3");
(() => {
  let counter = 0;
  let increment = (head) => console.log(head, ++counter);

  console.log("Start");
  increment("first");

  let timerId = setTimeout(() => increment("timer"), 5000);
  console.log("timerId", timerId);
  setTimeout(() => {clearTimeout(timerId)}, 1000);

  let intervalId =  setInterval(() => increment("interval"), 1000);
  setTimeout(() => {clearTimeout(intervalId)}, 10000);
  console.log("End");
})//();

// Example 4
console.log("Example 4");
(() => {
  let counter = 0;
  let increment = (head) => console.log(head, ++counter);

  console.log("Start");
  increment("first");

  let timerId = setTimeout(() => increment("timer"), 5000);
  console.log("timeId", timerId);
  setTimeout(() => {
    clearTimeout(timerId);
  }, 1000);

  setTimeout(() => {
    clearInterval(timerId);
  }, 10);

  console.log("End");
})();
