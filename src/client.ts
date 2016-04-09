import { run, A, O } from 'b-o-a';

import { init as dom } from 'b-o-a/handlers/dom';
import { init as log } from './handlers/log';

import { view } from './views/app';
import { handler as app } from './app';

const main = (): void => {
  run((action$, options) => {
    const log$ = log().handler(action$, options);
    return O.merge<A<any>>(
      dom({
        render: view,
        renderActionType: 'render',
        root: 'div.app'
      }).handler(log$, options),
      app(log$, options)
    );
  });
};

main();
