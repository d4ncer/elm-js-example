/* jshint esversion: 6 */
import { createStore } from 'redux';

const reducer = (state = 0, action) => {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1;
  case 'DECREMENT':
    return state - 1;
  default:
    return state;
  }
};

const store = createStore(reducer);

const valEl = document.getElementById('val');
const incEl = document.getElementById('inc');
const decEl = document.getElementById('dec');

const render = () => valEl.innerText = store.getState();

store.subscribe(render);

render();

incEl.addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' });
});

decEl.addEventListener('click', () => {
  store.dispatch({ type: 'DECREMENT' });
});
