import { A, O, Handler } from 'b-o-a';

import { filter as state$ } from '../actions/props/state/update';
import { create as render } from '../actions/render';

const handler: Handler = (action$: O<A<any>>, _: any): O<A<any>> => {
  return state$(action$).map(render);
};

export { handler };
