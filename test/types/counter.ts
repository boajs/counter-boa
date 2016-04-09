import test from 'ava';
import { Counter } from '../../src/types/counter';

// query
import { count } from '../../src/types/counter/count';

// command
import { increment } from '../../src/types/counter/increment';

// factories
import { init } from '../../src/types/counter/init';
import { initByState } from '../../src/types/counter/init-by-state';

import { init as initState } from '../../src/types/state/init';

test(t => {
  const counter1 = init(0);
  t.ok(count(counter1) === 0);
  t.ok(count(increment(counter1)) === 1);

  const counter2 = init(1);
  t.ok(count(counter2) === 1);
  t.ok(count(increment(counter2)) === 2);

  const counter3 = initByState(initState());
  t.ok(count(counter3) === 0);
});
