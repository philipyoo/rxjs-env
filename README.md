# rxjs-env

Manual test rxjs. Output can be via the browser console or the terminal stdout

## Setup

- Clone repo and `$ cd rxjs-env`
- Install dependencies `$ npm install`
    - Note: Please use node version <= 12. You can check your version by `$ node -v`
- Open `./entry.ts` and set which file you want to run.

## Commands

If you want to see stdout to the terminal, simply run `$ npm start`

If you want to see stdout to the browser console and use the UI:
- `$ npm run server`
- go to "localhost:8080"
- open your browser console
- interact with UI if you setup interactions between UI and stdout

## Samples

For stdout to terminal examples, see following files:
- src/behaviorSubject.ts
- src/code.ts
- src/rxTimer.ts

For stdout to browser console examples, see following files:
- src/withUI.ts
- index.html