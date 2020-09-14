import { combineLatest, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

/*
    Example using behavior subjects and combineLatest

    If any of the behavior subjects have a true value, the result subscription will
    print true. Otherwise the subscription will print false.
*/

let subject1$ = new BehaviorSubject(true);
let subject2$ = new BehaviorSubject(false);

let combinedSubjects$ = combineLatest(
    subject1$,
    subject2$
).pipe(
    map(i => i.some(Boolean))
);

subject1$.next(true);
subject2$.next(false);

combinedSubjects$.subscribe(result => {
  console.log('-- subscribe --')
  console.log(result)
});
