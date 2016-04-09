import { makeActionHelpers } from '../../utils/make-action-helpers';

const {
  create,
  filter
} = makeActionHelpers<void>('services/increment');

export { create, filter };
