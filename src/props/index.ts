import { A, O, Handler } from 'b-o-a';

import { prop as counter } from '../props/counter';
import { State } from '../types/state';
import { create } from '../actions/props/state/update';

const handler: Handler = (action$: O<A<any>>, options: any): O<A<any>> => {
  return O.combineLatest<State>(
    counter(action$, { count: 0 }),
    (counter) => ({ counter })
  )
    .map(state => create(state));
};

export { handler };
