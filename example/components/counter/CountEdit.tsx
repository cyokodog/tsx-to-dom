import { h } from '../../../src/h';
import styles from './CountEdit.module.css';

export const CountEdit = ({
  id,
  count,
  onEdit,
}: {
  id: string;
  count: number;
  onEdit: (event: any) => void;
}) => {
  return (
    <div>
      <input id={id} value={count} onInput={onEdit} class={styles.inp} />
    </div>
  );
};
