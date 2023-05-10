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
  return <input id={id} value={count} onInput={onEdit} class={styles.inp} />;
};
