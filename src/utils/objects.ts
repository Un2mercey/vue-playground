import { Entries, Keys, Values } from '@/@types';

export const typeSafeKeys = <T extends object>(object: T) => Object.keys(object) as Keys<T>;
export const typeSafeValues = <T extends object>(object: T) => Object.values(object) as Values<T>;
export const typeSafeEntries = <T extends object>(object: T) => Object.entries(object) as Entries<T>;
