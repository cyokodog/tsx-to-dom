export const getFocusHandler = (node: HTMLElement) => {
  return (selector: string, cursorPosition: number = 0) => {
    const target = node.querySelector(selector);
    if (!target) return;
    (target as any)?.focus();
    if (cursorPosition)
      (target as any)?.setSelectionRange(cursorPosition, cursorPosition);
  };
};
