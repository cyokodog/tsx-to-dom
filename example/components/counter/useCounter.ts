export const useCounter = ({ render }: { render: () => void }) => {
  let count = 1000;
  let focusHandler: any;

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
    set focusHandler(v: any) {
      focusHandler = v;
    },

    down: () => {
      count--;
      render();
      focusHandler(`#${countDownId}`);
    },

    up: () => {
      count++;
      render();
      focusHandler(`#${countUpId}`);
    },

    edit: (event: any) => {
      count = event.target.value;
      render();
      focusHandler(`#${countId}`, event.target.selectionStart);
    },
  };
};
