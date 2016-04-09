import { State } from '../../types/state';
import { init as initCounter } from '../../types/counter/init';

const init = (): State => {
  return {
    counter: initCounter()
  };
};

export { init };
