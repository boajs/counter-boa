import { makeActionHelpers } from '../../../utils/make-action-helpers';
import { State } from '../../../types/state';

const {
  create,
  filter
} = makeActionHelpers<State>('props/state/update');

export { create, filter };
