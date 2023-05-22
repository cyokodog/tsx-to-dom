import { h } from '../../../src/h';

export const FormattedCount = ({ count }: { count: number }) => (
  <div>
    <span>{new Intl.NumberFormat('ja-JP').format(count)}</span>
  </div>
);
