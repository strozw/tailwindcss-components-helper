import type * as CSS from "csstype";
import type TwConfig from "tailwindcss/types/config";

export type CSSProperties = CSS.Properties<number | (string & {})>;

export type CSSPropertiesHyphen = CSS.PropertiesHyphen<number | (string & {})>;

export type CSSPseudos = { [K in CSS.Pseudos]?: CSSObject };

/**
 * This type is defined for support `addComponents` & `matchComponents` CSS Object.
 * supported feature is bellow.
 *
 * - `camelCase` properties
 * - `kebab-case` properties
 * - precomposed values
 * - pesudos classes
 */
export interface CSSObject
  extends CSSProperties,
    CSSPropertiesHyphen,
    CSSPseudos {
  [key: string]: CSSObject | string | number | undefined;
}

/**
 * This helper function support more strictly tailwindcss components definition.
 */
export function css(component: CSSObject) {
  return component as TwConfig.CSSRuleObject;
}
