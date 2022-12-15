import fs from 'fs';
import { crawlerConfig as config } from '../constants';
import { componentMeta, TagName } from '@porsche-design-system/shared';
import {
  Properties,
  PropertiesAggregated,
  PropertyValuesAggregated,
  PropValue,
  TagNameAggregated,
  TagNameData,
} from './types';

export type TagNamesWithProperties = Record<TagName, string[]>;

export const incrementPropertyValues = (
  propValuesAggregated: PropertyValuesAggregated,
  propValue: PropValue
): PropertyValuesAggregated => {
  const propValueAsKey = propValue as number | string;
  const propValueAmount = propValuesAggregated[propValueAsKey];
  const propValuesAggregatedNew = { ...propValuesAggregated };
  if (!propValueAmount) {
    propValuesAggregatedNew[propValueAsKey] = 1;
  } else {
    propValuesAggregatedNew[propValueAsKey] = propValueAmount + 1;
  }
  return propValuesAggregatedNew;
};

export const incrementProperties = (
  propertiesAgregated: PropertiesAggregated,
  properties: Properties
): PropertiesAggregated => {
  const propertiesAgregatedNew = { ...propertiesAgregated };
  return Object.entries(properties).reduce((result, [propName, propValue]) => {
    if (!result[propName]) {
      result[propName] = {
        amount: 1,
        values: {},
      };
    } else {
      result[propName].amount++;
    }
    result[propName].values = incrementPropertyValues(result[propName].values, propValue);

    return result;
  }, propertiesAgregatedNew as PropertiesAggregated);
};

export const incrementTagName = (tagNameAggregated: TagNameAggregated, tagNameData: TagNameData): TagNameAggregated => {
  let tagNameAggregatedNew = { ...tagNameAggregated };
  const componentData = Object.values(tagNameData)[0];

  const amount = tagNameAggregatedNew?.amount;
  const propertiesData = componentData.properties;

  if (tagNameAggregated) {
    tagNameAggregatedNew.amount = amount + 1;
  } else {
    tagNameAggregatedNew = {
      amount: 1,
      hostPdsComponent: 0,
      slot: 0,
      properties: {},
      unusedProperties: [],
    };
  }

  if (componentData.hostPdsComponent) {
    tagNameAggregatedNew.hostPdsComponent = tagNameAggregatedNew.hostPdsComponent + 1;
  }

  if (componentData.slot) {
    tagNameAggregatedNew.slot = tagNameAggregatedNew.slot + 1;
  }

  tagNameAggregatedNew.properties = incrementProperties(tagNameAggregatedNew.properties, propertiesData);

  return tagNameAggregatedNew;
};

export const getTagNamesWithProperties = (): TagNamesWithProperties =>
  Object.entries(componentMeta).reduce(
    (result, [key, value]) => ({
      ...result,
      [key]: value.props ? Object.keys(value.props) : [],
    }),
    {} as TagNamesWithProperties
  );

export const removeOutdatedReports = (): void => {
  fs.readdirSync(config.reportFolderName)
    .filter(
      (fileName: string) => Date.parse(fileName.split(config.dateSplitter)[0]) < Date.now() - config.reportsMaxAge
    )
    .map((fileName: string) => {
      fs.unlinkSync(`${config.reportFolderName}/${fileName}`);
    });
};
