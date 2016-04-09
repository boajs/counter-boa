import { Counter } from '../../types/counter';

const init = (count: number = 0): Counter => {
  return { count };
};

export { init };
