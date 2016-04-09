import { A, O, Handler } from 'b-o-a';

export interface LogResponse {
  handler: Handler;
}

const init = (): LogResponse => {
  const handler = (action$: O<A<any>>, options: any): O<A<any>> => {
    return action$
      .do(({ type }) => console.log('action type: ' + type))
      .share();
  };
  return { handler };
};

export { init };
