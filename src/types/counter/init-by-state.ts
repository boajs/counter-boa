import { Counter } from '../../types/counter';
import { State } from '../../types/state';

const initByState = (state: State): Counter => {
  return state.counter;
};

export { initByState };
