import { timer as rxTimer, Subscription, Observable } from 'rxjs';

/*
    Sample test when trying out RxJS timer method

    Things I wanted to find out:
    - Can I turn on the timer at any given time
    - Can I pause the timer
    - After pausing, can I turn back on the same timer

    What is happening in this script:
    - To test timing, I print out every second that has passed while running this file.
    - Timer is turned on at 5 seconds
    - Timer triggers every 3 seconds (CRON_TIMER) and prints out "- timer -"
    - Timer is stopped at 10 seconds.
    - Timer is turned back on at 15 seconds.
    - Script finishes and stops at 20 seconds.
*/

let sub: Subscription;
const CRON_TIMER = 1000 * 3;

const someTimer = rxTimer(1000, CRON_TIMER);

function turnOn(t: Observable<any>): Subscription {
  return t.subscribe(() => {
    console.log('- timer -');
  });
}

function turnOff(t: Subscription) {
  return t.unsubscribe();
}


// Print every second
let totalTime = 0;
const intervalId = setInterval(() => {
  console.log(++totalTime);

  // at 5 seconds, we subscribe to the RxJS timer
  if (totalTime === 5) {
    sub = turnOn(someTimer);
  }

  // stop printing after 30 seconds
  if (totalTime >= 20) {
    turnOff(sub);
    clearInterval(intervalId);
  }
}, 1000);

// at 10 seconds, we turn off the timer
setTimeout(() => {
  console.log('trying to stop..');
  turnOff(sub);
}, 10000);

// at 15 seconds, we turn on the timer
setTimeout(() => {
  console.log('trying to turn on..');
  sub = turnOn(someTimer);
}, 15000);