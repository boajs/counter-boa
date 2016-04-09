import { create } from '../actions/services/increment';
import { count } from '../types/counter/count';
import { initByState } from '../types/counter/init-by-state';
import { State } from '../types/state';

type ViewState = {
  count: string;
  onclick: Function;
};

const viewState = (state: State, helpers: any): ViewState => {
  const { e } = helpers;
  const counter = initByState(state);
  return {
    count: String(count(counter)),
    onclick: () => e(create(void 0))
  };
};

const render = (state: ViewState, h: any): any => {
  const { onclick, count } = state;
  return h('div.app', [
    h('button.increment-button', { onclick }, [count])
  ]);
};

const view = (state: State, helpers: any): any => {
  return render(viewState(state, helpers), helpers.create);
};

export { view };
