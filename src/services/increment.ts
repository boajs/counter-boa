import { A, O, Handler } from 'b-o-a';

import { filter as increment$ } from '../actions/services/increment';
import { filter as state$ } from '../actions/props/state/update';
import { create as save } from '../actions/props/counter/increment';
import { State } from '../types/state';
import { initByState } from '../types/counter/init-by-state';
import { increment } from '../types/counter/increment';

const handler: Handler = (action$: O<A<any>>, _: any): O<A<any>> => {
  return increment$(action$)
    .withLatestFrom(state$(action$), (_, state) => ({ state }))
    .map(({ state }: { state: State }) => {
      const counter = initByState(state);
      const next = increment(counter);
      return save(next);
    });
};

export { handler };
