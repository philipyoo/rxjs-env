import { combineLatest, BehaviorSubject, of } from 'rxjs';
import { tap, filter, take, switchMap } from 'rxjs/operators';


// Print every second
let totalTime = 0;
const intervalId = setInterval(() => {
  console.log(++totalTime)

  if (totalTime >= 20) {
    clearInterval(intervalId)
  }
}, 1000);


const ace$ = new BehaviorSubject(true)
const bay$ = new BehaviorSubject(true)

combineLatest(
  ace$,
  bay$,
).pipe(
  filter(([ace, bay]) => !ace && !bay),
  take(1),
  switchMap(() => {
    console.log('-- inside switchMap --')
    return of([])
  }),
  tap(() => {

  })
).subscribe(() => {
  console.log('==== finish ====')
})



setTimeout(() => {
  ace$.next(false)
  console.log('-> 15 sec passed, ace false')
}, 15000)

setTimeout(() => {
  bay$.next(false)
  console.log('-> 5 sec passed, ace false')
}, 5000)
