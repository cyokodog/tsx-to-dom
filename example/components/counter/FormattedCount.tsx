import { h } from '../../../src/h';

export const FormattedCount = ({ count }: { count: number }) => (
  <span>{new Intl.NumberFormat('ja-JP').format(count)}</span>
);
