import { notEmpty } from "./arrays";

/**
 * Applies styles to a given HTML element
 * @param element HTML element
 * @param styles object of CSS styles
 * @example applyStyles(document.body, {overflowY: "hidden"});
 */
export const applyStyles = (
  element: HTMLElement,
  styles: Partial<CSSStyleDeclaration>
): void => {
  Object.entries(styles).forEach(([property, value]) => {
    element.style[property] = value;
  });
};

type TransformAttribute =
  | "perspective"
  | "rotate"
  | "rotateX"
  | "rotateY"
  | "rotateZ"
  | "scale"
  | "scaleX"
  | "scaleY"
  | "skewX"
  | "skewY"
  | "translateX"
  | "translateY"
  | "transformX"
  | "transformY"
  | "transformZ";

/**
 * Gets pixel values for each of the given element's transform attributes
 * @param element HTML element
 * @returns map of transform attributes to their values
 * @example "transformX(10px) transformY(20px)" -> {transformX: 10, transformY: 20}
 */
export const parseTransformAttributeValue = (
  element: HTMLElement
): Record<TransformAttribute, number> => {
  const value = element.style.transform;
  const transformFunctions = value.split(" ");

  const entries = transformFunctions
    .map((transformFunction: string) => {
      if (!transformFunction) {
        return undefined;
      }

      const name = transformFunction.split("(")[0];
      const value = parseFloat(transformFunction.split("(")[1].split("px")[0]);
      return isNaN(value) ? undefined : ([name, value] as const);
    })
    .filter(notEmpty);

  return Object.fromEntries(entries) as Record<TransformAttribute, number>;
};
