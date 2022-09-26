const printHello = () => {
  console.log('Hello!');
}

const executeAfterDelay = (time, myFunction) => {
    setTimeout(myFunction, time * 1000);
}

console.log(executeAfterDelay(5, printHello));
// After about 5 seconds, you should see the message being logged
