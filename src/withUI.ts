import { BehaviorSubject } from 'rxjs';

/*
    Note: Example using index.html button clicks

    This file should be used with command: `$ npm run server`
    Then open up localhost:8080, open the console, and start clicking the buttons on screen
*/

const btnA = document.getElementById('buttonA');
const btnB = document.getElementById('buttonB');

const bsA$ = new BehaviorSubject(false);
const bsB$ = new BehaviorSubject(false);

btnA.addEventListener("click", (e:Event) => toggleLogging(bsA$, 'A'));
btnB.addEventListener("click", (e:Event) => toggleLogging(bsB$, 'B'));

function toggleLogging(subject$: BehaviorSubject<boolean>, identifier: string) {
    if (subject$.getValue()) {
        console.log(`Logging for identifier: ${identifier}`);
    }

    subject$.next(!subject$.getValue());
} 