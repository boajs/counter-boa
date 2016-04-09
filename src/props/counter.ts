import { A, O } from 'b-o-a';

import { Counter } from '../types/counter';
import { filter as increment$ } from '../actions/props/counter/increment';
import { increment } from '../types/counter/increment';

export type PropHandler<T> = (action$: O<A<any>>, state: T) => O<T>;

const prop: PropHandler<Counter> = (
  action$: O<A<any>>,
  state: Counter
): O<Counter> => {
  return O.of<Counter>(state).merge<(state: Counter) => Counter>(
    increment$(action$).map(counter => () => counter)
  ).scan((state: Counter, updater: (state: Counter) => Counter) => {
    return updater(state);
  });
};

export { prop };
