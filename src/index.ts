import type * as CSS from "csstype";
import type { CSSRuleObject } from "tailwindcss/types/config";

export type CSSProperties = CSS.Properties<number | (string & {})>;

export type CSSPropertiesHyphen = CSS.PropertiesHyphen<number | (string & {})>;

export type CSSPseudos = { [K in CSS.Pseudos]?: StyleObject };

export interface StyleObject
  extends CSSProperties,
    CSSPropertiesHyphen,
    CSSPseudos {
  [key: string]: StyleObject | string | number | undefined;
}

export function defineComponent(component: StyleObject) {
  return component as CSSRuleObject;
}
