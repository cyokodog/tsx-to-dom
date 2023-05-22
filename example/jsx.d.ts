declare namespace JSX {
  // JSX利用時の返却値の型に採用される
  export type Element = HTMLElement;

  // コンポーネントの場合は関数が指定される
  export type ElementName =
    | string
    | ((attribute: Attribute, children: Children) => Element);

  // JSXで定義可能なHTML要素属性の型を定義できる
  // ReactやVueのソースから拝借すると厳密な型定義ができる
  export type Attribute = { [key: string]: any };

  export type Children = Array<Element>;

  // JSXで定義可能なHTMLタグの型を定義できる
  // ReactやVueのソースから拝借すると厳密な型定義ができる
  export interface IntrinsicElements {
    [key: string]: any;
  }
}
