/* jshint esversion:6 */
const defaultValues = {
  dispatchIncrement: [],
  dispatchDecrement: []
};
const ports = Elm.worker(Elm.CounterStore, defaultValues).ports;

const valEl = document.getElementById('val');
const incEl = document.getElementById('inc');
const decEl = document.getElementById('dec');

const render = (val) => valEl.innerText = val;

ports.counterChanges.subscribe(render);

render(0);

incEl.addEventListener('click', () => {
  ports.dispatchIncrement.send([]);
});

decEl.addEventListener('click', () => {
  ports.dispatchDecrement.send([]);
});

