import { TagName } from '@porsche-design-system/shared';

export const getPreloadedTagNamesForCoreChunk = (element: HTMLLinkElement): TagName[] => {
  const preloadedTagNames: TagName[] = [];

  let nextSibling = element.nextElementSibling as HTMLLinkElement;
  while (nextSibling?.href && nextSibling.href.includes('porsche-design-system.')) {
    const tagName = ('p-' + nextSibling.href.split('/').pop().split('.')[1]) as TagName;
    preloadedTagNames.push(tagName);
    nextSibling = nextSibling.nextElementSibling as HTMLLinkElement;
  }

  return preloadedTagNames;
};

export const getPreloadedTagNamesForVersion = (version: string): TagName[] => {
  const coreChunkLinkElement = document.querySelector(
    `[href*=porsche-design-system.v${version}]`.replace(/\./g, '\\.')
  ) as HTMLLinkElement;

  return coreChunkLinkElement ? getPreloadedTagNamesForCoreChunk(coreChunkLinkElement) : [];
};

export const getPorscheDesignSystemPrefixesForVersions = (): { [key: string]: [string] } =>
  Object.entries(document.porscheDesignSystem).reduce(
    (result, [key, value]) => ({
      ...result,
      [key]: value.prefixes,
    }),
    {}
  );
