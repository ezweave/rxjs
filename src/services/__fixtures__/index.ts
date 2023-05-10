import { Starship } from '@rx-example/types';
import ImperialShuttleJSON from './ImperialShuttle.json';
import XWingJSON from './XWing.json';
import { transformAllFieldNamesToCamel } from 'field-caser';

export * from './LukeSkywalker';

export { ImperialShuttleJSON, XWingJSON };

export const ImperialShuttle = <Starship>(
  transformAllFieldNamesToCamel(ImperialShuttleJSON)
);
export const XWing = <Starship>transformAllFieldNamesToCamel(XWingJSON);
