import { h } from '../../../src/h';
import { getFocusHandler } from '../../../src/getFocusHandler';

import { CountEdit } from './CountEdit';
import { CounterCtrl } from './CounterCtrl';
import { FormattedCount } from './FormattedCount';
import { useCounter } from './useCounter';
import styles from './index.module.css';

export const Counter = () => {
  const counter = useCounter({
    render: () => {
      document.querySelector('[data-counter-component]')?.replaceWith(init());
    },
  });

  const init = () => {
    const dom = (
      <div data-counter-component class={styles.container}>
        <div>
          <CountEdit
            id={counter.countId}
            count={counter.count}
            onEdit={counter.edit}
          />
        </div>
        <div>
          <FormattedCount count={counter.count} />
        </div>
        <CounterCtrl
          countUpId={counter.countUpId}
          countDownId={counter.countDownId}
          onCountDown={counter.down}
          onCountUp={counter.up}
        />
      </div>
    );
    counter.focusHandler = getFocusHandler(dom);
    return dom;
  };

  return init();
};
