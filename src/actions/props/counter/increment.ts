import { makeActionHelpers } from '../../../utils/make-action-helpers';
import { Counter } from '../../../types/counter';

const {
  create,
  filter
} = makeActionHelpers<Counter>('props/counter/increment');

export { create, filter };
