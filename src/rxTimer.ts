import { combineLatest, BehaviorSubject, of, timer as rxTimer, Subscription, Observable } from 'rxjs';
import { tap, filter, take, switchMap } from 'rxjs/operators';

// takeWhile

const intervalSecs = 1000 * 3;

const someTimer = rxTimer(1000, intervalSecs);

let sub: Subscription;


// Print every second
let totalTime = 0;
const intervalId = setInterval(() => {
  console.log(++totalTime)

  if (totalTime === 2) {
    sub = turnOn(someTimer)
  }

  if (totalTime >= 30) {
    clearInterval(intervalId)
  }
}, 1000);


function runtestermethod() {
  console.log(this)
  console.log('hello')
}

// rxTimer(5000, CRON_TIMER).pipe(
//   map(() => new actions.FetchIndexReports)
// )


function turnOn(t: Observable<any>): Subscription {
  return t.subscribe(() => {
    console.log('- timer -')
  });
}

function turnOff(t: Subscription) {
  return t.unsubscribe();
}

//
// const a = rxTimer(1000, intervalSecs).pipe(
//   tap(() => runtestermethod())
// )

// .pipe(
//   tap(() => console.log('=> timed interval'))
// )

setTimeout(() => {
  console.log('trying to stop..')
  turnOff(sub)
}, 10000)

setTimeout(() => {
  console.log('trying to turn on..')
  turnOn(someTimer)
}, 15000)