import { Counter } from '../../types/counter';
import { init } from '../../types/counter/init';

const increment = (counter: Counter): Counter => {
  return init(counter.count + 1);
};

export { increment };
