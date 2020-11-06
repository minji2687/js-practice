class Counter {
  constructor(runEveryFiveTimes) {
    this.counter = 0;
    this.callback = runEveryFiveTimes;
  }
  increase() {
    this.counter++;
    console.log(this.counter);
    if (this.counter % 5 === 0) {
      this.callback && this.callback(this.counter);
    }
  }
}
const coolcounter = new Counter();

const printCounter = new Counter(printYo);
const alertCounter = new Counter(AlertYo);

function printYo(counter) {
  console.log("Yo!", counter);
}

function AlertYo(counter) {
  alert(counter);
}

coolcounter.increase();
coolcounter.increase();
coolcounter.increase();
coolcounter.increase();
coolcounter.increase();
