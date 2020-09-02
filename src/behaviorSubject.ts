import { combineLatest, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

let a$ = new BehaviorSubject(false)
let b$ = new BehaviorSubject(false)

let ace$ = combineLatest(a$, b$).pipe(map(i => i.some(Boolean)))

a$.next(false)
b$.next(true)

ace$.subscribe(i => {
  console.log('-- subscribe --')
  console.log(i)
})
