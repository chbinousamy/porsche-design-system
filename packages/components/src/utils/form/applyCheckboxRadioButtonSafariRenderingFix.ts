type ElementsMap = Map<string, ElementMap>;
type ElementMap = Map<Document | ShadowRoot, boolean>;

const elementsMap: ElementsMap = new Map();

const getElementMap = (element: HTMLElement): ElementMap => {
  const tagName = element.tagName;
  if (!elementsMap.has(tagName)) {
    elementsMap.set(tagName, new Map());
  }
  return elementsMap.get(tagName);
};

// TODO: we can get rid of this fix, as soon as p-checkbox-wrapper and p-radio-button-wrapper have been deprecated and
//  replaced by encapsulated p-checkbox and p-radio-button component
export const applyCheckboxRadioButtonSafariRenderingFix = (element: HTMLElement): void => {
  const documentOrShadowRoot = element.getRootNode() as Document | ShadowRoot;
  const elementMap: ElementMap = getElementMap(element);

  if (!elementMap.has(documentOrShadowRoot)) {
    elementMap.set(documentOrShadowRoot, true);

    // Workaround for Safari >= 15.5 rendering issues (see #3012 for reference).
    // Checkbox/Radio-Button change is not rendered immediately if input or its label is still hovered.
    // The same bug appears on keyboard navigation.
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(`${element.tagName.toLowerCase()}>input:checked{transform:rotateZ(0)}`);
    documentOrShadowRoot.adoptedStyleSheets.push(sheet);
  }
};
