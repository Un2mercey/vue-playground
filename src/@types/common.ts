export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;
export type ValueOf<T> = T[keyof T];
export type Override<T, R> = Omit<T, keyof R> & R;
export type Keys<T> = (keyof T)[];
export type Values<T> = { [K in keyof T]: T[K] }[keyof T][];
export type Entries<T> = { [K in keyof T]: [K, T[K]] }[keyof T][];
