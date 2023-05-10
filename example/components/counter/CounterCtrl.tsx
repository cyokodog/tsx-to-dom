import { h } from '../../../src/h';
import styles from './CounterCtrl.module.css';

export const CounterCtrl = ({
  countUpId,
  countDownId,
  onCountUp,
  onCountDown,
}: {
  countUpId: string;
  countDownId: string;
  onCountUp: () => void;
  onCountDown: () => void;
}) => (
  <div>
    <button id={countDownId} onClick={onCountDown} class={styles.btn}>
      -
    </button>
    <button id={countUpId} onClick={onCountUp} class={styles.btn}>
      +
    </button>
  </div>
);
