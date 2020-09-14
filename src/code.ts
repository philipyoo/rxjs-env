import { combineLatest, BehaviorSubject, of } from 'rxjs';
import { tap, filter, take, switchMap } from 'rxjs/operators';

/*
    Testing out some random RxJS operators
*/

// Print every second
let totalTime = 0;
const intervalId = setInterval(() => {
  console.log(++totalTime)

  // stop at 20 seconds
  if (totalTime >= 20) {
    clearInterval(intervalId)
  }
}, 1000);

const subject1$ = new BehaviorSubject(true)
const subject2$ = new BehaviorSubject(true)

combineLatest(
  subject1$,
  subject2$,
).pipe(
  filter(([subject1, subject2]) => !subject1 && !subject2),
  take(1),
  switchMap(() => {
    console.log('-- inside switchMap --');
    return of([])
  }),
).subscribe(() => {
  console.log('==== finish ====');
});

setTimeout(() => {
  subject2$.next(false);
  console.log('-> 5 sec passed, subject2 false');
}, 5000);

setTimeout(() => {
  subject1$.next(false);
  console.log('-> 9 sec passed, subject1 false');
}, 9000);

setTimeout(() => {
  subject2$.next(true);
  console.log('-> 10 sec passed, subject2 true');
}, 10000);

setTimeout(() => {
  subject2$.next(false);
  console.log('-> 15 sec passed, subject2 true');
}, 15000);
