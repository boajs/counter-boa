import { A, O } from 'b-o-a';

export interface ActionHelpers<T> {
  create: (data: T) => A<T>;
  filter: (action$: O<A<any>>) => O<T>;
};

const makeActionHelpers = <T>(type: string): ActionHelpers<T> => {
  const create = (data: T) => ({ type, data });
  const filter = (action$: O<A<any>>): O<T> => {
    return action$
      .filter(action => action.type === type)
      .map(({ data }) => data);
  };
  return { create, filter };
};

export { makeActionHelpers };
