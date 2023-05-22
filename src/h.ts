const booleanAttrs = ['disabled', 'selected', 'checked'];

export const h = (
  elementName: JSX.ElementName,
  attributes: JSX.Attribute,
  ...children: JSX.Children
): HTMLElement => {
  if (typeof elementName === 'function') {
    return elementName(attributes, children) as HTMLElement;
  }
  const el = document.createElement(elementName);
  for (const key in attributes) {
    if (/^on[A-Z][a-z]/.test(key)) {
      const eventName = key.slice(2).toLowerCase();
      el.addEventListener(eventName, attributes[key]);
    } else if (booleanAttrs.includes(key)) {
      if (attributes[key] === true) el.setAttribute(key, 'true');
    } else {
      el.setAttribute(key, attributes[key]);
    }
  }
  el.append(...children);
  return el;
};
