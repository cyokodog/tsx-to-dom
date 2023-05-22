import { FocusHandler } from '../../../src/getFocusHandler';

export const useCounter = (render: () => { focus: FocusHandler }) => {
  let count = 1000;

  const countDownId = 'countDown';
  const countUpId = 'countUp';
  const countId = 'count';

  return {
    get countDownId() {
      return countDownId;
    },

    get countUpId() {
      return countUpId;
    },

    get countId() {
      return countId;
    },

    get count() {
      return count;
    },

    down: () => {
      count--;
      render().focus(`#${countDownId}`);
    },

    up: () => {
      count++;
      render().focus(`#${countUpId}`);
    },

    edit: (event: any) => {
      count = event.target.value;
      render().focus(`#${countId}`, event.target.selectionStart);
    },
  };
};
