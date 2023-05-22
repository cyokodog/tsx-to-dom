import { h } from '../../../src/h';
import { getFocusHandler } from '../../../src/getFocusHandler';

import { CountEdit } from './CountEdit';
import { CounterCtrl } from './CounterCtrl';
import { FormattedCount } from './FormattedCount';
import { useCounter } from './useCounter';
import styles from './index.module.css';

export const initialize = (targetElementId: string) => {
  const render = () => {
    const dom = (
      <div id={targetElementId} class={styles.container}>
        <CountEdit
          id={counter.countId}
          count={counter.count}
          onEdit={counter.edit}
        />
        <FormattedCount count={counter.count} />
        <CounterCtrl
          countUpId={counter.countUpId}
          countDownId={counter.countDownId}
          onCountDown={counter.down}
          onCountUp={counter.up}
        />
      </div>
    );
    document.querySelector('#' + targetElementId)?.replaceWith(dom);
    return { focus: getFocusHandler(dom) }; // 再描画でフォーカスやカーソル位置が失われるのでもとに戻す
  };
  const counter = useCounter(render);
  render();
};
