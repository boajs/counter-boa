import { A, O, Handler } from 'b-o-a';

import { handler as state } from './props/';
import { handler as service } from './services/';

const handler: Handler = (action$: O<A<any>>, options: any): O<A<any>> => {
  return O.merge<A<any>>(
    state(action$, options),
    service(action$, options)
  );
};

export { handler };
