import { makeActionHelpers } from '../utils/make-action-helpers';
import { State } from '../types/state';

const {
  create,
  filter
} = makeActionHelpers<State>('render');

export { create, filter };
