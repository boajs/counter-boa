import { A, O, Handler } from 'b-o-a';

import { handler as increment } from '../services/increment';
import { handler as render } from '../services/render';

const handler: Handler = (action$: O<A<any>>, options: any): O<A<any>> => {
  return O.merge(
    increment(action$, options),
    render(action$, options)
  );
};

export { handler };
